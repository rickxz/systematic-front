import { useState, useEffect } from "react";
import axios from "axios";
import useRefreshToken from '../validation/useRefreshToken';

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
        const response = await axios.get(url, {withCredentials: true});
        console.log(response);
        const data = await response.data.content;
        setCardData(data);
      } catch (error) {
        console.log(error);
        if(axios.isAxiosError(error)){
          if((error.response?.status == 500 || error.response?.status == 401 || error.response?.status == 404) && retry){
            await useRefreshToken();
            await useFetchRevisionCard(url, false);
          }
        }
      }
    };
    fetchData();
  }, [url]);
  return { cardData };
};
export default useFetchRevisionCard;
