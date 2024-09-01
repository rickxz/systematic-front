export function useDeleteText() {
  const handleDeleteText = (index: number, setAddText: React.Dispatch<React.SetStateAction<string[]>>) => {
    setAddText((prevAddText) => {
      const updatedAddText = [...prevAddText];
      updatedAddText.splice(index, 1);
      return updatedAddText;
    });
  };

  return { handleDeleteText };
}