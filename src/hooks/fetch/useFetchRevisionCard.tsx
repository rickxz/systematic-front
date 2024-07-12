import { useState, useEffect } from "react";
import axios from "../../interceptor/interceptor";

interface cardDataProps {
  id: string;
  key: string;
  title: string;
  collaborators: string[];
  lastChange: string;
  creation: string;
  isEdited: boolean;
}

const useFetchRevisionCard = (url: string) => {
  const [cardData, setCardData] = useState<cardDataProps[] | []>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const response = await axios.get(url, {headers: {Authorization: `Bearer ${token}`}});
        console.log(response);
        const data = await response.data.content;
        setCardData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return cardData;
};
export default useFetchRevisionCard;
