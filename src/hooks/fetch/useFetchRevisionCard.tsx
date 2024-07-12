import { useState, useEffect } from "react";
import axios from "../../interceptor/interceptor";

interface cardDataProps {
  key: string;
  title: string;
  revisors: string[];
  lastChange: string;
  creation: string;
  isEdited: boolean;
}

const useFetchRevisionCard = (url: string, retry = true) => {
  const [cardData, setCardData] = useState<cardDataProps[] | []>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        const data = await response.data.content;
        setCardData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return { cardData };
};
export default useFetchRevisionCard;
