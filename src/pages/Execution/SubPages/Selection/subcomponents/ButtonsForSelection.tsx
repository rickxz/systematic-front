import { Box, Button, Flex } from "@chakra-ui/react";

export default function ButtonsForSelection() {
    return (
        <>
            <Flex gap={"200px"} justify={"center"} m="2" alignItems={"center"}>
                <Flex gap={"20px"}>
                    <Box bg="blue.200" >Inclusion Critiries</Box>
                    <Box bg="blue.200">Exclusion Critiries</Box>
                </Flex>

                <Flex gap={"20px"} direction={"row"}>
                    <Button>Previous</Button>
                    <Button>Next</Button>
                </Flex>
                
                <Button>Redifine</Button>
            </Flex>
        </>
    );
}