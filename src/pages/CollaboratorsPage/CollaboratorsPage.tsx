import { Flex, Heading } from "@chakra-ui/react";
import Header from "../Homepage/subcomponents/Header/Header";
import CollaboratorCard from "./subcomponents/collaboratorCards";
import useFecthCollaboratorsInfo from "../../hooks/fetch/useFetchCollaboratorsInfo";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../Homepage/subcomponents/Footer/Footer";

export default function CollaboratorsPage() {
  const { collabInfos } = useFecthCollaboratorsInfo("./../../../public/data/collaboratorsInfo.json");
  console.log(collabInfos);

  return (
    <Flex direction={"column"} justify={"space-between"} >
            <Header />
            <Flex mt="150px" mb="50px"  h="100%" alignItems={"center"} direction={"column"}>
                <Heading>Colaboradores</Heading>
                <Flex wrap={"wrap"}  h="100%" align="center" justify="center">
                    {collabInfos.map((person) => {
                        return(<CollaboratorCard collaborator={person} /> );
                    })}
                </Flex>
                </Flex>
            <Footer />
        </Flex>
  );
}
