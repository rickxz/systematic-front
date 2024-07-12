import axios from "axios";
import useRefreshToken from "../validation/useRefreshToken";

const useCreateRevision = async (title: string, description: string, collaborators: string[], retry: boolean = true) => {
    const url = 'http://localhost:8080/api/v1/systematic-study';
    const data = {
        title,
        description,
        collaborators
    }

    try{
        let response = await axios.post(url, data, {withCredentials: true});

        console.log(response);
        return response.data.systematicStudyId;
    } catch(err){
    if(axios.isAxiosError(err)){
        if(err.response?.status === 401 && retry == true){
            await useRefreshToken();
            await useCreateRevision(title, description, collaborators, false);
        }
        else if(err.response?.status === 500 && retry == true){
            await useRefreshToken();
            await useCreateRevision(title, description, collaborators, false);
        }
        else if(err.response?.status === 404 && retry == true){
            await useRefreshToken();
            await useCreateRevision(title, description, collaborators, false);
        }
    }
        console.log(err);

    }
}

export default useCreateRevision;