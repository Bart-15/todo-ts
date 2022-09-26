import {useState, useEffect, useContext} from 'react';
import { axiosPublic, AxiosError } from '../../api/axios';
import { Todos } from '../../types/todo';
import DarkModeContext from '../../context/DarkMode';
import { Container, StyledContainer, Title, TodoContainer, ActionContainer, ButtonLink, Button } from '../Styled/styled';


const Component = ()  => {
    const [todos, setTodos] = useState<Todos[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
    const darkContext = useContext(DarkModeContext);
    const {isDark} = darkContext;

    useEffect(() => {
        let isMounted = true;
        let controller = new AbortController();

        const init = async() => {
            setLoading(true);
            try {
                const { data } = await axiosPublic.get('/todos', {signal:controller.signal});
                isMounted && setTodos(data.result);
                setLoading(false);
            }catch (error){
                const err = error as AxiosError;
                if(err?.response) {
                    console.log(err.response.data)
                }                
            }
        };

        init();

        return () => {
            isMounted = false;
            controller.abort();
        }
    },[]);
    
    const fetchTodos = async() => {
        const { data } = await axiosPublic.get('/todos');
        setTodos(data);
    }

    const handleDelete = (id: string) => async(event: any) => {
        try {
            setLoading(true);
            const {data} = await axiosPublic.delete(`/todos/${id}`);
            if(data.success) 
                fetchTodos();
                setLoading(false)
                return
        }catch(error) {
            const err = error as AxiosError;
            if(err?.response) {
                console.log(err.response.data)
            }                
        }
    }

    return (
        <Container>
        <Container>
            <Title>My Todo App</Title>
            <Button>
                <ButtonLink to="/add-todo">Add Todo</ButtonLink>
            </Button>
        </Container>
        <StyledContainer isDark={isDark} width={70}>
            
            {
                !todos || todos.length === 0  ? "No Data" :  todos.map((todo: Todos) => {
                    return (
                    <TodoContainer key={todo._id}>
                        <div>
                            <p>{todo.title}</p>
                        </div>
                        <ActionContainer>
                            <Button>Completed</Button>
                        </ActionContainer>
                    </TodoContainer>
                    )
                })
            }
        </StyledContainer>
        </Container>
    );
}

export default Component;