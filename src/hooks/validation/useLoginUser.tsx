import axios from 'axios';
import userToLoginProp from "../../../public/interfaces/userToLogin"

export default async function useLoginUser(data: userToLoginProp){
    const url = 'http://localhost:8080/';

    try {
        const response = await axios.post(url+"api/v1/auth", data, {withCredentials: true});
        return response;
    } catch (err) {
        throw err;
    }
}