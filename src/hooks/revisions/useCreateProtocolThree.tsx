import axios from "axios";

const useCreateProtocolThree = async (researchQuestions: string[], analysisAndSynthesisProcess: string, id: string, retry = true) => {
    
    const url = `http://localhost:8080/systematic-study/${id}/protocol`;

    let data = {
        researchQuestions,
        analysisAndSynthesisProcess
    }

    let response = await axios.put(url, data, {withCredentials: true});
    console.log(response);
}

export default useCreateProtocolThree