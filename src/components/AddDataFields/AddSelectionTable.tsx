import React from 'react';
import { FormControl, FormLabel } from "@chakra-ui/react";
import SelectInput from "../Inputs/SelectInput";
import InfosTable from "../Tables/InfosTable";
import EventButton from "../Buttons/EventButton";
import { useSelect } from "../../hooks/useSelect";
import { conteiner, formcontrol, formLabelStyle } from "./styles/AddSelectionStyles";

interface AddSelectTableProps {
  label?: string;
  options: string[];
  placeholder: string;
  typeField: string;
  url: string;
  type: "databases" | 'studiesLanguages';
}

export default function AddSelectTable({ label, options, url, type, placeholder }: AddSelectTableProps) {
  const { selectedValue, selectedValues, handleSelectChange, handleSelectAddButtonClick, handleDeleteSelect } = useSelect(url, type);

  return (
    <FormControl sx={conteiner} alignContent={"center"}>
      <FormLabel sx={formLabelStyle}>{label}</FormLabel>
        <FormControl sx={formcontrol}>
          <SelectInput
            values={options}
            names={options}
            onSelect={handleSelectChange}
            selectedValue={selectedValue}
            placeholder={placeholder}
            page={"protocol"}
          />
          <EventButton text="+" event={handleSelectAddButtonClick} w={"1%"} />
        </FormControl>
      <InfosTable
        typeField="select"
        onDeleteAddedText={(index) => handleDeleteSelect(index)}
        AddTexts={selectedValues}
        url={url}
      />
    </FormControl>
  );
}