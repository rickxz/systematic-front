import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react";
import AddTextTable from "../../AddDataFields/AddTextTable";

interface Props{
    id: string;
}

function PickListModal({id}: Props) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    
    useEffect(() => {
        onOpen();
    }, [])

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Insert the options</ModalHeader>
                <ModalBody>
                    <AddTextTable text="Options" placeholder="Options here" id={id} url={''}/>
                </ModalBody>
                <ModalCloseButton />
            </ModalContent>
        </Modal>
    )
}

export default PickListModal