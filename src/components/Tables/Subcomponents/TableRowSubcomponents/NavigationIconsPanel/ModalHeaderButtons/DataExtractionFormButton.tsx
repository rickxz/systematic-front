import { Button, Text} from "@chakra-ui/react";
import { DataExtractionFormIcon } from "../../../../../../../public/icons/StudyModal/DataExtractionFormIcon";


export default function DataExtractionFormButton() {
    function Show() {
        console.log("eita");
    }

    return(
        <Button 
        onClick={Show} alignItems={"center"} gap="5" bg="gray" pl="3" pr="3" w="100%">
            <DataExtractionFormIcon /> <Text color="black" fontSize={"sm"}>Data Extraction Form</Text>
        </Button>
    );
}