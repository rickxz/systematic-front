import { useState } from "react";

export function useAddLabeledList() {
    const [AddText, setAddText] = useState<{label: string,  value: number}[]>([]);

    const fetchAddText = async (array: {label: string,  value: number}[]) => {
    setAddText(array);
    }

    const handleAddText = (newKeyword: {label: string,  value: number}) => {
    setAddText((prevAddText) => [...prevAddText, newKeyword]);
    };

    return { AddText, handleAddText, setAddText, fetchAddText }
}