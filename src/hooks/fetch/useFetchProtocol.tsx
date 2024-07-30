import axios from '../../interceptor/interceptor';

export default async function fetchProtocol(systematicStudyId: string) {
    const url = "http://localhost:8080/";
    try {
        const response = await axios.get(`${url}systematic-study/${systematicStudyId}/protocol`, {withCredentials: true});
        return response.data.content;
    } catch (error) {
        console.error("Error fetching protocol:", error);
        throw error;
    }
}