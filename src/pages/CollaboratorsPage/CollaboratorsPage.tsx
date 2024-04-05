import { Flex, Heading } from "@chakra-ui/react";
import Header from "../Homepage/subcomponents/Header/Header";
import CollaboratorCard from "./subcomponents/collaboratorCards";
import useFecthCollaboratorsInfo from "../../hooks/fetch/useFetchCollaboratorsInfo";
import Carousel from "../../components/carousel/Carousel";

export default function CollaboratorsPage() {
  const { collabInfos } = useFecthCollaboratorsInfo("./../../../public/data/collaboratorsInfo.json");
  console.log(collabInfos);

  return (
    <Flex direction={"column"} justify={"space-between"} alignItems={"center"}>
      <Header />

      <div id="colaboradores">
        <Flex mt="150px" mb="50px" h="100%" alignItems={"center"} direction={"column"} pb={"5%"}>
          <Heading pb={"15%"}>Colaboradores</Heading>
          <Flex wrap={"wrap"} h="100%" align="center" justify="center">
            <Carousel>
              {collabInfos.map((person) => {
                return <CollaboratorCard collaborator={person} />;
              })}
            </Carousel>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
}
