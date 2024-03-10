import { Box } from "@chakra-ui/react";

import GridLayout from "../../../components/ui/Grid/Grid";
import Header from "../../../components/ui/Header/Header";

import BarChart from "../../../components/Charts/BarChart/BarChart";
import PieChart from "../../../components/Charts/PieChart/PieChart";

export default function Graphics() {
  return (
    <GridLayout navigationType="Accordion" defaultOpen={2}>
      <Header text="Graphics" />
      <Box maxW="100%" maxH="100%" borderWidth="1px" borderRadius="lg" padding="2em" display="column">
        <Box maxW="100%" maxH="100%" borderWidth="1px" borderRadius="lg" padding="2em" display="flex">
          <Box width="50%" padding="2px">
            <BarChart />
          </Box>

          <Box width="50%" padding="2px" borderLeft="1px">
            <PieChart />
          </Box>
        </Box>
        <Box maxW="100%" maxH="100%" borderWidth="1px" borderRadius="lg" padding="2em" display="flex">
          <Box width="50%" padding="2px">
            <BarChart />
          </Box>

          <Box width="50%" padding="2px" borderLeft="1px">
            <PieChart />
          </Box>
        </Box>
      </Box>
    </GridLayout>
  );
}
