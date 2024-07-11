import axios from "axios"



const useCreateProtocolTwo = async (keywords: string[], databases: string[], researchStrategy: string, selectionProcess: string, dataAcquisition: string, id: string, retry = true) => {

    const data = {
        keywords,
        informationSources: databases,
        searchMethod: researchStrategy,
        selectionProcess: selectionProcess,
        sourcesSelectionCriteria: dataAcquisition
    }

    const url = `http://localhost:8080/systematic-study/${id}/protocol`

    try{
        let response = await axios.get(url, {withCredentials: true});
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}

export default useCreateProtocolTwo