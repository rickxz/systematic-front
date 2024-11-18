import { ChevronDownIcon } from "@chakra-ui/icons";
import useComboBoxSelection from "../../hooks/useComboBoxSelection";
import { Button, Checkbox, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface IComboBoxProps {
  text: string;
  options: string[];
  isDisabled: boolean;
}

export default function ComboBox({ text, options, isDisabled }: IComboBoxProps) {
  const { handleIncludeItemClick, handleExcludeItemClick } = useComboBoxSelection();

  return (
    <Menu closeOnSelect={false}>

      <MenuButton bgColor={"#303D50"} color={"#9DB2BF"} borderRadius={"3px"} as={Button} rightIcon={<ChevronDownIcon />} w={"50%"}>
        {text}
      </MenuButton>

      <MenuList>
        {options.map((option, index) => (
          <MenuItem key={index}>

            { text == 'Include' ?
            <Checkbox isDisabled={isDisabled} onChange={(e) => handleIncludeItemClick(e.target.checked)}>
              {option}
            </Checkbox> 
              : 
            <Checkbox isDisabled={isDisabled} onChange={(e) => handleExcludeItemClick(e.target.checked)}>
              {option}
            </Checkbox>
            }

          </MenuItem>
        ))}
      </MenuList>

    </Menu>
  );
}
