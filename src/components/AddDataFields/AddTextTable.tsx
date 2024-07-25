import { FormControl, FormLabel } from "@chakra-ui/react";
import AddTextField from "./AddTextField";
import InfosTable from "../Tables/InfosTable";
import { useAddText } from "../../hooks/useAddText";
import { useDeleteText } from "../../hooks/useDeleteText";
import { formcontrol, label, formLabelStyle } from "./styles/AddTextTableStyles";
import { useEffect, useState } from "react";
import axios from "../../interceptor/interceptor";

interface AddTextTableProps {
  text: string;
  placeholder: string;
  url: string;
  id?:string
}

export default function AddTextTable({ text, placeholder, url, id }: AddTextTableProps) {
  const { AddText, handleAddText, setAddText, fetchAddText } = useAddText();
  const { handleDeleteText } = useDeleteText();

  useEffect(() => {
    async function fetchData(){
      if(id){
        const url = `http://localhost:8080/systematic-study/${id}/protocol`;
        let response = await axios.get(url, {withCredentials: true});
        console.log(response);
        switch(text){
          case 'Keywords':
            fetchAddText(response.data.content.keywords);
            break;
        }
      }
    }

    fetchData();
  }, [])
  return (
    <FormControl sx={label}>
      <FormLabel sx={formLabelStyle}>{text}</FormLabel>

      <FormControl sx={formcontrol}>
        <AddTextField url={url} onAddText={handleAddText} placeholder={placeholder} text={text}/>
        <InfosTable
          text={text}
          typeField={""}
          onDeleteAddedText={(index) => handleDeleteText(index, setAddText, url, text)}
          AddTexts={AddText}
          url={url}
        />
      </FormControl>
    </FormControl>
  );
}