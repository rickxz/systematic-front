import { useState } from "react";

export function useAddCriteria() {
  const [AddText, setAddText] = useState<{ description: string, type: "INCLUSION" | "EXCLUSION" }[]>([]);

  const handleAddText = (newCriteria: { description: string, type: "INCLUSION" | "EXCLUSION" }) => {
    setAddText((prevAddText) => [...prevAddText, newCriteria]);
  };

  const handleDeleteText = (index: number) => {
    setAddText((prevAddText) => prevAddText.filter((_, i) => i !== index));
  };

  return { AddText, handleAddText, handleDeleteText, setAddText };
}
