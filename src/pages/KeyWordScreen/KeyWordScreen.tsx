import { useEffect, useState } from "react";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import DynamicTable from "../../components/Tables/DynamicTable";

export default function KeyWordScreen() {
  const [headerData, setHeaderData] = useState([]);
  const [bodyData, setBodyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/keywordData.json");
        const data = await response.json();
        if (data && data.headerData && data.bodyData) {
          setHeaderData(data.headerData);
          setBodyData(data.bodyData);
        } else {
          console.error("O arquivo JSON não possui a estrutura esperada.");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <GridLayout navigationType="Accordion">
      <Header text="Keyword Screen" />
      <DynamicTable headerData={headerData} bodyData={bodyData} type="keyword" filteredColumns={[]} />
    </GridLayout>
  );
}
