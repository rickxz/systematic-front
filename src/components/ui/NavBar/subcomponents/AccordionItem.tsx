import { Accordion, AccordionButton, Icon, AccordionIcon, Box, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import NavItem from "./NavItem";

interface IAccordionElement {
  navSize: string;
  icon?: React.ElementType;
  title: string;
  names: string[];
}

export default function AccordionElement({ navSize, icon, title, names }: IAccordionElement) {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <AccordionButton>
          {navSize === "small" ? (
            <Icon />
          ) : (
            <Box flex="1" alignContent={"flex-start"}>
              <Icon as={icon} /> {title}
            </Box>
          )}
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          {names.map((name, index) => (
            <NavItem key={index} title={name} navSize={navSize} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
