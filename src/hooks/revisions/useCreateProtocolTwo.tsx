import axios from "../../interceptor/interceptor";


const useCreateProtocolTwo = async (researchStrategy: string, selectionProcess: string,
     sourcesSelectionCriteria: string, studyTypeDefinition: string, searchString: string,
     dataCollectionProcess:string, id: string) => {

    const data = {
        searchMethod: researchStrategy,
        selectionProcess: selectionProcess,
        sourcesSelectionCriteria: sourcesSelectionCriteria,
        studyTypeDefinition: studyTypeDefinition,
        searchString: searchString,
        dataCollectionProcess: dataCollectionProcess
    }

    const url = `http://localhost:8080/systematic-study/${id}/protocol`

    try{
        const accessToken = localStorage.getItem('accessToken');
        let options = {
            headers: { Authorization: `Bearer ${accessToken}` }
        }

        let response = await axios.put(url, data, options);
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}

export default useCreateProtocolTwo