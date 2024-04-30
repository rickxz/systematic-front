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
    <AccordionItem alignContent={isSmallSize ? "center" : "flex-start"}
    w={isSmallSize ? "75px" : "180px"}>
      <AccordionButton  bg={isOpen ? "#FDF0D5" : "#301E1A"} color={isOpen ? "#301E1A" : "#FDF0D5"}>
        {isSmallSize && <Icon as={icon} />}
        {shouldRenderIcon}
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel padding={"0px"}>
        {names.map((name) => (
          <Link to={`${basePath}/${name.toLowerCase()}`} key={name}>
            <NavItem title={name} navSize={navSize} submenu={true}/>
          </Link>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
}
