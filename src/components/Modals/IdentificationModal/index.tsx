import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, FormControl, FormLabel, Input, Textarea, Box, IconButton, Flex } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

interface IdentificationModalProps {
    show: (value: boolean) => void;
}

function IdentificationModal({ show } : IdentificationModalProps) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [referenceFiles, setReferenceFiles] = useState<string[]>([]);

    useEffect(() => {
        onOpen();
    }, []);

    function close() {
        show(false);
        onClose();
    }

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    function addReferenceFile() {
        setReferenceFiles([...referenceFiles, `File ${referenceFiles.length + 1}`]);
    }

    function removeReferenceFile(index: number) {
        setReferenceFiles(referenceFiles.filter((_, i) => i !== index));
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color={"#263C56"}>
                    New Search Session
                    <ModalCloseButton onClick={close}/>
                </ModalHeader>
                <ModalBody>
                    <FormControl mb={4}>
                        <FormLabel>Date</FormLabel>
                        <Input type="date" defaultValue={getCurrentDate()} />
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel>Search String</FormLabel>
                        <Textarea placeholder="Enter your search string" />
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel>Comments</FormLabel>
                        <Textarea placeholder="Add comments" />
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel>Reference Files</FormLabel>
                        {referenceFiles.map((file, index) => (
                            <Flex key={index} alignItems="center" mb={2}>
                                <Box flex="1" border="1px" borderRadius="md" p={2}>
                                    {file}
                                </Box>
                                <IconButton
                                    aria-label="Remove file"
                                    icon={<DeleteIcon />}
                                    ml={2}
                                    onClick={() => removeReferenceFile(index)}
                                />
                            </Flex>
                        ))}
                        <IconButton
                            aria-label="Add file"
                            icon={<AddIcon />}
                            onClick={addReferenceFile}
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={close}
                        backgroundColor={"#263C56"}
                        color={"#EBF0F3"}
                        boxShadow="sm"
                        _hover={{ bg: "#2A4A6D", boxShadow: "md" }}
                    >
                        Create</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default IdentificationModal