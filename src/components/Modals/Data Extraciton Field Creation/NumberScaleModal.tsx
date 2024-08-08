import { Button, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface Props{
    show: Dispatch<SetStateAction<boolean>>;
    scaleHolder: React.Dispatch<React.SetStateAction<number[]>>
}

function NumberScaleModal({show, scaleHolder }: Props) {
    
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [minimalValue, setMinimalValue] = useState<number>(0); // Inicializando com 0
    const [maximalValue, setMaximalValue] = useState<number>(5); // Inicializando com 5

    useEffect(() => {
        onOpen();
    }, []);

    function handleMinimalValue(valueAsString: string, valueAsNumber: number){
        if (!isNaN(valueAsNumber)) {
            setMinimalValue(valueAsNumber);
        }
    }

    function handleMaximalValue(valueAsString: string, valueAsNumber: number){
        if (!isNaN(valueAsNumber)) {
            setMaximalValue(valueAsNumber);
        }
    }

    function handleSave(){
        if (minimalValue <= maximalValue) {
            let array: number[] = [minimalValue, maximalValue];
            scaleHolder(array);
        }
        onClose();
        show(false);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Values to number scale
                    <ModalCloseButton onClick={onClose} />
                </ModalHeader>
                <ModalBody>
                    <FormControl>
                        <FormLabel>Min</FormLabel>
                        <NumberInput mb={"2rem"} defaultValue={0} onChange={handleMinimalValue}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>

                        <FormLabel>Max</FormLabel>
                        <NumberInput defaultValue={5} onChange={handleMaximalValue}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
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