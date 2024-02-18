import { Box, Text, Tooltip } from "@chakra-ui/react";
import DynamicTable from "../../components/Tables/DynamicTable";
import GridLayout from "../../components/ui/Grid/Grid";

export default function searchSession() {
  return (
    <GridLayout navigationType="Accordion">
      <Box>
        <Box>
          <Text>Search String: </Text>
          <Tooltip label="used search string" area-label="A tool tip">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Tooltip>
        </Box>
        <Box></Box>
      </Box>
      <DynamicTable headerData={[]} bodyData={[]} filteredColumns={[]} />
    </GridLayout>
  );
}
