import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import FlexLayout from "../../components/ui/Flex/Flex";
import { cardDataProps, useFetchRevisionCard } from "../../hooks/fetch/useFetchRevisionCard";
import verifyUnfinishedStudy from "../../hooks/verifyUnfinishedStudy";
import { flexStyles } from "../UserArea/styles/flexStyles";
import RevisionCard from "../UserArea/subcomponents/RevisionCard";
import Loader from "../../components/Icons/Loader";

export default function TestPage() {
  const [myRevisionsUrl, setMyRevisionsUrl] = useState('');
  const [cardData, setCardData] = useState<cardDataProps[]>([]);
  const [isLoaded, setIsloaded] = useState(false);
  
  useEffect(() => {
    localStorage.removeItem("systematicStudyId");
    const url = localStorage.getItem('myReviewsLink');

    if (url) {
      setMyRevisionsUrl(url);
    }

  }, []);

  let rawData = useFetchRevisionCard(myRevisionsUrl);

  useEffect(() => {

    async function fetch(){
    console.log("raw data:");
    console.log(rawData);
    setCardData(rawData);

    let newCardData = await Promise.all(rawData.map(async (study) => {
      console.log(study);
      let status = await verifyUnfinishedStudy(study.id);
      return {...study, status};
    }));

    setCardData(newCardData);
    setIsloaded(true);
    }

    fetch();
  }, [rawData]);

  return (
    <FlexLayout defaultOpen={0} navigationType="Default">
      <Flex sx={flexStyles} w={"90%"} align="center" justify="center">
        
        { !isLoaded && <Loader />}

        { cardData.length > 0 && isLoaded && ( <p>Exibir revisões</p> ) }
     
        { cardData.length == 0 && isLoaded && ( <p>Mensagem da Poly</p>) }

      </Flex>
    </FlexLayout>
  );
}
