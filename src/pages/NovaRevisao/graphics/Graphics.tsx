import { Box } from "@chakra-ui/react";
import Header from "../../../components/ui/Header/Header";
import BarChart from "../../../components/Charts/BarChart/BarChart";
import PieChart from "../../../components/Charts/PieChart/PieChart";
import { barchartBox, conteiner, graphicsconteiner, piechartBox } from "../styles/graphicsStyles";
import GridLayout from "../../../components/ui/Grid/Grid";

export default function Graphics() {
  return (
    <GridLayout navigationType="Accordion" defaultOpen={2}>
      <Header text="Graphics" />
      <Box sx={conteiner}>
        <Box sx={graphicsconteiner}>
          <Box sx={barchartBox}>
            <BarChart />
          </Box>

          <Box sx={piechartBox}>
            <PieChart />
          </Box>
        </Box>
        <Box sx={graphicsconteiner}>
          <Box sx={barchartBox}>
            <BarChart />
          </Box>

          <Box sx={piechartBox}>
            <PieChart />
          </Box>
        </Box>
      </Box>
    </GridLayout>
  );
}
