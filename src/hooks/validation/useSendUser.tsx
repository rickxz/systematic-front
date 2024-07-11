import axios from 'axios';
import sendUserProp from "../../../public/interfaces/sendUserInterface"

export default function useRegisterUser(data: sendUserProp){
    const url = 'http://localhost:8080/';

    return axios.post(`${url}api/v1/user`, data);
}