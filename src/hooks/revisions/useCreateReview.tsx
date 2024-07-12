import axios from "../../interceptor/interceptor";
import useRefreshToken from "../validation/useRefreshToken";

const useCreateRevision = async (title: string, description: string, collaborators: string[], retry: boolean = true) => {
    const url = 'http://localhost:8080/api/v1/systematic-study';
    const data = {
        title,
        description,
        collaborators
    }

    try{
        const token = localStorage.getItem("accestoken");
        let response = await axios.post(url, data, {headers: {"Authorization": `Bearer ${token}`}});
        console.log(response);
        return response.data.systematicStudyId;
    } catch(err){
        console.log(err);
    }
}

export default useCreateRevision;