import { Button, Checkbox, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";

interface IComboBoxProps {
  options: string[];
  handleComboBoxChange?: (selectedItems: string[]) => void;
}

export default function ComboBox({ options, handleComboBoxChange }: IComboBoxProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>(options);

  const handleCheckboxChange = (option: string) => {
    const updatedSelection = selectedItems.includes(option)
      ? selectedItems.filter((item) => item !== option)
      : [...selectedItems, option];

    setSelectedItems(updatedSelection);
    if (handleComboBoxChange) {
      handleComboBoxChange(updatedSelection);
    }
  };

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button}>filter options</MenuButton>
      <MenuList>
        {options.map((option, index) => (
          <MenuItem key={index}>
            <Checkbox defaultChecked={selectedItems.includes(option)} onChange={() => handleCheckboxChange(option)}>
              {option}
            </Checkbox>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
