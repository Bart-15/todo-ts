import {useState, useEffect} from 'react';
import { axiosPublic, AxiosError } from '../../api/axios';
import { Todos } from '../../types/todo';

const Component = ()  => {
    const [todos, setTodos] = useState<Todos[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

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

    return (
        <div>
            {
                todos.map((item: Todos, idx: number) => {
                    return (<p key={idx}>{item.title}</p>)
                })
            }
        </div>
    );
}

export default Component;