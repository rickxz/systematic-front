import { Grid, GridItem, Progress, FormControl, Box } from "@chakra-ui/react";

import NavButton from "../../components/Buttons/NavButton";
import Header from "../../components/ui/Header/Header";
import Sidebar from "../../components/ui/NavBar/Sidebar";

export default function ProtocolPartThree() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Accordion" />
      <GridItem>
        <Header text="Protocólo" />;
        <Progress value={66} />
        <FormControl></FormControl>
        <Box display={"flex"} justifyContent={"space-between"}>
          <NavButton text="Anterior" path="/newRevision/protocolpartTwo" />
          <NavButton text="Finalizar" path="/newRevision" />
        </Box>
      </GridItem>
    </Grid>
  );
}
