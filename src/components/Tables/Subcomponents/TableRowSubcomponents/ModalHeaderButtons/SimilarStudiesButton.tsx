import { Flex, Text} from "@chakra-ui/react";
import { StudyDataIcon } from "../../../../../../public/icons/StudyModal/StudyDataIcon";
import { SimilarStudiesIcon } from "../../../../../../public/icons/StudyModal/SimilarStudiesIcon";


export default function SimilarStudiesButton() {
    return(
        <Flex alignItems={"center"} gap="5" bg="gray" pl="3" pr="3" w="100%">
            <SimilarStudiesIcon /> <Text color="black"  fontSize={"sm"}>Similar Studies</Text>
        </Flex>
    );
}