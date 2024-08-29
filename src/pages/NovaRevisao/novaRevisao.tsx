import { Box, FormControl } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";
import NavButton from "../../components/Buttons/NavButton";
import InputTextArea from "../../components/Inputs/InputTextArea";
import ResearcherFilter from "../UserArea/subcomponents/ResearcherFilter";
import FlexLayout from "../../components/ui/Flex/Flex";

//importin hooks
import { useEffect, useState } from "react";
import useCreateRevision from "../../hooks/reviews/useCreateReviewPost";
import useCreateReviewPut from "../../hooks/reviews/useCreateReviewPut";
import useSystematicStudyInfo from "../../hooks/reviews/useSystematicStudyInfo";

export default function NovaRevisao() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [isReturn, setIsReturn] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {

    async function fetch() {

      const id = localStorage.getItem('systematicStudyId');

      if(id) {
        setIsReturn(true);
        setId(id);

        const reviewData = await useSystematicStudyInfo(id);

        setTitle(reviewData.title);
        setDescription(reviewData.description);
        console.log(reviewData);
      }
      
    }

    fetch();

  }, [])

  async function handleDataPut() {
    if(title == ''){
      window.alert("O campo título é obrigatório!");
    } 

    else {
      if(id) {
        await useCreateReviewPut({title, description, id});
      }

      sessionStorage.setItem("firstAccess", "false");
      window.location.href = `http://localhost:5173/#/newRevision/protocol/${id}`;
    
    }
  }

  async function handleDataPost() {
    if(title == ''){
      window.alert("O campo título é obrigatório!");
    } 

    else {
      const id = await useCreateRevision({title, description, collaborators});

      localStorage.setItem("systematicStudyId", id);
      sessionStorage.setItem("firstAccess", "false");

      window.location.href = `http://localhost:5173/#/newRevision/protocol/${id}`;
    }
  }

  function handleTitle(e: React.ChangeEvent<HTMLInputElement>){
    setTitle(e.target.value);
  }

  function handleDescription(e: React.ChangeEvent<HTMLTextAreaElement>){
    setDescription(e.target.value);
  }


  return (
    <FlexLayout navigationType="Accordion" defaultOpen={0}>
      <Header text="New Systematic Review" />

      <FormControl mt={"20px"} display={"flex"} gap={10} flexDir={"column"} w={"80%"} alignItems={"center"} ml={"2%"} >
        <InputText value={title} label="Title" placeholder="Enter review title" type="text" nome="text" onChange={handleTitle} labelAbove={true}/>
        <InputTextArea value={description} label="Description" placeholder="Enter review description" onChange={handleDescription}></InputTextArea>
        <ResearcherFilter />

        <Box w={"60vw"} display={"flex"} alignItems={"center"} justifyContent={"end"}>
          
          { !isReturn ? <NavButton event={handleDataPost} text="Create new Review" /> : <NavButton event={handleDataPut} text="next"/> }
        
        </Box>
      </FormControl>
    </FlexLayout>
  );
}
