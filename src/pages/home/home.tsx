import { useEffect, useState } from "react";
import Header from "../../components/ui/Header/Header";
import RevisionCard from "./subcomponents/RevisionCard";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";

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
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Default" />
      <GridItem display={"flex"} flexDir={"column"} w={"70vw"}>
        <Header text="My Systematic Reviews" />;
        <Flex mt={"2.5vh"} display={"flex"} flexDir={"column"} rowGap={5}>
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
      </GridItem>
    </Grid>
  );
}
