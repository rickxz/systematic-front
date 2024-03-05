import {
    Modal,
    ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,
    ModalBody, ModalCloseButton,
    Button, Flex, useDisclosure, Box,
    Tr, Td
  } from '@chakra-ui/react';
import StatusSelection from './Subcomponents/StatusSelection';
import ColoredIcon from '../../Icons/ColoredIcon';
interface IStudy {
    rowData: (string | number)[];
    rowIndex: number; 
    isKeyWordTable: boolean;
    getColumnVisibility: (text: string) => boolean;
    headerData: (string)[];
    title: string;
    status: 'Accepted' | 'Rejected' | 'Unclassified' | 'Duplicated' ;
    readingPriority: 'Very high'| 'High' | 'Low' | 'Very low';
    searchSession: 'Scopus' | 'Web of Science';
    score: number;
}

export default function StudyModal({rowData, rowIndex, isKeyWordTable, getColumnVisibility, headerData,
     title, status, readingPriority, searchSession, score}: IStudy) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Tr key={rowIndex} onClick={onOpen}>
              {rowData.map((cell, cellIndex) => (
                <Td
                  key={cellIndex}
                  display={isKeyWordTable ? "" : getColumnVisibility(headerData[cellIndex].toLowerCase()) ? "none" : ""}
                  textAlign={"center"}
                >
                  {cellIndex === 0 && isKeyWordTable ? <ColoredIcon frequency={rowData[2] as number} /> : cell}
                </Td>
              ))}
            </Tr>
        
            <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader color='white' bg='gray.800'>{title}</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <Box>{"Conteudo"}</Box>
                    </ModalBody>
                    <ModalFooter color='white' bg='gray.800'>
                        <Flex justify={'space-around'} flex={'1'}>
                            <StatusSelection />
                            <Button>Get full text</Button>

                            <Flex gap='10px'>
                                <Button>Discard Changes</Button>
                                <Button>Save</Button>
                                <Button>Chose</Button>
                            </Flex>
                          
                            <Flex gap='10px'>
                                <Button>Previous</Button>
                                <Button>Next</Button>
                            </Flex>
                        </Flex>

                    </ModalFooter>
                </ModalContent>

            </Modal>
        </>
    )
}