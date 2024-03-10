import Sidebar from "../NavBar/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

interface iGridLayout {
  navigationType: string;
  children: React.ReactElement | React.ReactElement[];
  defaultOpen: number;
}

export default function GridLayout({ navigationType, children, defaultOpen }: iGridLayout) {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <GridItem>
        <Sidebar type={navigationType} defaultOpen={defaultOpen} />
      </GridItem>
      <GridItem textAlign={"center"} justifySelf={"center"} w={"80vw"} ml={10}>
        {children}
      </GridItem>
    </Grid>
  );
}
