import { useState, useEffect } from "react";

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
        const response = await fetch(url);
        const data = await response.json();
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
