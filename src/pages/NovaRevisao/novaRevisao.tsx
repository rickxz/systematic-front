import { FormControl, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";
import InputTextArea from "../../components/Inputs/InputTextArea";

export default function NovaRevisao() {
  return (
    <Grid templateColumns={"repeat(3,1fr)"}>
      <Sidebar type="Accordion" />
      <GridItem>
        <Header text="Nova Revisão" />

        <FormControl mt={"20px"} display={"flex"} gap={5} flexDir={"column"} w={"100%"}>
          <InputText label="Título:" placeholder="Informe o título da revisao sistemática..." type="text" nome="text" />
          <InputTextArea label="Descrição:" placeholder="Informa a descrição da revisão sistemática..."></InputTextArea>
          <InputText label="Pesquisadores:" placeholder="e-mail do pesquisador..." type="search" nome="emai" />
        </FormControl>
      </GridItem>
    </Grid>
  );
}
