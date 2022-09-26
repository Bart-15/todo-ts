import { useContext, useEffect} from 'react';
import { axiosPublic, AxiosError } from '../../api/axios';
import { useForm, SubmitHandler } from "react-hook-form";
import {ButtonLink, Button, Container, Title, StyledContainer, FormContainer, FormGroup, FormLabel, ErrorText, Input } from '../Styled/styled';
import DarkModeContext from '../../context/DarkMode';


interface IFormInputs {
    title: string
    description: string,
}


const AddTodo = () => {
    const initVal  = {
        title:'',
        description:''
    } 

    const darkContext = useContext(DarkModeContext);
    const {isDark} = darkContext;

    const { 
        register,
        formState, 
        reset,
        formState: { errors }, 
        handleSubmit } = useForm<IFormInputs>({defaultValues: initVal});

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ title: '', description:'' });
          }
    }, [formState, reset])

    const onSubmit: SubmitHandler<IFormInputs> = async(data) => {
        console.log("hello", data)
        try {
            const res = await axiosPublic.post('/todos', data);
            console.log("Hello",res);
            
        }catch (error) {
            console.log(error)
        }
    };

    return ( 
        <Container>
            <Container>
                <Title>Add Todo</Title>
                <Button>
                    <ButtonLink to="/">Go back</ButtonLink>
                </Button>
            </Container>
            <StyledContainer isDark={isDark} width={70}>
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <FormLabel>Title:</FormLabel>
                    <Input type="text" {...register("title", { required: true })} />
                    {errors.title && <ErrorText className="errors">Title is required</ErrorText>}
                </FormGroup>
                <FormGroup>
                    <FormLabel>Description:</FormLabel>
                    <Input type="text" {...register("description", { required: true })} />
                    {errors.description && <ErrorText className="errors">Description is required</ErrorText>}
                </FormGroup>
                    <input type="submit" />
                </FormContainer>
            </StyledContainer>
        </Container>
    );
}
 
export default AddTodo;