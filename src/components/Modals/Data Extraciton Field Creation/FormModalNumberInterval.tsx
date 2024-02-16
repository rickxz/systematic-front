import {
    Modal,
    ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,
    ModalBody, ModalCloseButton,
    Button, Flex, useDisclosure, Input
  } from '@chakra-ui/react';

export default function DataExtractionFormNumberInterval() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Data Extraction Field Creation</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="gray.300">
              <Flex flexDirection="column" gap="5" p="20">
                  <Flex gap="5">
                      <label>Min Number:</label>
                      <input type="number"></input>
                  </Flex>
                  <Flex gap="5">
                      <label>Max Number:</label>
                      <input type="number"></input>
                  </Flex>
                  <Flex gap="5">
                      <label>Increment:</label>
                      <input type="number"></input>
                  </Flex>
                  <Flex gap="5" justifyContent="flex-end">
                      <Button>Ok</Button>
                      <Button>Cancel</Button>
                  </Flex>
                  <Flex>
                      <Input type="number"></Input>
                  </Flex>
              </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}