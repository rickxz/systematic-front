import { useEffect, useState } from "react";

interface Database {
  id: string;
  dbName: string;
  type: string;
}

const useFetchDataBases = (url: string) => {
  const [databases, setdatabase] = useState<Database[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.databases) {
          setdatabase(data.databases);
        } else {
          console.error("O arquivo JSON não possui a estrutura esperada.");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    fetchData();
  }, [url]);
  return { databases };
};
export default useFetchDataBases;
