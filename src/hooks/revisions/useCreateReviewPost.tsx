import axios from "../../interceptor/interceptor";
interface ReviewData{
    title: string;
    description?: string;
    collaborators?: string[];
}


const useCreateRevision = async ({title, description, collaborators}: ReviewData) => {
    const url = 'http://localhost:8080/api/v1/systematic-study';

    if (!description){
        description = "null";
    }

    const data = {
        title,
        description,
        collaborators
    }

    try{
        const accessToken = localStorage.getItem('accessToken');
        let options = {
            headers: { Authorization: `Bearer ${accessToken}` }
        }

        let response = await axios.post(url, data, options);

        return response.data.systematicStudyId;
    } catch(err){
        console.log(err);
    }
}

export default useCreateRevision;