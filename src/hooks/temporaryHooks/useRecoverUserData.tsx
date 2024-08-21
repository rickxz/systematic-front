import useLogout from "../logout/useLogout";
import { useVerifyIfLoggedIn } from "./useVerifyIfLoggedIn";

export default function useRecoverUserData() {
    const userData = localStorage.getItem("username");
    const verifyIfLoggedInResponse =  useVerifyIfLoggedIn();
    const logout = useLogout();

    let isLoggedIn = verifyIfLoggedInResponse.isLoggedIn;
    let isChecking = verifyIfLoggedInResponse.isChecking;
    
    if (isChecking) {
        console.log("waiting to checking finish")
        return;
    }
    else if (!isLoggedIn) {
        console.log("user not logged in")
        localStorage.clear();
        return null
    }
    else if (!userData) {
        console.log("Sem localStorage. Será deslogdo")
        logout();
        return;
    }
    console.log("user logged in")
    return userData;
}