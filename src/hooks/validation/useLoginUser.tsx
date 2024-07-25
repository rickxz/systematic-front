import axios from '../../interceptor/interceptor';
import userToLoginProp from "../../../public/interfaces/userToLogin"
import useStorageUserData from '../temporaryHooks/useStorageUserData';
import useRecoverUserData from '../temporaryHooks/useRecoverUserData';

export default async function useLoginUser(data: userToLoginProp){
    const url = 'http://localhost:8080/';
    const storageUserData = useStorageUserData(data);
    const recoverUserData = useRecoverUserData();

    try {
        const response = await axios.post(url+"api/v1/auth", data, {withCredentials: true});
        console.log(response);
        localStorage.setItem("myReviewsLink", response.data._links["find-my-reviews"].href);

        storageUserData();
        console.log("username:")
        console.log(recoverUserData())

        return response;
    } catch (err) {
        throw err;
    }
}