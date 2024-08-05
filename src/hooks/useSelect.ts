import { useEffect, useState } from "react";
import axios from "../interceptor/interceptor";

export function useSelect(url: string, type: 'databases' | "studiesLanguages", initialState: string[] = []) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>(initialState);

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleSelectAddButtonClick = () => {
    if (selectedValue !== null) {
      if(selectedValues.indexOf(selectedValue) == -1){
        setSelectedValues((prevSelectedValues) => [...prevSelectedValues, selectedValue]);
      }
    }
  };

  const handleDeleteSelect = (index: number) => {
    setSelectedValues((prevSelectedValues) => {
      const updatedSelectedValues = [...prevSelectedValues];
      updatedSelectedValues.splice(index, 1);
      return updatedSelectedValues;
    });
  };

  useEffect(()=>{
    let data = {};
    if(type == "studiesLanguages"){
      data = {
        studiesLanguages: selectedValues 
      };
    }
    else if(type == 'databases'){
      data ={
        informationSources: selectedValues
      };
    }
    axios.put(url, data, {withCredentials: true});
  },[selectedValues])

  return { setSelectedValues, selectedValue, selectedValues, handleSelectChange, handleSelectAddButtonClick, handleDeleteSelect };
}
