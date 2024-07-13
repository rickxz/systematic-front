import axios from '../../interceptor/interceptor';
import sendUserToRegisterProp from "../../../public/interfaces/userToRegisterInterface"

export default function useRegisterUser(data: sendUserToRegisterProp){
    const url = 'http://localhost:8080/';

    try {
        return axios.post(`${url}api/v1/user`, data);
    } catch (err: any) {
        throw err;
    }
}