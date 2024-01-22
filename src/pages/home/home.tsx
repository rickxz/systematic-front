import { Flex, Grid, GridItem } from "@chakra-ui/react";

import Sidebar from "../../components/ui/NavBar/Sidebar";
import RevisionCard from "./subcomponents/RevisionCard";
import Header from "../../components/ui/Header/Header";

export default function Home() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Default" />
      <GridItem display={"flex"} flexDir={"column"}>
        <Header text="My Systematic Reviews" />

        <Flex mt={"2.5vh"} display={"flex"} flexDir={"column"} rowGap={5}>
          <RevisionCard
            title="First Review"
            RevisorNames={[" Lucas Sigoli,", " Eduardo Derisso,", " Gabriel Gatti"]}
            lastEdition="04/01.2024"
            creation="01/01/2024"
            isEdited
          />{" "}
          <RevisionCard
            title="Another one"
            RevisorNames={[" Erick dos Santos,", "Gabriela Henriques,", "Prof. Dr. Daniel Porto"]}
            lastEdition="04/01.2024"
            creation="01/01/2024"
            isEdited
          />{" "}
          <RevisionCard
            title="And another one"
            RevisorNames={["Prof. Dr. Lucas Bueno,", "Vitor Bonelli"]}
            lastEdition="04/01.2024"
            creation="01/01/2024"
            isEdited={false}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
}
