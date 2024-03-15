import { Button, Text} from "@chakra-ui/react";
import { SelectionDataIcon } from "../../../../../../../public/icons/StudyModal/SelectionDataIcon";


export default function SelectionDataButton() {
    
    function Show() {
        console.log("eita");
    }

    return(
        <Button 
        onClick={Show}
        alignItems={"center"} gap="5" bg="gray" pl="3" pr="3" w="100%">
            <SelectionDataIcon /> <Text color="black"  fontSize={"sm"}>Selection Data</Text>
        </Button>
    );
}