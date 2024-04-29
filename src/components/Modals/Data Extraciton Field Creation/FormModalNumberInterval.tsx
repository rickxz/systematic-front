import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import InputText from "../../Inputs/InputText";

export default function DataExtractionFormNumberInterval() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Data Extraction Field Creation</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="gray.300">
            <Flex flexDirection="column" gap="5" p="20">
              <InputText placeholder={"digite o número..."} type={"number"} nome={""} />
              <InputText placeholder={"digite o número..."} type={"number"} nome={""} />
              <InputText placeholder={"digite o número..."} type={"number"} nome={""} />
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
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
