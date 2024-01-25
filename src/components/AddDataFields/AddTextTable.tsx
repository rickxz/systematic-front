import { FormControl, FormLabel } from "@chakra-ui/react";
import AddTextField from "./AddTextField";
import InfosTable from "../Tables/ProtocolAddTable";
import { useAddText } from "../../hooks/useAddText";
import { useDeleteText } from "../../hooks/useDeleteText";

interface AddTextTableProps {
  text: string;
  placeholder: string;
}

export default function AddTextTable({ text, placeholder }: AddTextTableProps) {
  const { AddText, handleAddText, setAddText } = useAddText();
  const { handleDeleteText } = useDeleteText();
  return (
    <FormControl display={"flex"} flexDir={"column"}>
      <FormLabel>{text}</FormLabel>

      <FormControl display={"flex"} flexDir={"row"} columnGap={"5%"}>
        <AddTextField onAddText={handleAddText} text={placeholder} />
        <InfosTable onDeleteAddedText={(index) => handleDeleteText(index, setAddText)} AddTexts={AddText} />
      </FormControl>
    </FormControl>
  );
}
