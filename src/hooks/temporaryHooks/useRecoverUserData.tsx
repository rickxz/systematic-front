import { useVerifyIfLoggedIn } from "./useVerifyIfLoggedIn";

export default function useRecoverUserData() {
    const userData = localStorage.getItem("username");
    const isLoggednIn =  useVerifyIfLoggedIn();

    if (isLoggednIn) return userData;
    return null;
}