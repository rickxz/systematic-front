import { useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";

export default function AccordionDashboard() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <Accordion allowToggle w={"100%"} justifySelf={"center"} onChange={handleAccordionToggle}>
      <AccordionItem>
        <AccordionButton display={"flex"} alignContent={"center"} justifyContent={"center"}>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>Aqui fica o dashboard</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
