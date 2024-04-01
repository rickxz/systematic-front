import { Flex, Heading } from "@chakra-ui/react"
import Header from "../Homepage/subcomponents/Header/Header";
import Footer from "../Homepage/subcomponents/Footer/Footer";
import CollaboratorCard from "./subcomponents/collaboratorCards";
import useFecthCollaboratorsInfo from "../../hooks/fetch/useFetchCollaboratorsInfo";

export default function CollaboratorsPage() {
    const { collabInfos } = useFecthCollaboratorsInfo("./../../../public/data/collaboratorsInfo.json");
    console.log(collabInfos);

    return (
        <Flex direction={"column"} justify={"space-between"} >
            <Header />
            <Flex mt="200px" h="100%" alignItems={"center"} direction={"column"}>
                <Heading>Colaboradores</Heading>
                <Flex wrap={"wrap"}  h="100%" align="center" justify="center">
                    {collabInfos.map((person) => {
                        return(<CollaboratorCard photo={person.photo} alt={"foto de " + person.name} name={person.name} github={person.github} /> );
                    })}
                </Flex>
                </Flex>
            <Footer />
        </Flex>
    );
}