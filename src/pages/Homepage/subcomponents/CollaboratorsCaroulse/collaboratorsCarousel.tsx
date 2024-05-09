import { Button, Flex, Heading } from "@chakra-ui/react";
import useFecthCollaboratorsInfo from "../../../../hooks/fetch/useFetchCollaboratorsInfo";
import Carousel from "../../../../components/carousel/Carousel";
import CollaboratorCard from "../../../CollaboratorsPage/subcomponents/collaboratorCards";
import shuffleElements from "../../../../hooks/shuffleElements/shuffleElements";
import { Link } from "react-router-dom";

export default function CollaboratorsCarousel() {
  const { collabInfos } = useFecthCollaboratorsInfo("/data/collaboratorsInfo.json");
  const collabInfosShuffled = shuffleElements(collabInfos);
  [];

  return (
    <Flex id="colaboradores" minHeight={"100vh"} direction={"column"} justify={"center"} alignItems={"center"}>

      <Flex h="100%" alignItems={"center"} direction={"column"}>

        <Heading mb={"1.5em"}>Colaboradores</Heading>

        <Flex wrap={"wrap"} h="100%" align="center" justify="center">

          <Carousel>
            {collabInfosShuffled.map((person) => {
              return <CollaboratorCard collaborator={person} />;
            })}
          </Carousel>

        </Flex>

        <Button borderRadius={"3px"} bgColor={"gray"} color={"white"}>

          <Link to={"/collaborators"} target="_blank">
            Veja todos os colaboradores
          </Link>

        </Button>

      </Flex>

    </Flex>
  );
}
