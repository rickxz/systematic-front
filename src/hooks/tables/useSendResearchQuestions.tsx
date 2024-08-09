import axios from "../../interceptor/interceptor";

interface ResearchQuestionsType {
    researchQuestions: string;
    url: string;
}

const useSendResearchQuestions = () => {
    async function sendResearchQuestions({ researchQuestions, url }: ResearchQuestionsType) {

        console.log({ researchQuestions, url })
        // Fetching researchQuestions from the server
        let response = await axios.get(url, { withCredentials: true });
        const fetchedResearchQuestions = response.data.content.researchQuestions;
        
        // Adding the new researchQuestion to the fetched researchQuestions
        const updatedResearchQuestions = [...fetchedResearchQuestions, researchQuestions];
        console.log(`updated array: ${updatedResearchQuestions}`);
        
        // Sending updated keywords to the server
        const data = { researchQuestions: updatedResearchQuestions };
        let putResponse = await axios.put(url, data, { withCredentials: true });
        console.log(putResponse);
    }

    return sendResearchQuestions;
}

export default useSendResearchQuestions;
