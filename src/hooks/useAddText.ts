import { useState } from "react";

export function useAddText() {
  const [AddText, setAddText] = useState<string[]>([]);

  const handleAddText = (newKeyword: string) => {
    setAddText((prevAddText) => [...prevAddText, newKeyword]);
  };

  return { AddText, handleAddText, setAddText };
}