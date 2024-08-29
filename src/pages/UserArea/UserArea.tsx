import { Flex, Text, Icon } from "@chakra-ui/react";
import { MdSentimentDissatisfied } from "react-icons/md";
import { flexStyles } from "./styles/flexStyles";
import FlexLayout from "../../components/ui/Flex/Flex";
import Header from "../../components/ui/Header/Header";
import RevisionCard from "./subcomponents/RevisionCard";
import NavButton from "../../components/Buttons/NavButton";

//hooks imports
import verifyUnfinishedStudy from "../../hooks/verifyUnfinishedStudy";
import { useFetchRevisionCard } from "../../hooks/fetch/useFetchRevisionCard";
import { useState, useEffect } from "react";
//interfaces import

import { cardDataProps } from "../../hooks/fetch/useFetchRevisionCard";
import Loader from "../../components/Icons/Loader";

export default function UserArea() {
  const [myRevisionsUrl, setMyRevisionsUrl] = useState('');
  const [cardData, setCardData] = useState< cardDataProps[] | undefined >(undefined);
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

    let newCardData = await Promise.all(rawData.map(async (study) => {
      let status = await verifyUnfinishedStudy(study.id);

      return {...study, status};
    }));

    setCardData(newCardData);
    if( cardData ) setIsloaded(true);

    }

    fetch();
  }, [rawData]);

  return (
    <FlexLayout defaultOpen={0} navigationType="Default">
      <Header text="My Systematic Reviews" />
      <Flex sx={flexStyles} w={"90%"} align="center" justify="center">

        { !isLoaded && <Loader />}
        
        { cardData && cardData.length > 0 && isLoaded && (
          cardData.map((data) => (
            <RevisionCard
              key={data.id}
              revisionId={data.id}
              id={data.key}
              title={data.title}
              reviewers={data.collaborators}
              status={data.status}
              creation={data.creation}
              isEdited={data.isEdited}
            />
          ))
        ) }

        { cardData && cardData.length == 0 && isLoaded && (
          <Flex direction="column" align="center" justify="center" w="100%">
            <Icon as={MdSentimentDissatisfied} boxSize={12} color="gray.500" mb={4} mt={"60px"} />
            <Text fontSize="2xl" color="gray.600" mb={4}>
              Oops! We didn't find any reviews here.
            </Text>
            <Text fontSize="lg" color="gray.500" mb={4}>
              How about creating a new one?
            </Text>
            <NavButton text='Create review' path='/newRevision' ml='0rem' />
          </Flex>
        ) }

      </Flex>
    </FlexLayout>
  );
}
