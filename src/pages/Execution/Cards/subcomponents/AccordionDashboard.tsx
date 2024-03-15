import { useState } from "react";
import { Accordionbtn, accordion } from "../../styles/CardsStyle";
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";

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
        <AccordionPanel>Aqui fica o dashboard</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
