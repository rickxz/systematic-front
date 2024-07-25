import { Flex, Text, Image,Icon } from "@chakra-ui/react";
import { MdSentimentDissatisfied } from "react-icons/md"; // ícone de rosto insatisfeito

import { flexStyles } from "./styles/flexStyles";
import FlexLayout from "../../components/ui/Flex/Flex";
import Header from "../../components/ui/Header/Header";
import RevisionCard from "./subcomponents/RevisionCard";
import useFetchRevisionCard from "../../hooks/fetch/useFetchRevisionCard";
import { useState, useEffect } from "react";
import NavButton from "../../components/Buttons/NavButton";

export default function UserArea() {
  const [myRevisionsUrl, setMyRevisionsUrl] = useState('');

  useEffect(() => {
    const url = localStorage.getItem('myReviewsLink');
    if (url) {
      setMyRevisionsUrl(url);
    }
  }, []);

  const cardData = useFetchRevisionCard(myRevisionsUrl);

  return (
    <FlexLayout defaultOpen={0} navigationType="Default">
      <Header text="My Systematic Reviews" />
      <Flex sx={flexStyles} w={"85vw"} align="center" justify="center">
        {cardData.length > 0 ? (
          cardData.map((data) => (
            <RevisionCard
              key={data.id}
              revisionId={data.id}
              id={data.key}
              title={data.title}
              reviewers={data.collaborators}
              status={data.lastChange}
              creation={data.creation}
              isEdited={data.isEdited}
            />
          ))
        ) : (
          <Flex direction="column" align="center" justify="center" w="100%">
            <Icon as={MdSentimentDissatisfied} boxSize={12} color="gray.500" mb={4} mt={"60px"}/>            <Text fontSize="2xl" color="gray.600" mb={4}>
              Ops! Não encontramos nenhuma revisão por aqui.
            </Text>
            <Text fontSize="lg" color="gray.500" mb={4}>
              Que tal criar uma nova? 
            </Text>
            <NavButton text='Criar nova revisão' path='/newRevision' />
          </Flex>
        )}
      </Flex>
    </FlexLayout>
  );
}
