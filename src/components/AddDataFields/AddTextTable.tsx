import { FormControl, FormLabel } from "@chakra-ui/react";
import AddTextField from "./AddTextField";
import InfosTable from "../Tables/InfosTable";
import { useAddText } from "../../hooks/useAddText";
import { useDeleteText } from "../../hooks/useDeleteText";
import { formcontrol, label, formLabelStyle } from "./styles/AddTextTableStyles";
import { useEffect } from "react";
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
        const accessToken = localStorage.getItem('accessToken');
        let options = {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
        
        const url = `http://localhost:8080/systematic-study/${id}/protocol`;
        let response = await axios.get(url, options);
        
        if(text == 'Keywords'){
          fetchAddText(response.data.content.keywords);
        } 
        
        else if(text == "Research Questions"){
          fetchAddText(response.data.content.researchQuestions);
        } 
        
        else if(text == 'Inclusion criteria'){
            let array: {description: string, type: string}[] = response.data.content.eligibilityCriteria;
            array = array.filter(item => item.type === "INCLUSION");
            
            const criterias: string[] = array.map(item => item.description);
            fetchAddText(criterias);
        } 
        
        else if (text = 'Exclusion criteria'){
            let exclusionArray: {description: string, type: string}[] = response.data.content.eligibilityCriteria;
            exclusionArray = exclusionArray.filter(item => item.type === "EXCLUSION");
            
            const exclusionCriterias: string[] = exclusionArray.map(item => item.description);
            fetchAddText(exclusionCriterias);
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