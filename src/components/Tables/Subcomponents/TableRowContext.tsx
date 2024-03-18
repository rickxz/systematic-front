import { useDisclosure } from '@chakra-ui/react';
import { createContext, useState } from 'react';


const [setIstudyPainelOpen, isStudyPainelOpen] = useState(true);
export const StudyPaineContext = createContext([setIstudyPainelOpen, isStudyPainelOpen]);

const selectedPainel = "Selection Data";
export const SelectedPainelContext = createContext(selectedPainel);