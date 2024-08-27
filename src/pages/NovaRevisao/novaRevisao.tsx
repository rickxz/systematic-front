import { Box, FormControl } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";
import NavButton from "../../components/Buttons/NavButton";
import InputTextArea from "../../components/Inputs/InputTextArea";
import ResearcherFilter from "../UserArea/subcomponents/ResearcherFilter";
import FlexLayout from "../../components/ui/Flex/Flex";
import { useEffect, useState } from "react";
import useCreateRevision from "../../hooks/revisions/useCreateReview";
import useEditRevision from "../../hooks/revisions/useEditReview";
import { useParams } from "react-router-dom";
import useFetchSystematicReview from "../../hooks/fetch/useFetchSystematicReview";
import axios from "axios";

export default function NovaRevisao() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const { id = "" } = useParams();

  useEffect( () => {
    if(id) {
        async function fetchReviewData() {
            try {
                const accessToken = localStorage.getItem("accessToken");
                let options = {
                    headers: { Authorization: `Bearer ${accessToken}` }
                }
                const url = `http://localhost:8080/api/v1/systematic-study/${id}`;
                const response = await axios.get(url, options);
                console.log(response.data.content);

                setTitle(response.data.content.title);
                setDescription(response.data.content.description)
            } catch (error) {
                console.log("Error fetching systematic review infos:", error);
            }
        }

        fetchReviewData();
    }
    else console.log("creation")
  }, [])

  function saveDataAndNavegate(idInUse: string){
    localStorage.setItem("systematicStudyId", idInUse);
    window.location.href = `http://localhost:5173/#/newRevision/protocol/${idInUse}`;
  }
  async function handleEdition() {
    if(title == ''){
      window.alert("O campo título é obrigatório!");
    } else {

      const response = await useEditRevision({title, description, id});
      console.log(response)
      saveDataAndNavegate(id)
    }
  }
  async function handleCreation(){
    if(title == ''){
      window.alert("O campo título é obrigatório!");
    } else {
      const idOfCreation = await useCreateRevision({title, description, collaborators});
      saveDataAndNavegate(idOfCreation);
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
          {id ? <NavButton event={handleEdition} text="Save" /> :
          <NavButton event={handleCreation} path={"/newRevision"} text="Create new review" />
          }
        </Box>
      </FormControl>
    </FlexLayout>
  );
}
