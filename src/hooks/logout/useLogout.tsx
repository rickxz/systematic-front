import axios from "axios";
import { useNavigate } from "react-router-dom";
import useDeleteUserData from "../temporaryHooks/useDeleteUserData";

export default function useLogout() {
  const navigate = useNavigate();
  const url = 'http://localhost:8080/';
  const deleteUserData = useDeleteUserData();

  const logout = async () => {
    try {
      const response = await axios.post(url+"api/v1/auth/logout", {}, {withCredentials: true})
      console.log(response);
      deleteUserData();
      navigate('/');
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return logout;
};