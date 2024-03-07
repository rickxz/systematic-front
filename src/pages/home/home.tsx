import { Flex } from "@chakra-ui/react";
import { flexStyles } from "./styles/flexStyles";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import RevisionCard from "./subcomponents/RevisionCard";
import useFetchRevisionCard from "../../hooks/fetch/useFetchRevisionCard";

export default function Home() {
  const { cardData } = useFetchRevisionCard("data/revisions.json");

  return (
    <GridLayout navigationType="Default">
      <Header text="My Systematic Reviews" />
      <Flex sx={flexStyles}>
        {cardData.map((data) => {
          return (
            <RevisionCard
              id={data.key}
              title={data.title}
              RevisorNames={data.revisors}
              lastEdition={data.lastChange}
              creation={data.creation}
              isEdited={data.isEdited}
            />
          );
        })}
      </Flex>
    </GridLayout>
  );
}
