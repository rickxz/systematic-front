import axios from '../../interceptor/interceptor';
import getRequestOptions from '../../utils/getRequestOptions';

const useGetInclusionCriteria = () => {
    const id = localStorage.getItem('systematicStudyId');
    const path = `http://localhost:8080/systematic-study/${id}/protocol`;
    const options = getRequestOptions();

    axios.get(path, options)
        .then(res => {
            return res.data.inclusionCriterias;
        })
        .catch(error => console.log(error + " Failed to get Inclusion Criterias"));
}

export default useGetInclusionCriteria;