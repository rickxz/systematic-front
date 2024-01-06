import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import Sidebar from "../../components/ui/NavBar/Sidebar";

export default function Protocol() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Accordion" />
      <GridItem>
        <Header text="Olá Protocólo" />;
      </GridItem>
    </Grid>
  );
}
