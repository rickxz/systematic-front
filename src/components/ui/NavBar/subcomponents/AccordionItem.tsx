import { Accordion, AccordionButton, Icon, AccordionIcon, Box, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

interface IAccordionElementProps {
  navSize: string;
  icon?: React.ElementType;
  title: string;
  names: string[];
}

export default function AccordionElement({ navSize, icon, title, names }: IAccordionElementProps) {
  const isSmallSize = navSize === "small";
  const shouldRenderIcon = isSmallSize || (
    <Box flex="1" alignContent="flex-start">
      <Icon as={icon} /> {title}
    </Box>
  );

  return (
    <Accordion allowMultiple>
      <AccordionItem alignContent={isSmallSize ? "center" : "flex-start"}>
        <AccordionButton>
          {isSmallSize && <Icon as={icon} />}
          {shouldRenderIcon}
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          {names.map((name) => (
            <Link to="/novaRevisao/protocolo">
              <NavItem key={name} title={name} navSize={navSize} />
            </Link>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
