import Header from "../../components/ui/Header/Header";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import NavButton from "../../components/Buttons/NavButton";
import CheckboxInput from "../../components/Inputs/Checkbox";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import AddTextTable from "../../components/AddDataFields/AddTextTable";
import { Grid, GridItem, Progress, FormControl, Box } from "@chakra-ui/react";
import AddSelectionTable from "../../components/AddDataFields/AddSelectionTable";

export default function ProtocolPartTwo2() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Accordion" />
      <GridItem>
        <Header text="Protocólo" />
        <Progress value={33} />
        <FormControl display={"flex"} flexDir={"column"} gap={20} mt={20}>
          <FormControl display={"flex"}>
            <AddTextTable text="Palvras-chave" placeholder="Informe a palavra-chave..." />
          </FormControl>

          <CheckboxInput
            label="Linguagens: "
            value={["ingles", "portugues", "frances"]}
            name={["Inglês", "Português", "Francês"]}
          />

          <AddTextTable text="Critérios de inclusão:" placeholder="Informe o critério de inclusão..." />
          <AddTextTable text="Critérios de exclusão:" placeholder="Informe o critério de exclusao..." />

          <AddSelectionTable
            text="Data Bases: "
            options={["", "Google Acadêmico", "Scopus", "Scielo", "BDTD", "PubMed"]}
            placeholder="Informe as bases de dado"
          />

          <TextAreaInput label="Estratégia de pesquisa" placeholder="Informe a estratégia de pesquisa..." />
          <TextAreaInput label="Processo de Seleção" placeholder="Informe o Processo de Seleção" />
          <TextAreaInput label="Processo de Coleta de Dados" placeholder="Informe o processo de coleta de dados..." />
        </FormControl>

        <Box ml={"65%"} alignSelf={"flex-end"}>
          <NavButton text="Next" path="/newRevision/protocolpartThree" />
        </Box>
      </GridItem>
    </Grid>
  );
}
