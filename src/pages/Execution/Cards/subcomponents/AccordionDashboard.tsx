import { useState } from "react";
import { Accordionbtn, accordion } from "../../styles/CardsStyle";
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { flex } from "../../../NovaRevisao/styles/finalizationStyles";

interface AccordionProps{
  isAllDatabase ?: boolean
}

export default function AccordionDashboard({isAllDatabase = false}:AccordionProps) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <Accordion allowToggle sx={accordion} onChange={handleAccordionToggle}>

      <AccordionItem>

        <AccordionButton sx={Accordionbtn}>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel>

          <Flex flex={1} justifyContent="space-between" fontWeight="bold">
            <Flex >
              <Text flex="1" textAlign="left" width={"60px"} textOverflow={"ellipsis"} whiteSpace={"nowrap"} overflow={"hidden"}>Date</Text>
            </Flex>

            <Flex flex={1}>
              <Text flex="1" textAlign="center">Studies</Text>
            </Flex>

            {
              isAllDatabase ?
              <Flex flex={1}>
                <Text flex={1} textAlign="center">Source</Text>
              </Flex>
            :<></>}

            <Flex width={"140px"}>
              { 
                !isAllDatabase ?
                <Button
                width={"100%"}
                colorScheme="gray"
                fontSize={15}
                height={"35px"}
              >
                Add Session
              </Button> : <Flex flex={1} justifyContent={"center"}>Actions</Flex>}
            </Flex>

          </Flex>

          <Flex flex={1} justifyContent="space-between" alignItems="center" py={2} gap={"5px"}>
            <Text textAlign="left" width={"calc(min(60px, 30%))"} textOverflow={"ellipsis"} whiteSpace={"nowrap"} overflow={"hidden"}>20/07</Text>
            <Text flex="1" textAlign="center" >300</Text>
            {
              isAllDatabase ?
              <Text flex="1" textAlign="center" >Google Schoolar</Text>
            :<></>}
            <Flex width={"140px !important"} justifyContent="flex-end" mt={2}>
              <Button as={Link} to={"/newRevision/identification/15"} flex={1} colorScheme="gray" mr={2} height={"35px"}>View</Button>
              <Button flex={1} colorScheme="gray" height={"35px"}>Edit</Button>
            </Flex>
          </Flex>

          <Flex flex={1} justifyContent="space-between" alignItems="center" py={2} gap={"5px"}>
            <Text textAlign="left" width={"calc(min(60px, 30%))"} textOverflow={"ellipsis"} whiteSpace={"nowrap"} overflow={"hidden"}>20/07</Text>
            <Text flex="1" textAlign="center"  >300</Text>
            {
              isAllDatabase ?
              <Text flex="1" textAlign="center" >Scielo</Text>
            :<></>}
            <Flex width={"140px !important"} justifyContent="flex-end" mt={2}>
              <Button as={Link} to={"/newRevision/identification/15"} flex={1} colorScheme="gray" mr={2} height={"35px"}>View</Button>
              <Button flex={1} colorScheme="gray" height={"35px"}>Edit</Button>
            </Flex>
          </Flex>

          <Flex flex={1} justifyContent="flex-start" fontWeight="semi-bold" mt={2}>
            <Text>Total: 600</Text>
          </Flex>


        </AccordionPanel>

      </AccordionItem>

    </Accordion>
  );
}
