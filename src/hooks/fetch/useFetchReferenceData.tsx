import { useEffect, useState } from "react";

const useFetchReferenceData = (url: string) => {
    const [reference, setReference] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data) {
                    setReference(data);
                } else {
                    console.error("O arquivo JSON não possui dados");
                }
            } catch (error) {
                console.error("Erro ao buscar dados: ", error);
            }
        };

        fetchData();
    }, [url]);

    return reference ;
};

export default useFetchReferenceData;