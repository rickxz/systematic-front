import { Box } from "@chakra-ui/react";
import FlexLayout from "../../../components/ui/Flex/Flex";
import Header from "../../../components/ui/Header/Header";
import BarChart from "../../../components/Charts/BarChart/BarChart";
import PieChart from "../../../components/Charts/PieChart/PieChart";
import { barchartBox, conteiner, graphicsconteiner, piechartBox } from "../styles/graphicsStyles";

export default function Graphics() {
  return (
    <FlexLayout navigationType="Accordion" defaultOpen={2}>
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
    </FlexLayout>
  );
}
