import { useDisclosure } from '@chakra-ui/react';
import { createContext, useState } from 'react';

const { isOpen, onOpen, onClose } = useDisclosure();
export const StudyDataButtonContext = createContext({isOpen, onOpen, onClose});

const [setIstudyPainelOpen, isStudyPainelOpen] = useState(true);
export const StudyPaineContext = createContext([setIstudyPainelOpen, isStudyPainelOpen]);

const selectedPainel = "Selection Data";
export const SelectedPainelContext = createContext(selectedPainel);