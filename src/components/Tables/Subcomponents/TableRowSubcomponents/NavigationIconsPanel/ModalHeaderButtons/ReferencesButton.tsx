import { Button, Flex, Text} from "@chakra-ui/react";
import { StudyDataIcon } from "../../../../../../../public/icons/StudyModal/StudyDataIcon";
import { SimilarStudiesIcon } from "../../../../../../../public/icons/StudyModal/SimilarStudiesIcon";
import { QualityFormIcon } from "../../../../../../../public/icons/StudyModal/QualityFormIcon";
import { DataExtractionFormIcon } from "../../../../../../../public/icons/StudyModal/DataExtractionFormIcon";
import { ReferencesIcon } from "../../../../../../../public/icons/StudyModal/ReferencesIcon";


export default function ReferencesButton() {
    function Show() {
        console.log("eita");
    }

    return(
        <Button 
        onClick={Show} alignItems={"center"} gap="5" bg="gray" pl="3" pr="3" w="100%">
            <ReferencesIcon /> <Text color="black"  fontSize={"sm"}>References</Text>
        </Button>
    );
}