import { useEffect, useState } from "react";

const useFetchQualityFormData = (url: string) => {
    const [qualityForm, setQualityForm] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data) {
                    setQualityForm(data);
                } else {
                    console.error("O arquivo JSON não possui dados");
                }
            } catch (error) {
                console.error("Erro ao buscar dados: ", error);
            }
        };

        fetchData();
    }, [url]);

    return qualityForm ;
};

export default useFetchQualityFormData;