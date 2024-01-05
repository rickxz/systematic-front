import { FormControl, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";

export default function NovaRevisao() {
  return (
    <Grid templateColumns={"repeat(3,1fr)"}>
      <Sidebar type="Accordion" />
      <GridItem>
        <Header text="Nova Revisao" />

        <FormControl mt={"20px"}>
          <InputText label="Título: " placeholder="Informe o título da revisao sistemática..." />
        </FormControl>
      </GridItem>
    </Grid>
  );
}
