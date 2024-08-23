import axios from "axios";
import useDeleteUserData from "../temporaryHooks/useDeleteUserData";

export default function useLogout() {
  const url = 'http://localhost:8080/';
  const deleteUserData = useDeleteUserData();

  const logout = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      let options = {
        headers: { Authorization: `Bearer ${accessToken}` }
      }

      console.log(`${url}auth/logout   ` + accessToken)
      const response = await axios.post(`${url}auth/logout`, options)
      console.log(response);
      deleteUserData();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return logout;
};