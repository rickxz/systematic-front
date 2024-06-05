import React, { ReactNode, createContext, useState } from "react";
import { StudyInterface } from "../../../public/interfaces/IStudy";
import showFirstPossibleStudy from "../../hooks/seachAppropriateStudy/showFirstPossibleStudy";
import { ExcutionFaseEnum } from "../../../public/enums/ExcutionFaseEnum";

interface AppContextType {
  button: string;
  setButton: React.Dispatch<React.SetStateAction<string>>;
  item: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
  renderForm: string;
  setRenderForm: React.Dispatch<React.SetStateAction<string>>;
  activeButton: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
  selectionStudy: StudyInterface | undefined;
  setSelectionStudy: React.Dispatch<React.SetStateAction<StudyInterface | undefined>>;
  extractionStudy: StudyInterface | undefined;
  setExtractionStudy: React.Dispatch<React.SetStateAction<StudyInterface | undefined>>;
  sortedStudies: StudyInterface[] | undefined;
  setSortedStudies: React.Dispatch<React.SetStateAction<StudyInterface[] | undefined>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [button, setButton] = useState<string>("");
  const [item, setItem] = useState<string>("");
  const [renderForm, setRenderForm] = useState<string>("Login");
  const [selectionStudy, setSelectionStudy] = useState<StudyInterface | undefined>(
    showFirstPossibleStudy(ExcutionFaseEnum.SELECTION)
  );
  const [extractionStudy, setExtractionStudy] = useState<StudyInterface | undefined>(
    showFirstPossibleStudy(ExcutionFaseEnum.EXTRACTION)
  );
  const [activeButton, setActiveButton] = useState<string>("");
  const [sortedStudies, setSortedStudies] = useState<StudyInterface[]>();

  return (
    <AppContext.Provider
      value={{
        button,
        setButton,
        item,
        setItem,
        renderForm,
        setRenderForm,
        selectionStudy,
        setSelectionStudy,
        extractionStudy,
        setExtractionStudy,
        activeButton,
        setActiveButton,
        sortedStudies,
        setSortedStudies
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
