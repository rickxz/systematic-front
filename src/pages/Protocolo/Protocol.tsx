import { Box, FormControl, Flex, Progress, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, Divider } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { btnBox, formControl } from "./styles/partOneStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import FlexLayout from "../../components/ui/Flex/Flex";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCreateProtocol from "../../hooks/revisions/useCreateProtocol";
import axios from "../../interceptor/interceptor";

export default function Protocol() {
  const [goal, setGoal] = useState('');
  const [mainQuestion, setMainQuestion] = useState('');
//  const [isChecked, setIsChecked] = useState(false);
  const [population, setPopulation] = useState('');
  const [intervention, setIntervention] = useState('');
  const [control, setControl] = useState('');
  const [context, setContext] = useState('');
  const [outcome, setOutcome] = useState('');
  const { id = '' } = useParams();

  useEffect(() => {
    async function fetchValues(){
      let accessToken = localStorage.getItem('accessToken');
      let options = {
        headers: { Authorization: `Bearer ${accessToken}` }
      }

      const url = `http://localhost:8080/systematic-study/${id}/protocol`;
      let response = await axios.get(url, options);
      
      if(response.data.content.picoc){
        setPopulation(response.data.content.picoc.population);
        setIntervention(response.data.content.picoc.intervention);
        setControl(response.data.content.picoc.control);
        setContext(response.data.content.picoc.context);
        setOutcome(response.data.content.picoc.outcome);
//        setIsChecked(true);
      }
      setGoal(response.data.content.goal)
      setMainQuestion(response.data.content.justification);
    }
    
    fetchValues();
  }, [])

  async function handleData(){
    console.log(goal);
    console.log(mainQuestion);
    const picoc = {
      "population": population,
      "intervention": intervention,
      "control": control,
      "outcome": outcome,
      "context": context
    };
    await useCreateProtocol({goal, mainQuestion, picoc, id, retry: true})
    window.location.href = `http://localhost:5173/#/newRevision/protocolpartTwo/${id}`;
  }

  function handleGoal(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setGoal(e.target.value);
  }

  function handleMainQuestion(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setMainQuestion(e.target.value);
  }

  /*
  function handleCheck(){
    if(isChecked == false){
      setIsChecked(true);
    } else{
      setIsChecked(false);
    }
  } 
  */

  function handlePopulation(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setPopulation(e.target.value);
  }

  function handleIntervention(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setIntervention(e.target.value);
  }

  function handleControl(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setControl(e.target.value);
  }

  function handleOutcome(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setOutcome(e.target.value);
  }

  function handleContext(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setContext(e.target.value);
  }
  
  return (
    <FlexLayout defaultOpen={0} navigationType="Accordion">
      <Box w={"100%"}>
        <Header text="Protocol" />
        <Progress value={33} w={"100%"} />
        <Flex justify={"center"} direction={"column"}>
          <FormControl sx={formControl}>
            <TextAreaInput value={goal} label="Objectives:" placeholder="What are your goals?" onChange={handleGoal}/>
            <TextAreaInput value={mainQuestion} label="Main question:" placeholder="The reason behind your research..." onChange={handleMainQuestion}/>
            
            <Accordion allowToggle mt={6} w="80%">
              <AccordionItem>
                <h2 style={{color: "#2E4B6C"}}>
                  <AccordionButton>
                    <Box flex="1" textAlign="center">
                      <Heading size="md">PICOC Criteria (Optional)</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Divider mb={4} />
                  <TextAreaInput value={population} label="Population:" placeholder="What is your study population?" onChange={handlePopulation} mt={4}/>
                  <TextAreaInput value={intervention} label="Intervention:" placeholder="What is your intervention?" onChange={handleIntervention} mt={4}/>
                  <TextAreaInput value={control} label="Control:" placeholder="What is your control?" onChange={handleControl} mt={4}/>
                  <TextAreaInput value={outcome} label="Outcome:" placeholder="What is your outcome?" onChange={handleOutcome} mt={4}/>
                  <TextAreaInput value={context} label="Context:" placeholder="What is your context?" onChange={handleContext} mt={4}/>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </FormControl>

          <Box sx={btnBox}>
          <NavButton event={handleData} text="Next"  />
          </Box>
        </Flex>
      </Box>
    </FlexLayout>
  );
}
