import { useState, useEffect } from "react";

interface IStudyData {
    title: string;
    authors: string[];
    year:string;
    venue: string;
    abstract: string;
    keywords:string[];
    type:string;
}

const useFetchStudyData = (url: string) => {
    const[studyData, setStudyData] = useState<IStudyData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            if (data) {
              setStudyData(data);
            } else {
              console.error("O arquivo JSON não possui a estrutura esperada.");
            }
          } catch (error) {
            console.error("Erro ao buscar os dados:", error);
          }
        };
    
        fetchData();
      }, [url]);
      return {studyData};
}

export default useFetchStudyData;