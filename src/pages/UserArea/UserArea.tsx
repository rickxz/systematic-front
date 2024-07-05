import { Flex } from "@chakra-ui/react";
import { flexStyles } from "./styles/flexStyles";
import FlexLayout from "../../components/ui/Flex/Flex";
import Header from "../../components/ui/Header/Header";
import RevisionCard from "./subcomponents/RevisionCard";
import useFetchRevisionCard from "../../hooks/fetch/useFetchRevisionCard";
import { useState, useEffect } from "react";

export default function UserArea() {
  const [myRevisionsUrl, setMyRevisionsUrl] = useState('');

  useEffect(() => {
    const url = localStorage.getItem('myRevisionsLink');
    if (url) {
      setMyRevisionsUrl(url);
    }
  }, [])

  const { cardData } = useFetchRevisionCard(myRevisionsUrl);

  return (
    <FlexLayout defaultOpen={0} navigationType="Default">
      <Header text="My Systematic Reviews" />
      <Flex sx={flexStyles} w={"85vw"}>
        {cardData.map((data) => {
          return (
            <RevisionCard
              id={data.key}
              title={data.title}
              RevisorNames={data.owner}
              lastEdition={data.lastChange}
              creation={data.creation}
              isEdited={data.isEdited}
            />
          );
        })}
      </Flex>
    </FlexLayout>
  );
}
