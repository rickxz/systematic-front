import axios from "axios";

const useCreateRevision = async (title: string, description: string, collaborators: string[]) => {
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
        console.log(err);
    }
}

export default useCreateRevision;