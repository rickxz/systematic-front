import axios from "../../interceptor/interceptor";


const useCreateProtocolTwo = async (researchStrategy: string, selectionProcess: string,
     sourcesSelectionCriteria: string, studyTypeDefinition: string, searchString: string,
      id: string) => {

    const data = {
        searchMethod: researchStrategy,
        selectionProcess: selectionProcess,
        sourcesSelectionCriteria: sourcesSelectionCriteria,
        studyTypeDefinition: studyTypeDefinition,
        searchString: searchString
    }

    const url = `http://localhost:8080/systematic-study/${id}/protocol`

    try{
        let response = await axios.put(url, data, {withCredentials: true});
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}

export default useCreateProtocolTwo