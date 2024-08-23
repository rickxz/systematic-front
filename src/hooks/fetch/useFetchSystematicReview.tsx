import axios from "axios";

export default async function useFetchSystematicReview(systematicStudyId: string) {
    const url = "http://localhost:8080/"
    try {
        const accessToken = localStorage.getItem("accessToken");
        let options = {
            headers: { Authorization: `Bearer ${accessToken}` }
        }
        const response = await axios.get(`${url}systematic-study/${systematicStudyId}`, options);
        console.log(response.data.content);
        return response.data.content;
    } catch (error) {
        console.log("Error fetching systematic review infos:", error);
    }
}