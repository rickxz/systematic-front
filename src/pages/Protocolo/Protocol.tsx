import { Progress } from "@chakra-ui/react";
import { Box, FormControl } from "@chakra-ui/react";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import TextAreaInput from "../../components/Inputs/InputTextArea";

export default function Protocol() {
  return (
    <GridLayout navigationType="Accordion">
      <Header text="Protocol" />
      <Progress value={0} ml={"10%"} mt={10} w={"80%"} alignSelf={"center"} />
      <FormControl display={"flex"} flexDir={"column"} gap={20} mt={10} alignItems={"center"}>
        <TextAreaInput label="Objectives:" placeholder="What are your goals?" />
        <TextAreaInput label="Main question:" placeholder="The reason behind your research..." />
      </FormControl>
      <Box ml={"55%"} alignSelf={"flex-end"} mt={10}>
        <NavButton text="Next" path="/newRevision/protocolpartTwo" w={"30%"} />
      </Box>
    </GridLayout>
  );
}
