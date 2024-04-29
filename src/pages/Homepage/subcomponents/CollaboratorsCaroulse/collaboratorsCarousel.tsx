import { Button, Flex, Heading } from "@chakra-ui/react";
import useFecthCollaboratorsInfo from "../../../../hooks/fetch/useFetchCollaboratorsInfo";
import Carousel from "../../../../components/carousel/Carousel";
import CollaboratorCard from "../../../CollaboratorsPage/subcomponents/collaboratorCards";
import Header from "../Header/Header";
import shuffleElements from "../../../../hooks/shuffleElements/shuffleElements";
import { Link } from "react-router-dom";

export default function CollaboratorsCarousel() {
  const { collabInfos } = useFecthCollaboratorsInfo("./../../../public/data/collaboratorsInfo.json");
  const collabInfosShuffled = shuffleElements(collabInfos);
  [];

  return (
    <Flex direction={"column"} justify={"space-between"} alignItems={"center"}>
      <Header />

      <div id="colaboradores">
        <Flex mt="150px" mb="50px" h="100%" alignItems={"center"} direction={"column"} pb={"5%"}>
          <Heading pb={"15%"}>Colaboradores</Heading>
          <Flex wrap={"wrap"} h="100%" align="center" justify="center">
            <Carousel>
              {collabInfosShuffled.map((person) => {
                return <CollaboratorCard collaborator={person} />;
              })}
            </Carousel>
          </Flex>
          <Button bgColor={"gray"} color={"white"}>
            <Link to={"/collaborators"}>Vejo todos os colaboradores</Link>
          </Button>
        </Flex>
      </div>
    </Flex>
  );
}
