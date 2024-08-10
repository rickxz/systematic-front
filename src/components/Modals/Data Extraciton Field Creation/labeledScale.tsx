import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import AddLabeledScaleTable from "../../AddDataFields/labeledScale/AddLabeledScaleTable";

interface Props{
    show: Dispatch<SetStateAction<boolean>>;
    scaleHolder: React.Dispatch<React.SetStateAction<number[]>>
}

function NumberScaleModal({show, scaleHolder }: Props) {
    
    const { isOpen, onClose, onOpen } = useDisclosure();

    useEffect(() => {
        onOpen();
    }, []);

    function handleSave(){
        onClose();
        show(false);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Values to labeled list
                    <ModalCloseButton onClick={onClose} />
                </ModalHeader>
                <ModalBody>
                    <FormControl>

                        <AddLabeledScaleTable placeholder="Insert your question here" text="question"/>

                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} m={"1rem"}>Close</Button>
                    <Button onClick={handleSave}>Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}


export default NumberScaleModal