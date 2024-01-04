import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

import Sidebar from "../../components/ui/NavBar/Sidebar";
import RevisionCard from "./subcomponents/Card";

export default function Home() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Default" />
      <GridItem>
        <Heading mt={10} as={"h1"} alignSelf={"center"} ml={"45%"}>
          Minhas Revisões
        </Heading>
        <Flex mt={"2.5vh"}>
          <RevisionCard
            title="Minha primeira revisao Sistemática"
            RevisorNames={["Lucas Sigoli", "Eduardo Derisso", "Gabriel Gatti"]}
            lastEdition="04/01.2024"
            creation="01/01/2024"
            isEdited
          />
        </Flex>
      </GridItem>
    </Grid>
  );
}
