import { useEffect, useState } from "react";

interface ISelectionData {
    inclusionCriteria: string[];
    exclusionCriteria: string[];
}

const useFecthSelectionData = (url: string) => {
    const [selectionData, SetSelectionData] = useState<ISelectionData[]|[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data) {
                    SetSelectionData(data);
                } else {
                    console.error("O arquivo JSON não possui dados");
                }
            } catch (error) {
                console.error("Erro ao buscar dados: ", error);
            }
        };

        fetchData();
    }, [url]);

    return { selectionData }
};

export default useFecthSelectionData;