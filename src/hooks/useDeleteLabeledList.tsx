export function useDeleteLabeledList() {
    const handleDeleteLabeledList = (index: number, setAddText: React.Dispatch<React.SetStateAction<{label: string, value: number}[]>>) => {
      setAddText((prevAddText) => {
        const updatedAddText = [...prevAddText];
        updatedAddText.splice(index, 1);
        return updatedAddText;
      });
    };
  
    return { handleDeleteLabeledList };
  }