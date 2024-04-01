import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AccordionButton, Icon, AccordionIcon, Box, AccordionItem, AccordionPanel } from "@chakra-ui/react";

import NavItem from "./NavItem";
import { iconbox } from "../styles/AccordionItenStyles";

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
    <Box sx={iconbox}>
      <Icon as={icon} /> {title}
    </Box>
  );

  // Estado para armazenar a URL atual
  const [activeLink, setActiveLink] = useState("");

  // Atualiza o estado da URL atual ao montar o componente
  useEffect(() => {
    const path = window.location.pathname; // Obtém a URL atual
    setActiveLink(path);
  }, []);

  return (
    <AccordionItem alignContent={isSmallSize ? "center" : "flex-start"}>
      <AccordionButton>
        {isSmallSize && <Icon as={icon} />}
        {shouldRenderIcon}
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        {names.map((name) => (
          <NavLink
            key={name}
            to={`${basePath}/${name.toLowerCase()}`}
            className={`nav-link ${`${basePath}/${name.toLowerCase()}` === activeLink ? "active" : ""}`}
          >
            <NavItem title={name} navSize={navSize} />
          </NavLink>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
}
