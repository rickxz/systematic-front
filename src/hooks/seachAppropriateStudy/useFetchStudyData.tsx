import { useState, useEffect } from "react";
import { StudyInterface } from "../../../public/interfaces/IStudy";

export default function useFetchStudyData (url: string) {
  const [studyData, setStudyData] = useState<StudyInterface[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
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

  return studyData;
};
