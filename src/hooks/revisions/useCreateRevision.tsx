import axios from "axios";
import useRefreshToken from "../validation/useRefreshToken";

const useCreateRevision = async (title: string, description: string, collaborators: string[], retry: boolean = true) => {
    const url = 'http://localhost:8080/api/v1/systematic-study';
    const data = {
        title,
        description,
        collaborators
    }

    let accessToken = localStorage.getItem('accessToken');

    try{
        let response = await axios.post(url, data, {
            "headers": {
                "Authorization": `Bearer ${accessToken}`
            } 
        });

        console.log(response);
    } catch(err){
    if(axios.isAxiosError(err)){
        if(err.response?.status === 401 && retry == true){
            let newAccesstoken = await useRefreshToken();
            localStorage.setItem('accessToken', newAccesstoken);
            useCreateRevision(title, description, collaborators, false);
        }
    }
        console.log(err);

    }
}

export default useCreateRevision;