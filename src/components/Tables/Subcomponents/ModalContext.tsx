/*import React from 'react';

interface PanelState {
  actualPainel: string;
  setActualPainel: (newPanel: string) => void;
}

const ModalContext = React.createContext<PanelState>({
  actualPainel: "SelectionData",
  setActualPainel: () => {},
});

export const ModalProvider: React.FC = ({ children }) => {
  const [panelState, setPanelState] = React.useState<PanelState>({
    actualPainel: "SelectionData",
    setActualPainel: (newPanel: string) => setPanelState({ ...panelState, actualPainel: newPanel }),
  });

  return (
    <ModalContext.Provider value={panelState}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => React.useContext(ModalContext);


*/






import React, { ReactNode, createContext , useState } from 'react';

interface ModalContextType {
    PanelState: string;
    setPanelState: React.Dispatch<React.SetStateAction<string>>;
    StudyDataButtonState: boolean;
    setStudyDataButtonState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | undefined >(undefined);

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [PanelState, setPanelState] = useState<string>("");
    const [StudyDataButtonState, setStudyDataButtonState] = useState<boolean>(true);

    return (
        <ModalContext.Provider value={{ PanelState, setPanelState, StudyDataButtonState, setStudyDataButtonState}}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;