import { ChevronDownIcon } from "@chakra-ui/icons";
import useComboBoxSelection from "../../hooks/useComboBoxSelection";
import { Button, Checkbox, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface IComboBoxProps {
  text: string;
  options: string[];
  selectedItems: string[];
  handleCheckboxChange: (selectedItems: string[]) => void;
}

export default function ComboBox({ text, options, selectedItems, handleCheckboxChange }: IComboBoxProps) {
  const { handleItemClick } = useComboBoxSelection(selectedItems, handleCheckboxChange);

  return (
    <Menu closeOnSelect={false}>

      <MenuButton bgColor={"#303D50"} color={"#9DB2BF"} borderRadius={"3px"} as={Button} rightIcon={<ChevronDownIcon />} w={"40%"}>
        {text}
      </MenuButton>

      <MenuList>
        {options.map((option, index) => (
          <MenuItem key={index}>
            <Checkbox onChange={() => handleItemClick(option.toLowerCase())}>
              {option}
            </Checkbox>
          </MenuItem>
        ))}
      </MenuList>

    </Menu>
  );
}
