import { useState } from "react";
import { Accordionbtn, accordion } from "../../styles/CardsStyle";
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { flex } from "../../../NovaRevisao/styles/finalizationStyles";


export default function AccordionDashboard() {
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

          <Flex justifyContent="space-between" p={1} fontWeight="bold">
              <Text flex="1" textAlign="left">Date</Text>
              <Text flex="1" textAlign="left">Studies</Text>
              {/*<Box display="flex" flex={1}>
                <Button  
                    size="sm"  
                    colorScheme="gray" 
                    ml={2}
                    fontSize={15}
                    > 
                    Add Session
                  </Button>
              </Box>  */}
              {/*<Box display="flex" flex={1}>
                 <Button  
                  size="xs"  
                  colorScheme="gray" 
                  borderRadius="full"
                  width="25px"
                  height="25px" 
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  ml={2}
                  fontSize="12px"
                  > 
                  +
                </Button>
              </Box> */}

              <Box flex="1" textAlign="right" />
          </Flex>

          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text flex="1" textAlign="left">20/07</Text>
            <Text flex="1" textAlign="center" mr="8%">300</Text>
            <Box flex="1" display="flex" p={1} justifyContent="flex-end" mt={2}>
              <Button as={Link} to={"/newRevision/identification/15"} size="sm" colorScheme="gray" mr={2}>View</Button>
              <Button size="sm" colorScheme="gray">Edit</Button>
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text flex="1" textAlign="left">20/07</Text>
            <Text flex="1" textAlign="center" mr="8%">300</Text>
            <Box flex="1" display="flex" p={1} justifyContent="flex-end" mt={2}>
              <Button as={Link} to={"/newRevision/identification/15"} size="sm" colorScheme="gray" mr={2}>View</Button>
              <Button size="sm" colorScheme="gray">Edit</Button>
            </Box>
          </Flex>
            
          <Flex justifyContent="flex-start" fontWeight="semi-bold" mt={2}>
            <Text>Total: 600</Text>
          </Flex>
          

        </AccordionPanel>

      </AccordionItem>

    </Accordion>
  );
}
