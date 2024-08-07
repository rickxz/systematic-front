import { FormControl, FormLabel } from '@chakra-ui/react';
import React from 'react'
import { useAddText } from '../../../../hooks/useAddText';
import { useDeleteText } from '../../../../hooks/useDeleteText';
import { text } from '../../../../pages/UserArea/styles/CardInfosStyle';
import AddTextField from '../../../AddDataFields/AddTextField';
import { label, formLabelStyle } from '../../../AddDataFields/styles/AddTextTableStyles';
import { formcontrol } from '../../../Inputs/styles/SelectInputStyles';
import InfosTable from '../../InfosTable';

interface Props{
    placeholder: string,
    url: string,
    text: string
}

export const AddPickListTable = ({placeholder, text, url}: Props) => {
    const { AddText, handleAddText, setAddText, fetchAddText } = useAddText();
    const { handleDeleteText } = useDeleteText();
    
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
