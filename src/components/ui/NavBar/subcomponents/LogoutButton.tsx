import { flexconteiner } from "../styles/Navitemstyles";
import { IoLogOutOutline } from "react-icons/io5";
import { Flex, Icon, Menu, MenuButton, Text } from "@chakra-ui/react";
import useLogout from "../../../../hooks/logout/useLogout";

interface ILogoutButtonProps {
  navSize: string;
}

export default function LogoutButton({ navSize }: ILogoutButtonProps): JSX.Element {
    const isSmallSize = navSize === "small";
    const logout = useLogout();

    const handleClick = () => {
        console.log("Logout")
        logout();
    };

    return (
    <Flex sx={flexconteiner} align={isSmallSize ? "center" : "flex-start"} onClick={handleClick}>
        <Menu placement="right">
        <MenuButton />
        <Flex
            justifyContent={isSmallSize ? "center" : "none"}
            pl={isSmallSize ? "none" : "20px"}
            w={isSmallSize ? "75px" : "180px"}
            h={isSmallSize ? "75px" : "3.5em"}
            alignItems="center"
            gap={1.5}
            bg={"#282828"}
        >
            <Icon color={"#FDF0D5"} boxSize={isSmallSize ? "1.8em" : "1.1em"} as={IoLogOutOutline} />
            <Text display={isSmallSize ? "none" : "flex"} textColor={"#FDF0D5"}>
            Logout
            </Text>
        </Flex>
        </Menu>
    </Flex>
    );
}
