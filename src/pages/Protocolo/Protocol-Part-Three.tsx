import { Grid, GridItem, Progress, FormControl, Box } from "@chakra-ui/react";

import NavButton from "../../components/Buttons/NavButton";
import Header from "../../components/ui/Header/Header";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import AddTextTable from "../../components/AddDataFields/AddTextTable";

export default function ProtocolPartThree() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Accordion" />
      <GridItem>
        <Header text="Protocólo" />
        <Progress value={66} />
        <FormControl display={"flex"} flexDir={"column"} mt={10} rowGap={10}>
          <AddTextTable
            text={"Formulário de extraçao de dados"}
            placeholder="Informe os critérios para extração de dados"
          />
          <TextAreaInput label="Análise e Síntese" placeholder="Escreva aqui a análise..." />
          <AddTextTable text={"Study Risk of Bias (RoB) Assesment"} placeholder="..." />
        </FormControl>
        <Box ml={"65%"} alignSelf={"flex-end"}>
          <NavButton text="Finalizar" path="/newRevision" />
        </Box>
      </GridItem>
    </Grid>
  );
}
