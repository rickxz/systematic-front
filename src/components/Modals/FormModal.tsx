import { CloseIcon } from "@chakra-ui/icons";
import style from "./modal.module.css";
import { Icon, Flex, Heading, Text} from "@chakra-ui/react";
import EventButton from "../Buttons/EventButton";

interface IFormModal {
    type: string;
}

export default function FormtModal({type}: IFormModal) {
    if (isOpen) {
        
        return (
            <div  className={style.background}>
                <Flex className={style.modal} bg="gray" justify="space-around" wrap="wrap" gap="2">
                    <Heading>Data Extraction Field Creation</Heading>
                    <CloseIcon onClick={() => setOpen(!open)}/>
                </Flex>
                <Flex>
                    <div>
                        <label>Min Number:</label>
                        <input type="number"></input>
                    </div>
                    <div>
                        <label>Max Number:</label>
                        <input type="number"></input>
                    </div>
                    <div>
                        <label>Increment:</label>
                        <input type="number"></input>
                    </div>
                    <div>
                        <button>Ok</button>
                        <button>Cancel</button>
                    </div>
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