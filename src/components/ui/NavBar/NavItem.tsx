import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";

interface INavItem {
  navSize: string;
  icon: React.ElementType;
  title: string;
}

export default function NavItem({ navSize, icon, title }: INavItem) {
  return (
    <Flex mt={30} flexDir={"column"} w={"100%"} align={navSize == "small" ? "center" : "flex-start"}>
      <Menu>
        <Link>
          <MenuButton>
            <Flex>
              <Icon as={icon} />
              <Text>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
