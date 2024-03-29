import { useEffect, useState } from "react";

const useFecthCollaboratorsInfo = (url: string) => {
    const [collabInfos, SetCollabInfos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data) {
                    SetCollabInfos(data);
                } else {
                    console.error("O arquivo JSON não possui dados");
                }
            } catch (error) {
                console.error("Erro ao buscar dados: ", error);
            }
        };

        fetchData();
    }, [url]);

    return { collabInfos }
};

export default useFecthCollaboratorsInfo;