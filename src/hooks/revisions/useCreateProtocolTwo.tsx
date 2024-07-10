import axios from "axios"



const useCreateProtocolTwo = async (keywords: string[], databases: string[], id: string, retry = true) => {

    const data = {
        keywords,
        informationSources: databases
    }

    const url = `http://localhost:8080/systematic-study/${id}/protocol`

    try{
        let response = await axios.put(url, data, {withCredentials: true});
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}

export default useCreateProtocolTwo