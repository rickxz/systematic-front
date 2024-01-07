import { Grid, GridItem, Progress, FormControl, Box } from "@chakra-ui/react";
import NavButton from "../../components/Buttons/NavButton";
import Header from "../../components/ui/Header/Header";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import CheckboxInput from "../../components/Inputs/Checkbox";
import SelectInput from "../../components/Inputs/SelectInput";
import TextAreaInput from "../../components/Inputs/InputTextArea";

export default function ProtocolPartTwo2() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Accordion" />
      <GridItem>
        <Header text="Protocólo" />
        <Progress value={33} />
        <FormControl display={"flex"} flexDir={"column"} gap={20} mt={20}>
          {/*<Heading as={"h4"}>campo de palavra chave</Heading>*/}
          <CheckboxInput
            label="Linguagens: "
            value={["ingles", "portugues", "frances"]}
            name={["Inglês", "Português", "Francês"]}
          />
          {/*<Heading as={"h4"}>campo de critérios de inclusão</Heading>*/}
          {/*<Heading as={"h4"}>campo de critérios de exclusão</Heading>*/}
          <SelectInput
            label="Data Bases: "
            values={["", "googleAcademy", "IEE", "Scielo"]}
            names={["", "Google Academy", "IEE", "Scielo"]}
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
