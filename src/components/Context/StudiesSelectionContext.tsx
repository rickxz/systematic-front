import React, { ReactNode, createContext, useState } from "react";

interface AppContextType {
    isIncluded: boolean;
    setIsIncluded: React.Dispatch<React.SetStateAction<boolean>>;
    isExcluded: boolean;
    setIsExcluded: React.Dispatch<React.SetStateAction<boolean>>;
}

const StudySelection = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const StudySelectionProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [isIncluded, setIsIncluded] = useState(false);
    const [isExcluded, setIsExcluded] = useState(false);

  return (
    <StudySelection.Provider
      value={{
        isIncluded, 
        setIsIncluded,
        isExcluded,
        setIsExcluded
      }}
    >
      {children}
    </StudySelection.Provider>
  );
};

export default StudySelectionProvider;
