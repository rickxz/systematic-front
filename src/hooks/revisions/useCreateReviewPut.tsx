import axios from "../../interceptor/interceptor";

interface Props{
    title: string;
    description: string;
    id: string;
}

const useCreateReviewPut = async ({title, description, id}: Props) => {
  
    try {
        let url = `http://localhost:8080/api/v1/systematic-study/${id}`;
        const token = localStorage.getItem('accessToken');

        const data = {
            title,
            description,
        }

        const options = {
            headers: { Authorization: `Bearer ${token}` }
        }

        let response = await axios.put(url, data, options);
        
        return response;
    }
    catch(err) { 
        console.log(err); 
    }
}

export default useCreateReviewPut