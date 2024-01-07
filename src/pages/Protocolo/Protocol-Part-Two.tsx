import { Grid, GridItem, Progress, FormControl, Box } from "@chakra-ui/react";
import NavButton from "../../components/Buttons/NavButton";
import Header from "../../components/ui/Header/Header";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import CheckboxInput from "../../components/Inputs/Checkbox";

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
        </FormControl>
        <Box ml={"65%"} alignSelf={"flex-end"}>
          <NavButton text="Next" path="/newRevision/protocolpartThree" />
        </Box>
      </GridItem>
    </Grid>
  );
}
