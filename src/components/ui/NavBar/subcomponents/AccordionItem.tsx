import NavItem from "./NavItem";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SidebarContext from "../../../Context/AppContext";
import { AccordionButton, Icon, AccordionIcon, Box, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { iconbox } from "../styles/AccordionItenStyles";

interface IAccordionElementProps {
  navSize: string;
  icon?: React.ElementType;
  title: string;
  names: string[];
  basePath: string;
  index: number;
  defaultOpen: number;
}

export default function AccordionElement({
  navSize,
  icon,
  title,
  names,
  basePath,
  index,
  defaultOpen,
}: IAccordionElementProps) {
  const isSmallSize = navSize === "small";
  const shouldRenderIcon = isSmallSize || (
    <Box sx={iconbox}>
      <Icon as={icon} /> {title}
    </Box>
  );
  const context = useContext(SidebarContext);
  if (!context) {
    return <>Problema com useContext em NavItem.tsx</>;
  }
  const isOpen = index === defaultOpen;

  return (
    <AccordionItem alignContent={isSmallSize ? "center" : "flex-start"}>
      <AccordionButton bg={isOpen ? "#301E1A" : "#FDF0D5"} color={isOpen ? "#301E1A" : "#301E1A"}>
        {isSmallSize && <Icon as={icon} />}
        {shouldRenderIcon}
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        {names.map((name) => (
          <Link to={`${basePath}/${name.toLowerCase()}`} key={name}>
            <NavItem title={name} navSize={navSize} />
          </Link>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
}
