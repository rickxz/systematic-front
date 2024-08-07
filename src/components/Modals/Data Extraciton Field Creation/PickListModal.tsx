import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react";
import { AddPickListTable } from "../../Tables/Subcomponents/ExtractionQuestionsTables.tsx/AddPickListTable";
import { Dispatch, SetStateAction } from "react";

interface Props{
    show: Dispatch<SetStateAction<boolean>>;
}

function PickListModal({show}: Props) {
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
                    <AddPickListTable text="Options" placeholder="Options here" url={''}/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={close}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default PickListModal