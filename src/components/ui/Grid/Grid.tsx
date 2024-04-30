import { gridItem } from "./GridStyle";
import Sidebar from "../NavBar/Sidebar";
import { Box, Grid, GridItem } from "@chakra-ui/react";

interface iGridLayout {
  navigationType: string;
  children: React.ReactElement | React.ReactElement[];
  defaultOpen: number;
}

export default function GridLayout({ navigationType, children, defaultOpen }: iGridLayout) {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"} display={"flex"}>
      <GridItem>
        <Sidebar type={navigationType} defaultOpen={defaultOpen} />
      </GridItem>

      <GridItem sx={gridItem}>
        <Box w={"92vw"} maxH={"100vh"} overflow={"auto"}>
          {children}
        </Box>
      </GridItem>
    </Grid>
  );
}
