import { Box, Center, Flex } from "@chakra-ui/react";
import ButtonsForSelection from "./ButtonsForSelection";
import StudyDataFiel from "../../../../../components/Modals/StudyModal/StudyData";

export default function StudySelectionArea() {
    return (
        <>
            <Flex mt="10" direction="column"  bg="gray.600" w="auto" p="5" alignItems={"center"}>
                <ButtonsForSelection />
                <Box h={"300"} w={"100%"} bg="gray.200">
                </Box>
            </Flex>
        
        </>
    );
}