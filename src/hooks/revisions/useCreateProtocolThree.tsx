import axios from "../../interceptor/interceptor";

const useCreateProtocolTwo = async (analysis: string, id: string) => {

    const data = {
        analysisAndSynthesisProcess: analysis
    }

    console.log(data);

    const url = `http://localhost:8080/systematic-study/${id}/protocol`

    try{
        let response = await axios.put(url, data, {withCredentials: true});
        console.log(response);
        let response2 = await axios.get(url, {withCredentials: true});
        console.log(response2);
    }
    catch(err){
        console.log(err);
    }
}

export default useCreateProtocolTwo