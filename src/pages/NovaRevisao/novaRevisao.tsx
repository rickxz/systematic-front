import { Box, FormControl } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";
import NavButton from "../../components/Buttons/NavButton";
import InputTextArea from "../../components/Inputs/InputTextArea";
import ResearcherFilter from "../UserArea/subcomponents/ResearcherFilter";
import FlexLayout from "../../components/ui/Flex/Flex";
import { useEffect, useState } from "react";
import useCreateRevision from "../../hooks/revisions/useCreateReview";


export default function NovaRevisao() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [isreturn, setIsReturn] = useState(false);

  useEffect(() => {

    const id = localStorage.getItem('systematicStudyId');
    if(id) setIsReturn(true);

  }, [])

  async function handleDataPut() {
    
  }

  async function handleDataPost() {
    if(title == ''){
      window.alert("O campo título é obrigatório!");
    } else {
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
        <InputText label="Title" placeholder="Enter review title" type="text" nome="text" onChange={handleTitle} labelAbove={true}/>
        <InputTextArea value={description} label="Description" placeholder="Enter review description" onChange={handleDescription}></InputTextArea>
        <ResearcherFilter />

        <Box w={"60vw"} display={"flex"} alignItems={"center"} justifyContent={"end"}>
          {title != '' ? <NavButton event={handleDataPost} text="Create new Review" /> :
          <NavButton event={handleDataPost} path={"/newRevision"} text="Create new review" />
          }
        </Box>
      </FormControl>
    </FlexLayout>
  );
}
