import {
    Modal,
    ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,
    ModalBody, ModalCloseButton,
    Button, Flex, useDisclosure, Input
  } from '@chakra-ui/react';

  interface IModal {
    title: string;
    content: React.ReactNode;
    firstButton: string;
    secondButton: string;
  }

  export default function NewModal ({title, content, firstButton, secondButton}: IModal) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody bg="gray.300">
              {content}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                {firstButton}
              </Button>
              <Button variant='ghost'>{secondButton}</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }