import { useState, useEffect } from "react";
import useCreateProtocol from "./reviews/useCreateProtocol";
import axios from "../interceptor/interceptor";

export function useSelect(initialState: string[] = [], context: string) {
  const { sendSelectData } = useCreateProtocol();

  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>(initialState);

  useEffect(() => {
    const id = localStorage.getItem('systematicReviewId');
    const url = `http://localhost:8080/systematic-study/${id}/protocol`;
    
    async function fetchSelectedValues(){
      const token = localStorage.getItem('accessToken');
      const options = { 
        headers: { Authentication: `Bearer ${token}` } 
      }

      if( context == 'Languages' ) {
        let response = await axios.get(url, options);
        setSelectedValues(response.data.content.studiesLanguages);
      }
    }

    fetchSelectedValues();

  }, [])

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleSelectAddButtonClick = () => {
    if (selectedValue !== null) {
      setSelectedValues((prevSelectedValues) => {
        
        let data = [ ...prevSelectedValues, selectedValue ];
        sendSelectData(data);

        return data;
      });
      setSelectedValue(null);
    }
  };

  const handleDeleteSelect = (index: number) => {
    setSelectedValues((prevSelectedValues) => {

      const updatedSelectedValues = [...prevSelectedValues];
      updatedSelectedValues.splice(index, 1);

      sendSelectData(updatedSelectedValues);

      return updatedSelectedValues;
    });
  };

  return { selectedValue, selectedValues, handleSelectChange, handleSelectAddButtonClick, handleDeleteSelect };
}