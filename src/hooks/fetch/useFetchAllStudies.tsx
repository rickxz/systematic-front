import axios from '../../interceptor/interceptor';

export default async function fetchProtocol(systematicStudyId: string) {
    const url = "http://localhost:8080/";
    try {
        const accessToken = localStorage.getItem('accessToken');
        let options = {
            headers: { Authorization: `Bearer ${accessToken}` }
        }

        const response = await axios.get(`${url}api/v1/systematic-study/${systematicStudyId}/study-review`, options);
        return response.data;
    } catch (error) {
        console.error("Error fetching studies:", error);
        throw error;
    }
}
