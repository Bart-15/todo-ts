import axios, {AxiosError} from 'axios';
const BASE_URL = "https://node-ts-todo.herokuapp.com/api/v1";

const axiosPublic = axios.create({
    baseURL: BASE_URL,
})


export {
    axiosPublic,
    AxiosError
}


