import { Container, Box, Heading } from "@chakra-ui/react";
import DynamicTable from "../../Tables/DynamicTable";
import useFetchTableData from "../../../hooks/seachAppropriateStudy/useFetchStudyData";
import useInputState from "../../../hooks/useInputState";
import { TableHeadersInterface } from "../../../../public/interfaces/ITableHeaders";

export default function SimilarStudies() {
  const studies = useFetchTableData("/data/tableData.json");
  const headerData: TableHeadersInterface = {
    title: "Title",
    authors: "Author",
    year: "Year",
    selectionStatus: "Status/Selection",
    extractionStatus: "Status/Extraction",
    readingPriority: "Reading Priority"
}
  const { value: checkedValues } = useInputState<string[]>([]);

  if(!studies) return <>Studies data nor found</>

  return (
    <Container>
      <Heading textAlign="right" mx="2em">
        Similar Studies
      </Heading>

      <Box style={{ maxHeight: "350px", overflowY: "auto" }} w="39rem">
        <DynamicTable headerData={headerData} tableType="modal" bodyData={studies} filteredColumns={checkedValues} />
      </Box>
    </Container>
  );
}
