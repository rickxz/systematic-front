import axios from "axios";

const Axios = axios.create({});

Axios.interceptors.response.use((response) => response, async (error) => {
    if(error.response.status == 401 || error.response.status == 500){
        try{
            let response = await axios.post("http://localhost:8080/api/v1/auth/refresh", {}, {withCredentials: true});
            console.log(response);
            
            if(response.status == 200){
                return axios(error.config)
            }
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
    else throw error;
})

export default Axios;