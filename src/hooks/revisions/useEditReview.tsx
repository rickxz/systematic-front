import axios from "../../interceptor/interceptor";
interface ReviewData{
    title: string;
    description?: string;
    id: string;
}


const useEditRevision = async ({title, description, id}: ReviewData) => {
    const url = `http://localhost:8080/api/v1/systematic-study/${id}`;

    if (!description){
        description = "null";
    }

    const data = {
        title,
        description
    }

    try{
        const accessToken = localStorage.getItem('accessToken');
        let options = {
            headers: { Authorization: `Bearer ${accessToken}` }
        }

        let response = await axios.put(url, data, options);

        console.log(response);
        return response.data.systematicStudyId;
    } catch(err){
        console.log(err);
    }
}

export default useEditRevision;