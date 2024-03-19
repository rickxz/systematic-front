import { useState } from "react";

const useComboBoxSelection = (
  initialSelectedItems: string[],
  handleCheckboxChange: (selectedItems: string[]) => void
) => {
  const [localSelectedItems, setLocalSelectedItems] = useState<string[]>(initialSelectedItems);

  const handleItemClick = (item: string) => {
    const updatedSelection = localSelectedItems.includes(item)
      ? localSelectedItems.filter((selectedItem) => selectedItem !== item)
      : [...localSelectedItems, item];
    setLocalSelectedItems(updatedSelection);
    handleCheckboxChange(updatedSelection);
  };

  return { handleItemClick, localSelectedItems };
};

export default useComboBoxSelection;
