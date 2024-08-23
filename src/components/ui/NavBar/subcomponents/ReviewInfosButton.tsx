import { flexconteiner } from "../styles/Navitemstyles";
import { IoInformationCircle } from "react-icons/io5";
import { Flex, Icon, Menu, MenuButton, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

interface ILogoutButtonProps {
  navSize: string;
}

export default function ReviewInfosButton({ navSize }: ILogoutButtonProps): JSX.Element {
    const { id = "" } = useParams();

    const isSmallSize = navSize === "small";

    const handleClick = () => {
        window.location.href = `http://localhost:5173/#/revision/${id}`
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
            <Icon color={"#FDF0D5"} boxSize={isSmallSize ? "1.8em" : "1.1em"} as={IoInformationCircle} />
            <Text display={isSmallSize ? "none" : "flex"} textColor={"#FDF0D5"}>
            Review Infos
            </Text>
        </Flex>
        </Menu>
    </Flex>
    );
}
