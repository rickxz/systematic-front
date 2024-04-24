import { useContext } from "react";
import { flexconteiner } from "../styles/Navitemstyles";
import { useLocation } from "react-router-dom";
import AppContext from "../../../Context/AppContext";
import { Flex, Icon, Menu, MenuButton, Text } from "@chakra-ui/react";

interface INavItemProps {
  navSize: string;
  icon?: React.ElementType;
  title: string;
  submenu: boolean;
}

export default function NavItem({ navSize, icon, title, submenu }: INavItemProps): JSX.Element {
  const context = useContext(AppContext);
  const location = useLocation();

  if (!context) {
    return <>Problema com useContext em NavItem.tsx</>;
  }

  const { button, setButton } = context;

  const isSmallSize = navSize === "small";
  const isSelected = button === title || location.pathname.includes(title.toLowerCase());
  const isSubMenu = submenu

  const handleClick = () => {
    console.log("last button: " + button);
    setButton(title);
  };

  return (
    <Flex sx={flexconteiner} align={isSmallSize ? "center" : "flex-start"}>

      <Menu placement="right">

        <MenuButton onClick={handleClick}/>

        <Flex 
        justifyContent={isSmallSize ? "center" : "none"} 
        pl={isSmallSize ? "none" : "20px"}
        w={isSmallSize ? "75px" : "180px" && isSubMenu ? "180px" : "180px"} 
        h={isSmallSize ? "75px" : "3.5em"}
        alignItems="center" gap={1.5}
        bg={isSelected ? "#FDF0D5" : "#301E1A"}>

          <Icon color={isSelected ? "#301E1A" : "#FDF0D5"} boxSize={isSmallSize ? "1.8em" : "1.1em"} as={icon} />
          <Text display={isSmallSize ? "none" : "flex"} textColor={isSelected ? "#301E1A" : "#FDF0D5"}>
            {title}
          </Text>

        </Flex>

      </Menu>

    </Flex>
  );
}
