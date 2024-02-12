import { CloseIcon } from "@chakra-ui/icons";
import style from "./modal.module.css";
import { Icon, Flex, Heading, Text} from "@chakra-ui/react";

interface IModal {
    isOpen: boolean;
    setOpen: any;
    text: string;
    title: string;
    color: string;
    icon: any;
}

export default function AlertModal({isOpen, setOpen, text, title, color, icon}: IModal) {
    if (isOpen) {
        return (
            <div  className={style.background}>
                <Flex className={style.modal} bg={color} justify="space-around" wrap="wrap" gap="2">
                    <Heading>{title}</Heading>
                    <Text>{text}</Text>
                    <CloseIcon onClick={() => setOpen(!open)}/>
                </Flex>
            </div>
        );
    }
    else {
        return (
            <></>
        )
    }
}