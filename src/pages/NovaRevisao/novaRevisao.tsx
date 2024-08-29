import { Box, FormControl } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";
import NavButton from "../../components/Buttons/NavButton";
import InputTextArea from "../../components/Inputs/InputTextArea";
import ResearcherFilter from "../UserArea/subcomponents/ResearcherFilter";
import FlexLayout from "../../components/ui/Flex/Flex";

//importin hooks
import useCreateReview from "../../hooks/reviews/useCreateReview";

export default function NovaRevisao() {
  const { description, title, collaborators, handleDescription, handleTitle, handlePost, 
    handlePut, isReturn } = useCreateReview();


  return (
    <FlexLayout navigationType="Accordion" defaultOpen={0}>
      <Header text="New Systematic Review" />

      <FormControl mt={"20px"} display={"flex"} gap={10} flexDir={"column"} w={"80%"} alignItems={"center"} ml={"2%"} >
        
        <InputText value={title} label="Title" placeholder="Enter review title" type="text" nome="text" onChange={handleTitle} labelAbove={true}/>
        
        <InputTextArea value={description} label="Description" placeholder="Enter review description" onChange={handleDescription}></InputTextArea>
        
        <ResearcherFilter />

        <Box w={"60vw"} display={"flex"} alignItems={"center"} justifyContent={"end"}>
          
          { !isReturn ? <NavButton event={handlePost} text="Create new Review" /> : <NavButton event={handlePut} text="next"/> }
        
        </Box>

      </FormControl>
    </FlexLayout>
  );
}
