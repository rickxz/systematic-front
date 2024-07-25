import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();
  const url = 'http://localhost:8080/';

  const logout = async () => {
    try {
      const response = await axios.post(url+"api/v1/auth/logout", {}, {withCredentials: true})
      console.log(response);
      navigate('/');
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return logout;
};