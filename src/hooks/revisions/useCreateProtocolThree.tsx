import axios from "../../interceptor/interceptor";

const useCreateProtocolTwo = async (analysis: string, id: string) => {

    const data = {
        analysisAndSynthesisProcess: analysis
    };

    console.log(data);

    const url = `http://localhost:8080/systematic-study/${id}/protocol`;

    try{
        await axios.put(url, data, {withCredentials: true});
    }
    catch(err){
        console.log(err);
    }
}

export default useCreateProtocolTwo