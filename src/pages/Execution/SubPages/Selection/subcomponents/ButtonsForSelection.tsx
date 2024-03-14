import { Box, Button, Flex } from "@chakra-ui/react";
import { boxconteiner, buttonconteiner, conteiner } from "../../../styles/BtnSelectionStyles";

export default function ButtonsForSelection() {
  return (
    <>
      <Flex sx={conteiner}>
        <Flex sx={boxconteiner}>
          <Box bg="blue.200">Inclusion Critiries</Box>
          <Box bg="blue.200">Exclusion Critiries</Box>
        </Flex>

        <Flex sx={buttonconteiner}>
          <Button>Previous</Button>
          <Button>Next</Button>
        </Flex>

        <Button>Redifine</Button>
      </Flex>
    </>
  );
}
