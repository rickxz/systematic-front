import { Progress } from "@chakra-ui/react";
import { Box, FormControl, Flex } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { btnBox, formControl } from "./styles/partOneStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import FlexLayout from "../../components/ui/Flex/Flex";

export default function Protocol() {
  return (
    <FlexLayout defaultOpen={0} navigationType="Accordion">
      <Box w={"100%"}>
        <Header text="Protocol" />

        <Progress value={0} />

        <Flex justify={"center"} direction={"column"}>
          <FormControl sx={formControl}>
            <TextAreaInput label="Objectives:" placeholder="What are your goals?" />
            <TextAreaInput label="Main question:" placeholder="The reason behind your research..." />
          </FormControl>

          <Box sx={btnBox}>
            <NavButton text="Next" path="/newRevision/protocolpartTwo" w={"30%"} />
          </Box>
        </Flex>
      </Box>
    </FlexLayout>
  );
}
