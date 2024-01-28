import Revisions from "../../../public/data/revisions.json";
import Header from "../../components/ui/Header/Header";
import RevisionCard from "./subcomponents/RevisionCard";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";

export default function Home() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Default" />
      <GridItem display={"flex"} flexDir={"column"} w={"70vw"}>
        <Header text="My Systematic Reviews" />;
        <Flex mt={"2.5vh"} display={"flex"} flexDir={"column"} rowGap={5}>
          {Revisions &&
            Revisions.map((revision) => {
              return (
                <RevisionCard
                  id={revision.key}
                  title={revision.title}
                  RevisorNames={revision.revisors}
                  lastEdition={revision.lastChange}
                  creation={revision.creation}
                  isEdited={revision.isEdited}
                />
              );
            })}
        </Flex>
      </GridItem>
    </Grid>
  );
}
