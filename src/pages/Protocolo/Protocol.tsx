import { Box, FormControl, Flex } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { btnBox, formControl } from "./styles/partOneStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import FlexLayout from "../../components/ui/Flex/Flex";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useCreateProtocol from "../../hooks/revisions/useCreateProtocol";

export default function Protocol() {
  const [goal, setGoal] = useState('');
  const [mainQuestion, setMainQuestion] = useState('');
  const { id = '' } = useParams();

  async function handleData(){
    console.log(goal);
    console.log(mainQuestion);
    useCreateProtocol({goal, mainQuestion, id, retry: true})
  }

  function handleGoal(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setGoal(e.target.value);
  }

  function handleMainQuestion(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setMainQuestion(e.target.value);
  }

  return (
    <FlexLayout defaultOpen={0} navigationType="Accordion">
      <Box w={"100%"}>
        <Header text="Protocol" />

        <Flex justify={"center"} direction={"column"}>
          <FormControl sx={formControl}>
            <TextAreaInput label="Objectives:" placeholder="What are your goals?" onChange={handleGoal}/>
            <TextAreaInput label="Main question:" placeholder="The reason behind your research..." onChange={handleMainQuestion}/>
          </FormControl>

          <Box sx={btnBox}>
            <NavButton event={handleData} text="Next" path="/newRevision/protocolpartTwo" w={"30%"} />
          </Box>
        </Flex>
      </Box>
    </FlexLayout>
  );
}
