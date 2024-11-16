import React, { ReactNode, createContext, useState } from "react";
import ArticleInterface from "../../../public/interfaces/ArticleInterface";
import useGetAllReviewArticles from "../../hooks/useGetAllReviewArticles";

interface AppContextType {
    isIncluded: boolean;
    setIsIncluded: React.Dispatch<React.SetStateAction<boolean>>;
    isExcluded: boolean;
    setIsExcluded: React.Dispatch<React.SetStateAction<boolean>>;
    articles: ArticleInterface[];
}

const StudySelectionContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const StudySelectionProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [isIncluded, setIsIncluded] = useState(false);
    const [isExcluded, setIsExcluded] = useState(false);
    const articles = useGetAllReviewArticles() as ArticleInterface[];

  return (
    <StudySelectionContext.Provider
      value={{
        isIncluded, 
        setIsIncluded,
        isExcluded,
        setIsExcluded,
        articles
      }}
    >
      {children}
    </StudySelectionContext.Provider>
  );
};

export default StudySelectionContext;
