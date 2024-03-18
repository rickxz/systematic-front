import { Button, Text} from "@chakra-ui/react";
import { QualityFormIcon } from "../../../../../../../public/icons/StudyModal/QualityFormIcon";


export default function QualityFormButton() {
    function Show() {
        console.log("eita");
    }

    return(
        <Button 
        onClick={Show} alignItems={"center"} gap="5" bg="gray" pl="3" pr="3" w="100%">
            <QualityFormIcon /> <Text color="black" fontSize={"sm"}>Quality Form</Text>
        </Button>
    );
}