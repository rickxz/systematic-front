import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";

export default function Home() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar />
      <GridItem>
        <Heading mt={10} as={"h1"} alignSelf={"center"}>
          Você está na página Principal!
        </Heading>
      </GridItem>
    </Grid>
  );
}
