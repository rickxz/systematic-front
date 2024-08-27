import axios from "axios";
import { SystematicReview } from "../../../public/interfaces/systematicReview";
import { useEffect } from "react";

interface fetchReviewProps {
    id: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setDescription: React.Dispatch<React.SetStateAction<string>>
}

export default function useFetchSystematicReview({id,setTitle, setDescription} :fetchReviewProps) {
    
    useEffect(() => {
        async function fetchReviewData() {
            try {
                const accessToken = localStorage.getItem("accessToken");
                let options = {
                    headers: { Authorization: `Bearer ${accessToken}` }
                }
                const url = `http://localhost:8080/api/v1/systematic-study/${id}`;
                const response = await axios.get(url, options);
                console.log(response.data.content);

                setTitle(response.data.content.title);
                setDescription(response.data.content.description)
            } catch (error) {
                console.log("Error fetching systematic review infos:", error);
            }
        }

        fetchReviewData();
    },[])
    
}