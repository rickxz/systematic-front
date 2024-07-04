import axios from "axios";
import { useEffect, useState } from "react";


const useRefreshToken = () => {
    const [accessToken, setAccessToken] = useState('');

    const url = ("http://localhost:8080/");
    const refreshToken = localStorage.getItem('refreshToken');

    useEffect(() => {
        async function fetchData(){
            let response = await axios.post(`${url}api/v1/auth/refresh`, {"refreshToken": refreshToken});
            setAccessToken(response.data.accessToken);
        }
        fetchData();
    }, [])
    return accessToken;
}

export default useRefreshToken;