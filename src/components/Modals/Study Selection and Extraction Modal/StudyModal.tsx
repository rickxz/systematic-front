import {
    Modal,
    ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,
    ModalBody, ModalCloseButton,
    Button, Flex, useDisclosure, Box,
    Text
  } from '@chakra-ui/react';
import ReadingPriority from './Subcomponents/ReadingPrioritySelection';
import ReadingPrioritySelection from './Subcomponents/ReadingPrioritySelection';
import StatusSelection from './Subcomponents/StatusSelection';
import SNumberInput from '../../Inputs/NumberInput';

interface IStudy {
    title: string;
    status: 'Accepted' | 'Rejected' | 'Unclassified' | 'Duplicated' ;
    readingPriority: 'Very high'| 'High' | 'Low' | 'Very low';
    searchSession: 'Scopus' | 'Web of Science';
    score: number;
}

export default function StudyModal({title, status, readingPriority, searchSession, score}: IStudy) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Study Modal</Button>
        
            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <Box>{"Conteudo"}</Box>
                    </ModalBody>
                    <ModalFooter>
                        <StatusSelection />
                        <ReadingPrioritySelection/>
                        <Text>Search session: {searchSession}</Text>
                        <SNumberInput label={'Score'} value={score}/ >
                        
                    </ModalFooter>
                </ModalContent>

            </Modal>
        </>
    )
}