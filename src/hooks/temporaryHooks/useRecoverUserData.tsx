export default function useRecoverUserData() {
    const userData = localStorage.getItem("username");
    console.log(userData);
    return userData;
}