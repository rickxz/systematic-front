import { Flex, Text} from "@chakra-ui/react";
import { StudyDataIcon } from "../../../../../../public/icons/StudyModal/StudyDataIcon";


export default function StudyDataButton() {
    return(
        <Flex alignItems={"center"} gap="5" bg="gray" pl="3" pr="3" w="100%">
            <StudyDataIcon /> <Text color="black">Study Data</Text>
        </Flex>
    );
}