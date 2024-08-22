import { Flex, Text, Icon } from "@chakra-ui/react";
import { MdSentimentDissatisfied } from "react-icons/md";
import { flexStyles } from "./styles/flexStyles";
import FlexLayout from "../../components/ui/Flex/Flex";
import Header from "../../components/ui/Header/Header";
import RevisionCard from "./subcomponents/RevisionCard";
import { useFetchRevisionCard } from "../../hooks/fetch/useFetchRevisionCard";
import { useState, useEffect } from "react";
import NavButton from "../../components/Buttons/NavButton";
import axios from "axios";

//hooks imports
import verifyUnfinishedStudy from "../../hooks/verifyUnfinishedStudy";

//interfaces import

import { cardDataProps } from "../../hooks/fetch/useFetchRevisionCard";

export default function UserArea() {
  const [myRevisionsUrl, setMyRevisionsUrl] = useState('');
  const [cardData, setCardData] = useState<cardDataProps[]>([]);
  const [fetchedData, setFetchedData] = useState<cardDataProps[]>([]);
  const [firstAccess, setFirstAccess] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    localStorage.removeItem("systematicStudyId");
    if(sessionStorage.getItem('firstAccess') == undefined) setFirstAccess(true); 

    const url = localStorage.getItem('myReviewsLink');
    if (url) {
      setMyRevisionsUrl(url);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const fetched = await Promise.all(cardData.map(async (data) => {
        const options = {
          headers: { "Authorization": `Bearer ${accessToken}` }
        }
        const url = "http://localhost:8080/";
        const response = await axios.get(`${url}systematic-study/${data.id}/protocol`, options);
        
        const status = await verifyUnfinishedStudy(data.id);
        
        return { ...data, responseData: response.data, status }
      }));
        
      setFetchedData(fetched);
    }

    if (cardData.length > 0) {
      fetchData();
    }
  }, [cardData]);

  const rawData = useFetchRevisionCard(myRevisionsUrl);

  useEffect(() => {
    setCardData(rawData);
  }, [rawData]);

  return (
    <FlexLayout defaultOpen={0} navigationType="Default">
      <Header text="My Systematic Reviews" />
      <Flex sx={flexStyles} w={"90%"} align="center" justify="center">
        {fetchedData.length > 0 || !firstAccess ? (
          fetchedData.map((data) => (
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
        ) : (
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
        )}
      </Flex>
    </FlexLayout>
  );
}
