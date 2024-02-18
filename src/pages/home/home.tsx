import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import RevisionCard from "./subcomponents/RevisionCard";

interface cardDataProps {
  key: string;
  title: string;
  revisors: string[];
  lastChange: string;
  creation: string;
  isEdited: boolean;
}

export default function Home() {
  const [cardData, setCardData] = useState<cardDataProps[] | []>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("data/revisions.json");
      const data = await response.json();
      setCardData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <GridLayout navigationType="Default">
      <Header text="My Systematic Reviews" />
      <Flex mt={"2.5vh"} display={"flex"} flexDir={"column"} rowGap={5} alignItems={"center"}>
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
