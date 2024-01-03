import { Flex, Icon, Menu, MenuButton, Text } from "@chakra-ui/react";

interface INavItemProps {
  navSize: string;
  icon?: React.ElementType;
  title: string;
}

export default function NavItem({ navSize, icon, title }: INavItemProps): JSX.Element {
  const isSmallSize = navSize === "small";

  return (
    <Flex mt={30} flexDir="column" w="100%" align={isSmallSize ? "center" : "flex-start"}>
      <Menu placement="right">
        <MenuButton>
          <Flex alignItems="center" gap={1.5}>
            <Icon marginLeft={isSmallSize ? 0 : "10px"} size="sm" as={icon} />
            <Text display={isSmallSize ? "none" : "flex"}>{title}</Text>
          </Flex>
        </MenuButton>
      </Menu>
    </Flex>
  );
}
