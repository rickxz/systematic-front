import axios from "axios";
import { useEffect, useState } from "react";


const useRefreshToken = () => {
    const [accessToken, setAccessToken] = useState('');
    const [refreshed, setRefreshed] = useState(false);

    const url = ("http://localhost:8080/");
    const refreshToken = localStorage.getItem('refreshToken');

    useEffect(() => {
        async function fetchData(){
            try{
                let response = await axios.post(`${url}api/v1/auth/refresh`, {"refreshToken": refreshToken});
                setAccessToken(response.data.accessToken);
                setRefreshed(true);
            } catch(err){
                console.error(err);
                return err;
            }
        }
        fetchData();
    }, [])
    
    if(refreshed){
        return accessToken;
    }
}

export default useRefreshToken;