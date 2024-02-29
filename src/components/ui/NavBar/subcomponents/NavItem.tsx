import { Flex, Icon, Menu, MenuButton, Text } from "@chakra-ui/react";
import { useContext } from "react";
import SidebarContext from "../../../Context/sidebarContext";

interface INavItemProps {
  navSize: string;
  icon?: React.ElementType;
  title: string;
  isSelected?: boolean;
}

export default function NavItem({ navSize, icon, title }: INavItemProps): JSX.Element {
const context = useContext(SidebarContext);

  if (!context) {
    // Se o contexto não estiver definido, retorne algo apropriado
    return (<>Problema com useContext em NavItem.tsx</>);
  }

  const {button, setButton} = context;

  const isSmallSize = navSize === "small";
  const isSelected = button === title;

  console.log('actual button: ' + button);

  const handleClick = () => {
    console.log('last button: ' + button);
    setButton(title);
  }

  return (
    <Flex mt={30} flexDir="column" w="100%" align={isSmallSize ? "center" : "flex-start"}>
      <Menu placement="right">
        <MenuButton onClick={handleClick} bg={isSelected ? "black" : "white"}>
          <Flex alignItems="center" gap={1.5}>
            <Icon marginLeft={isSmallSize ? 0 : "10px"} color={isSelected ? "white" : "black"} size="sm" as={icon} />
            <Text display={isSmallSize ? "none" : "flex"} textColor={isSelected ? "white" : "black"}>{title}</Text>
          </Flex>
        </MenuButton>
      </Menu>
    </Flex>
  );
}
