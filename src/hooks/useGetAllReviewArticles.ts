import axios from '../interceptor/interceptor';

const useGetAllReviewArticles = async () => {
    const id = localStorage.getItem('systematicReviewId');
    const token = localStorage.getItem('accessToken');
    const path = `http://localhost:8080/api/v1/systematic-study/${id}/systematic-review`;
    const options = {
        headers: {Authorization: `Bearer ${token}`}
    }

    axios.get(path, options)
        .then(res => {
            return res.data;
        })
        .catch(error => console.error(error + ' Failed to fetch all studies from review'));
}

export default useGetAllReviewArticles;