import axios from "../../interceptor/interceptor";

interface CriteriaType {
    criteria: {description: string, type: string};
    url: string;
}

const useSendInclusionCriteria= () => {
    async function sendCriterias({ criteria, url }: CriteriaType) {
        const accessToken = localStorage.getItem('accessToken');
        let options = {
          headers: { Authorization: `Bearer ${accessToken}` }
        }

        let response = await axios.get(url, options);
        const fetchedCriterias = response.data.content.eligibilityCriteria;

        const updatedCriterias = [...fetchedCriterias, criteria];
        console.log(`updated array: ${updatedCriterias}`);
        
        const data = { eligibilityCriteria: updatedCriterias };
        let putResponse = await axios.put(url, data, options);
        console.log(putResponse);
    }

    return sendCriterias;
}

export default useSendInclusionCriteria;
