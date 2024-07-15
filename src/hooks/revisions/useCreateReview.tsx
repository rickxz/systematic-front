import axios from "../../interceptor/interceptor";

const useCreateRevision = async (title: string, description: string, collaborators: string[]) => {
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
        console.log(err);
    }
}

export default useCreateRevision;