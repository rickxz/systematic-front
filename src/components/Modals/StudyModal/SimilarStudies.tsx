import { Container, Box, Heading } from "@chakra-ui/react";
import DynamicTable from "../../Tables/DynamicTable";
import useFetchTableData from "../../../hooks/fetch/useFetchTableData";
import useInputState from "../../../hooks/useInputState";

export default function SimilarStudies() {
    const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
    const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);
    return(
        <Container>
            <Heading textAlign="right" mx="2em" >Similar Studies</Heading>
            
            <Box style={{ maxHeight: "350px", overflowY: "auto" }} w="39rem">
                <DynamicTable headerData={headerData} bodyData={bodyData} filteredColumns={checkedValues} />
            </Box>
            

        </Container>
    );
}