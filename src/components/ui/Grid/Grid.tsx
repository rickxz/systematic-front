import Sidebar from "../NavBar/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

interface iGridLayout {
  navigationType: string;
  children: React.ReactElement[];
}

export default function GridLayout({ navigationType, children }: iGridLayout) {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <GridItem>
        <Sidebar type={navigationType} />
      </GridItem>
      <GridItem textAlign={"center"} justifySelf={"center"} w={"80vw"} ml={10}>
        {children}
      </GridItem>
    </Grid>
  );
}
