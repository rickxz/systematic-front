import axios from 'axios';
import sendUserToRegisterProp from "../../../public/interfaces/sendUserInterface"

export default function useRegisterUser(data: sendUserToRegisterProp){
    const url = 'http://localhost:8080/';

    return axios.post(`${url}api/v1/user`, data);
}