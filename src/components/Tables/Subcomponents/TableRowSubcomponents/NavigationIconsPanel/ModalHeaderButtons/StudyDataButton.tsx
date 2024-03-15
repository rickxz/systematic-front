import { Button, Text} from "@chakra-ui/react";
import { StudyDataIcon } from "../../../../../../../public/icons/StudyModal/StudyDataIcon";


export default function StudyDataButton() {
    function Show() {
        console.log("eita");
    }

    return(
        <Button 
        onClick={Show} alignItems={"center"} gap="5" bg="gray" pl="3" pr="3" w="100%">
            <StudyDataIcon /> <Text color="black"  fontSize={"sm"}>Study Data</Text>
        </Button>
    );
}