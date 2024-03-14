import { Flex, Text} from "@chakra-ui/react";
import { StudyDataIcon } from "../../../../../../public/icons/StudyModal/StudyDataIcon";
import { SimilarStudiesIcon } from "../../../../../../public/icons/StudyModal/SimilarStudiesIcon";
import { QualityFormIcon } from "../../../../../../public/icons/StudyModal/QualityFormIcon";


export default function StudyDataButton() {
    return(
        <Flex alignItems={"center"} gap="5" bg="gray" pl="3" pr="3" w="100%">
            <QualityFormIcon /> <Text color="black">Quality Form</Text>
        </Flex>
    );
}