import {
    Modal,
    ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,
    ModalBody, ModalCloseButton,
    Button, Flex, useDisclosure,
  } from '@chakra-ui/react';

import style from "./modal.module.css";
import InputText from '../../Inputs/InputText';

export default function DataExtractionFormItensList() {
const { isOpen, onOpen, onClose } = useDisclosure()
return (
    <>
    <Button onClick={onOpen}>Open Modal</Button>

    <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Data Extraction Field Creation</ModalHeader>
        <ModalCloseButton />
        <ModalBody bg="gray.300" p="50px">
            <Flex flexDirection="column" gap="5">
                <Flex gap="5">
                    <InputText label={'Insert the list item:'} placeholder={'Insert the list item...'} type={'text'} nome={''} />
                    <Button>Add</Button>
                </Flex>
                <Flex gap="5" className={style.border} p="5">
                    <InputText label={'List Item:'} placeholder={'List item...'} type={'text'} nome={''} />

                    <Button>Remove</Button>
                </Flex>
                <Flex gap="5" justifyContent="flex-end">
                    <Button>Ok</Button>
                    <Button>Cancel</Button>
                </Flex>
            </Flex>
        </ModalBody>

        <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
            </Button>
            <Button variant='ghost'>Cancel</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
    </>
)
}