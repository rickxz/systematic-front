import { useVerifyIfLoggedIn } from "./useVerifyIfLoggedIn";

export default function useRecoverUserData() {
    const userData = localStorage.getItem("username");
    console.log(userData);
    const isLoggednIn =  useVerifyIfLoggedIn();

    if (isLoggednIn) return userData;
    return null;
}