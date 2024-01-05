import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import Header from "../../components/ui/Header/Header";

export default function NovaRevisao() {
  return (
    <Grid templateColumns={"repeat(3,1fr)"}>
      <Sidebar type="Accordion" />
      <GridItem>
        <Header text="Protocólo" />
      </GridItem>
    </Grid>
  );
}
