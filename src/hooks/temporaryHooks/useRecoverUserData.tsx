import { useVerifyIfLoggedIn } from "./useVerifyIfLoggedIn";

export default function useRecoverUserData() {
    const userData = localStorage.getItem("username");
    const verifyIfLoggedInResponse =  useVerifyIfLoggedIn();
    
    if (verifyIfLoggedInResponse.isLoggedIn) return userData;

    localStorage.clear();
    return null;
}