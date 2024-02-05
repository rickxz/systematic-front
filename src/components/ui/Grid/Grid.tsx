import Sidebar from "../NavBar/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

interface iGridLayout {
  navigationType: string;
  children: React.ReactElement[];
}

export default function GridLayout({ navigationType, children }: iGridLayout) {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type={navigationType} />
      <GridItem textAlign={"center"} justifySelf={"center"} w={"80vw"} ml={5}>
        {children}
      </GridItem>
    </Grid>
  );
}
