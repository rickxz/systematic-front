import axios from "../../interceptor/interceptor";

const useCreateProtocolThree = async (researchQuestions: string[], analysisAndSynthesisProcess: string, id: string) => {
    
    const url = `http://localhost:8080/systematic-study/${id}/protocol`;

    let data = {
        researchQuestions,
        analysisAndSynthesisProcess
    }
    try{
        let token = localStorage.getItem("accessToken");
        let response = await axios.put(url, data, {headers: {Authorization: `Bearer ${token}`}});
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}

export default useCreateProtocolThree