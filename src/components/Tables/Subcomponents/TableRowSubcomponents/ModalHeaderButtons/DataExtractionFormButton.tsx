import { Flex, Text} from "@chakra-ui/react";
import { StudyDataIcon } from "../../../../../../public/icons/StudyModal/StudyDataIcon";
import { SimilarStudiesIcon } from "../../../../../../public/icons/StudyModal/SimilarStudiesIcon";
import { QualityFormIcon } from "../../../../../../public/icons/StudyModal/QualityFormIcon";
import { DataExtractionFormIcon } from "../../../../../../public/icons/StudyModal/DataExtractionFormIcon";


export default function StudyDataButton() {
    return(
        <Flex alignItems={"center"} gap="5" bg="gray" pl="3" pr="3" w="100%">
            <DataExtractionFormIcon /> <Text color="black">Data Extraction Form</Text>
        </Flex>
    );
}