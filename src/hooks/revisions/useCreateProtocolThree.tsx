import axios from "axios";

const useCreateProtocolThree = async (researchQuestions: string[], analysisAndSynthesisProcess: string) => {
    let data = {
        researchQuestions,
        analysisAndSynthesisProcess
    }

    console.log(data);
}

export default useCreateProtocolThree