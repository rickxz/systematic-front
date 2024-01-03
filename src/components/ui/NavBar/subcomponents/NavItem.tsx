import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";

interface INavItem {
  navSize: string;
  icon?: React.ElementType;
  title: string;
}

export default function NavItem({ navSize, icon, title }: INavItem) {
  return (
    <Flex mt={30} flexDir={"column"} w={"100%"} align={navSize == "small" ? "center" : "flex-start"}>
      <Menu placement="right">
        <Link>
          <MenuButton>
            <Flex alignItems={"center"} gap={1.5}>
              <Icon marginLeft={navSize != "small" ? "10px" : 0} size={"sm"} as={icon} />
              <Text display={navSize == "small" ? "none" : "flex"}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
