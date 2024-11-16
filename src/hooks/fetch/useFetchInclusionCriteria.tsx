import { useState } from 'react';
import axios from '../../interceptor/interceptor';
import getRequestOptions from '../../utils/getRequestOptions';

const useFetchInclusionCriteria = () => {
    const id = localStorage.getItem('systematicReviewId');
    const path = `http://localhost:8080/systematic-study/${id}/protocol`;
    const options = getRequestOptions();
    const [inclusionCriterias, setInclusionCriterias] = useState<string[]>([]);

    axios.get(path, options)
        .then(res => {
            let aux = res.data.content.eligibilityCriteria;
            aux = aux.filter((e: {definition: string, type: string})=> e.type == 'INCLUSION');
            setInclusionCriterias(aux);
        })
        .catch(error => console.log(error + " Failed to get Inclusion Criterias"));
        
    return inclusionCriterias;
}

export default useFetchInclusionCriteria;