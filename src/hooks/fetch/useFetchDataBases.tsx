import { useEffect, useState } from "react";
import axios from "../../interceptor/interceptor";

const useFetchDataBases = (url: string) => {
  const [databases, setdatabase] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(url, {withCredentials: true});
        setdatabase(response.data.content.informationSources);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    fetchData();
  }, [url]);
  console.log(databases);
  return { databases };
};
export default useFetchDataBases;
