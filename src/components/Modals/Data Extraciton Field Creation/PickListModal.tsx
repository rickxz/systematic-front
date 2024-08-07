import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react";
import AddTextTable from "../../AddDataFields/AddTextTable";
import { Dispatch, SetStateAction } from "react";

interface Props{
    id: string;
    show: Dispatch<SetStateAction<boolean>>;
}

function PickListModal({id, show}: Props) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    
    useEffect(() => {
        onOpen();
    }, []);

    function close(){
        show(false);
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Insert the options
                    <ModalCloseButton onClick={close}/>
                </ModalHeader>
                <ModalBody>
                    <AddTextTable text="Options" placeholder="Options here" id={id} url={''}/>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default PickListModal