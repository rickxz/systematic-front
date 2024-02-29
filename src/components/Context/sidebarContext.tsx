import React, { ReactNode, createContext , useState } from 'react';

interface SidebarContextType {
    button: string;
    setButton: React.Dispatch<React.SetStateAction<string>>;
    item: string;
    setItem: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarContext = createContext<SidebarContextType | undefined >(undefined);

interface SidebarProviderProps {
    children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
    const [button, setButton] = useState<string>("");
    const [item, setItem] = useState<string>("");

    return (
        <SidebarContext.Provider value={{ button, setButton, item, setItem }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarContext;