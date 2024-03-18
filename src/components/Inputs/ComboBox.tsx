import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Checkbox, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface IComboBoxProps {
  options: string[];
  selectedItems: string[];
  handleCheckboxChange: (selectedItems: string[]) => void;
}

export default function ComboBox({ options, selectedItems, handleCheckboxChange }: IComboBoxProps) {
  const [localSelectedItems, setLocalSelectedItems] = useState<string[]>(selectedItems);
  const handleItemClick = (item: string) => {
    const updatedSelection = localSelectedItems.includes(item)
      ? localSelectedItems.filter((selectedItem) => selectedItem !== item)
      : [...localSelectedItems, item];
    setLocalSelectedItems(updatedSelection);
    handleCheckboxChange(updatedSelection);
  };
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        filter options
      </MenuButton>
      <MenuList>
        {options.map((option, index) => (
          <MenuItem key={index}>
            <Checkbox defaultChecked onChange={() => handleItemClick(option.toLowerCase())}>
              {option}
            </Checkbox>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
