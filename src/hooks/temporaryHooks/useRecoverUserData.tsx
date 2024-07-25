export default function useRecoverUserData() {

    function recoverUserData() {
        const userData = localStorage.getItem("username");
        console.log(userData);
        return userData;
    }

    return recoverUserData;
}