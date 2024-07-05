import { useState, useEffect } from "react";
import axios from "axios";

interface cardDataProps {
  key: string;
  title: string;
  revisors: string[];
  lastChange: string;
  creation: string;
  isEdited: boolean;
}

const useFetchRevisionCard = (url: string) => {
  const [cardData, setCardData] = useState<cardDataProps[] | []>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem('accessToken');
        
        const header = {
          "Authorization": `Bearer ${token}` 
        } 
        const response = await axios.get(url, {headers: header});
        console.log(response);
        // const data = await response.json();
        // setCardData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return { cardData };
};
export default useFetchRevisionCard;
