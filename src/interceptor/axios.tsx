/*this file is responsible to send the refresh token to the server if the access token has
been expired*/

import axios from 'axios';

const url = "http://localHost:8080/"

//case the response fails, this is the responsible to refresh the access token
axios.interceptors.response.use(res => res, async (error) => {
    if(error.response.status === 401){
        const refreshToken  = localStorage.getItem("refreshToken");
        const resp = await axios.post(`${url}api/v1//auth/refresh`, {refreshToken});
        console.log(`refreshed: ${resp}`)

        try{
            if(resp.status === 200){ //is the requisition stts equals to 200, restor the new access token value
                localStorage.setItem('accessToken', resp.data.accessToken);
                error.config.headers["Authorization"] = `Bearer ${resp.data.accessToken}`;
                return axios(error.config);
            }
            else{
                throw new Error('Failed to refresh token');
            }
        } catch(err){
            console.error(err);
        }
    }
})