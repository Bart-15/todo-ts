import {useState, useEffect, useContext} from 'react';
import { axiosPublic, AxiosError } from '../../api/axios';
import { Todos } from '../../types/todo';
import ToggleDarkMode from '../Styled/ToggleBtn';
import DarkModeContext from '../../context/DarkMode';
import { Container, StyledContainer, Title, TodoContainer, ActionContainer } from '../Styled/styled';


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
            await axiosPublic.delete(`/todos/${id}`);
            fetchTodos();
            setLoading(false)
        }catch(error) {
            const err = error as AxiosError;
            if(err?.response) {
                console.log(err.response.data)
            }                
        }
    }

    return (
        <>
        <ToggleDarkMode />
        <Container>
            <Title>My Todo App</Title>
        </Container>
        <StyledContainer isDark={isDark} width={70}>
            {
                !todos || todos.length === 0 || loading ? "No Data" :  todos.map((todo: Todos) => {
                    return (
                    <TodoContainer key={todo._id}>
                        <div>
                            <p>{todo.title}</p>
                        </div>
                        <ActionContainer>
                            <button>Completed</button>
                            <button onClick={handleDelete(todo._id)}>Delete</button>
                        </ActionContainer>
                    </TodoContainer>
                    )
                })
            }
        </StyledContainer>
        </>
    );
}

export default Component;