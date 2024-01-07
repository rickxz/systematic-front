import { Box, FormControl, Grid, GridItem } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import { Progress } from "@chakra-ui/react";
import NavButton from "../../components/Buttons/NavButton";
import TextAreaInput from "../../components/Inputs/InputTextArea";

export default function Protocol() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Accordion" />
      <GridItem>
        <Header text="Protocólo" />
        <Progress value={0} mt={10} />
        <FormControl display={"flex"} flexDir={"column"} gap={20} mt={20}>
          <TextAreaInput label="Objetivos:" placeholder="Informe o objetivo da revisão..." />
          <TextAreaInput label="Questão Principal:" placeholder="Informe a questào de pesquisa..." />
        </FormControl>
        <Box ml={"65%"} alignSelf={"flex-end"}>
          <NavButton text="Next" path="/newRevision/protocolpartTwo" />
        </Box>
      </GridItem>
    </Grid>
  );
}
