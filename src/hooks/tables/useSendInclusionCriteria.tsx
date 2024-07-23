import axios from "../../interceptor/interceptor";

interface CriteriaType {
    criteria: {description: string, type: string};
    url: string;
}

const useSendInclusionCriteria= () => {
    async function sendCriterias({ criteria, url }: CriteriaType) {
        // Fetching inclusionCriterias from the server
        let response = await axios.get(url, { withCredentials: true });
        const fetchedCriterias = response.data.content.eligibilityCriteria;
        
        // Adding the new keyword to the fetched keywords
        const updatedCriterias = [...fetchedCriterias, criteria];
        console.log(`updated array: ${updatedCriterias}`);
        
        // Sending updated keywords to the server
        const data = { eligibilityCriteria: updatedCriterias };
        let putResponse = await axios.put(url, data, { withCredentials: true });
        console.log(putResponse);
    }

    return sendCriterias;
}

export default useSendInclusionCriteria;
