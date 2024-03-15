import { Flex, Text} from "@chakra-ui/react";
import { StudyDataIcon } from "../../../../../../../public/icons/StudyModal/StudyDataIcon";
import { SimilarStudiesIcon } from "../../../../../../../public/icons/StudyModal/SimilarStudiesIcon";
import { QualityFormIcon } from "../../../../../../../public/icons/StudyModal/QualityFormIcon";
import { DataExtractionFormIcon } from "../../../../../../../public/icons/StudyModal/DataExtractionFormIcon";
import { ReferencesIcon } from "../../../../../../../public/icons/StudyModal/ReferencesIcon";
import { SelectionDataIcon } from "../../../../../../../public/icons/StudyModal/SelectionDataIcon";


export default function SelectionDataButton() {
    return(
        <Flex alignItems={"center"} gap="5" bg="gray" pl="3" pr="3" w="100%">
            <SelectionDataIcon /> <Text color="black"  fontSize={"sm"}>Selection Data</Text>
        </Flex>
    );
}