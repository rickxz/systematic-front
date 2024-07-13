import axios from '../../interceptor/interceptor';
import userToLoginProp from "../../../public/interfaces/userToLogin"

export default async function useLoginUser(data: userToLoginProp){
    const url = 'http://localhost:8080/';

    try {
        const response = await axios.post(url+"api/v1/auth", data);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("myRevisionsLink", response.data._links["find-my-reviews"].href);
        return response;
    } catch (err) {
        throw err;
    }
}