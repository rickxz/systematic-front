import axios from "axios";
import { useState } from "react";

const useRefreshToken = () => {
    const [accessToken, setAccessToken] = useState('none');

    const url = ("http://localhost:8080/");
    const refreshToken = localStorage.getItem('refreshToken');
    
    async function refresh(){
        let response = await axios.post(`${url}api/v1/auth/refresh`, {"refreshToken": refreshToken});
        console.log(response);
        setAccessToken(response.data.accessToken);
    }

    refresh();
    return accessToken;
}

export default useRefreshToken;