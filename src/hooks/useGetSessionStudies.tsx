import axios from "../interceptor/interceptor";

const useGetSessionStudies = async (sessionId:string) => {
    const reviewId = localStorage.getItem('systematicReviewId');
    const token = localStorage.getItem('accessToken');
    const url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/find-by-search-session/${sessionId}`;
    const options = {
        headers: { Authorization: `Bearer ${token}` }
    }

    return await axios.get(url, options);
}

export default useGetSessionStudies;