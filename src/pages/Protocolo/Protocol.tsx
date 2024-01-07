import { Box, FormControl, Grid, GridItem } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import { Progress } from "@chakra-ui/react";
import NavButton from "../../components/Buttons/NavButton";

export default function Protocol() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Accordion" />
      <GridItem>
        <Header text="Protocólo" />;
        <Progress value={0} />
        <FormControl></FormControl>
        <Box ml={"60%"} alignSelf={"flex-end"}>
          <NavButton text="Next" path="/newRevision/protocolpartTwo" />
        </Box>
      </GridItem>
    </Grid>
  );
}
