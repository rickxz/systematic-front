import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // Qualquer outra limpeza necessária
    navigate('/'); // Redirecionar para a página de login
  };

  return logout;
};

export default useLogout;