import { useContext } from "react";
import { flexconteiner } from "../styles/Navitemstyles";
import { useLocation } from "react-router-dom";
import AppContext from "../../../Context/AppContext";
import { Flex, Icon, Menu, MenuButton, Text } from "@chakra-ui/react";

interface INavItemProps {
  navSize: string;
  icon?: React.ElementType;
  title: string;
}

export default function NavItem({ navSize, icon, title }: INavItemProps): JSX.Element {
  const context = useContext(AppContext);
  const location = useLocation();

  if (!context) {
    return <>Problema com useContext em NavItem.tsx</>; // Lidar com o contexto não carregado
  }

  const { button, setButton } = context;

  const isSmallSize = navSize === "small";
  const isSelected = button === title || location.pathname.includes(title.toLowerCase());

  const handleClick = () => {
    console.log("last button: " + button);
    setButton(title);
  };

  return (
    <Flex sx={flexconteiner} align={isSmallSize ? "center" : "flex-start"}>
      <Menu placement="right">
        <MenuButton onClick={handleClick} bg={isSelected ? "black" : "white"}>
          <Flex alignItems="center" gap={1.5}>
            <Icon marginLeft={isSmallSize ? 0 : "10px"} color={isSelected ? "white" : "black"} size="sm" as={icon} />
            <Text display={isSmallSize ? "none" : "flex"} textColor={isSelected ? "white" : "black"}>
              {title}
            </Text>
          </Flex>
        </MenuButton>
      </Menu>
    </Flex>
  );
}
