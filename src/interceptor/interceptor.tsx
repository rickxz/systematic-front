import axios from "axios";

const Axios = axios.create({});

Axios.interceptors.response.use((response) => response, async (error) => {
    if(error.response.status == 401 || error.response.status == 500){
        try{
            const refreshToken = localStorage.getItem("refreshToken")

            let response = await axios.post("http://localhost:8080/api/v1/auth/refresh", {refreshToken});
            console.log(response);
            
            if(response.status == 200){
                localStorage.setItem("accessToken", response.data.accessToken);
                error.config.headers["Authorization"] = `Bearer ${response.data.accessToken}`;
                return axios(error.config)
            }
        }
        catch(err){
            console.log(err);
        }
    }
})

export default Axios;