import {
  Card,
  Icon,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

import { FaBoxArchive } from "react-icons/fa6";
import { useState } from "react";

interface DatabaseCardProps {
  text: string;
  type: string;
}

export default function DataBaseCard({ text, type }: DatabaseCardProps) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <Card w={type === "allData" ? "80vw" : "32vw"} mb={5} h={"fit-content"}>
      <Box display={"flex"} flexDir={"row"} justifyContent={"space-between"}>
        <Box display={"flex"} flexDir={"row"} alignContent={"center"} justifyContent={"flex-start"} w={"50%"}>
          <Icon w={"3rem"} h={"auto"} mt={"2%"} ml={"2%"} as={FaBoxArchive} />
          <Text ml={"5%"} mt={5}>
            {" "}
            {text}
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-evenly"}
          columnGap={"20%"}
          w={"50%"}
          mt={5}
          mb={3}
          mr={4}
        >
          <Button fontSize={type === "allData" ? 16 : 12} w={"200PX"}>
            Add Session
          </Button>{" "}
          <Button fontSize={type === "allData" ? 16 : 12} w={"200PX"}>
            Remove Session
          </Button>
        </Box>
      </Box>

      <Accordion allowToggle w={"100%"} justifySelf={"center"} onChange={handleAccordionToggle}>
        <AccordionItem>
          <AccordionButton display={"flex"} alignContent={"center"} justifyContent={"center"}>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>Aqui fica o dashboard</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
