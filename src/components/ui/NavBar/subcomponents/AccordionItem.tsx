import { Accordion, AccordionButton, Icon, AccordionIcon, Box, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { useState } from "react";

interface IAccordionElementProps {
  navSize: string;
  icon?: React.ElementType;
  title: string;
  names: string[];
  basePath: string;
}

export default function AccordionElement({ navSize, icon, title, names, basePath }: IAccordionElementProps) {
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
            <Link to={`${basePath}/${name.toLowerCase()}`} key={name}>
              <NavItem title={name} navSize={navSize} /*isSelected={isSelected}*/ />
            </Link>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
