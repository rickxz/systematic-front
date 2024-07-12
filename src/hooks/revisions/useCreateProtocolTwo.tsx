import axios from "axios"
import useRefreshToken from "../validation/useRefreshToken";

const useCreateProtocolTwo = async (keywords: string[], studiesLanguages: string[], databases: string[], researchStrategy: string, selectionProcess: string, dataAcquisition: string, inclusionCriteria: {"description": string, "type": "INCLUSION" | "EXCLUSION"}[], exclusionCriteria: {"description": string, "type": "INCLUSION" | "EXCLUSION"}[], id: string, retry = true) => {

    const eligibilityCriteria = [];

    for(let i = 0; i < inclusionCriteria.length; i++){
        eligibilityCriteria.push(inclusionCriteria[i]);
    }

    for(let i = 0; i < exclusionCriteria.length; i++){
        eligibilityCriteria.push(exclusionCriteria[i]);
    }

    const data = {
        keywords,
        informationSources: databases,
        studiesLanguages,
        searchMethod: researchStrategy,
        selectionProcess: selectionProcess,
        sourcesSelectionCriteria: dataAcquisition,
        eligibilityCriteria
    }

    const url = `http://localhost:8080/systematic-study/${id}/protocol`

    try{
        let response = await axios.put(url, data, {withCredentials: true});
        console.log(response);
    }
    catch(err){
        console.log(err);
        if(axios.isAxiosError(err)){
            if(err.response?.status == 500 || err.response?.status == 401 || err.response?.status === 404 && retry == true){
                await useRefreshToken();
                await useCreateProtocolTwo(keywords, studiesLanguages, databases, researchStrategy,
                selectionProcess, dataAcquisition, inclusionCriteria, exclusionCriteria, id,
                false);
            }
        }
    }
}

export default useCreateProtocolTwo