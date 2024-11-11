import axios from '../interceptor/interceptor';

const useGetAllReviewArticles = async () => {
    const id = localStorage.getItem('systematicReviewId');
    const token = localStorage.getItem('accessToken');
    const path = `http://localhost:8080/api/v1/systematic-study/${id}/systematic/review`;
    const options = {
        headers: {Authorization: `Bearer ${token}`}
    }

    return (await axios.get(path, options)).data;
}

export default useGetAllReviewArticles;