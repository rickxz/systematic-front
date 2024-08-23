import { useState } from "react";
import { Accordionbtn, accordion } from "../../styles/CardsStyle";
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
          
          <Link to={"/newRevision/identification/15"}>Aqui fica a lista de sessions</Link>

        </AccordionPanel>

      </AccordionItem>

    </Accordion>
  );
}
