import axios from "../../interceptor/interceptor";

const useCreateProtocolTwo = async (analysis: string, questions: string[], 
    keywords: string[], studiesLanguages: string[], 
    databases: string[], researchStrategy: string, selectionProcess: string, dataAcquisition: string, 
    inclusionCriteria: {"description": string, "type": "INCLUSION" | "EXCLUSION"}[], 
    exclusionCriteria: {"description": string, "type": "INCLUSION" | "EXCLUSION"}[],id: string) => {

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
        eligibilityCriteria,
        analysisAndSynthesisProcess: analysis,
        researchQuestions: questions
    }

    console.log(data);

    const url = `http://localhost:8080/systematic-study/${id}/protocol`

    console.log(questions, analysis);

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