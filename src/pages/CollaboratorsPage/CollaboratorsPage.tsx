import { Flex } from "@chakra-ui/react"
import Header from "../Homepage/subcomponents/Header/Header";
import Footer from "../Homepage/subcomponents/Footer/Footer";
import CollaboratorCard from "./subcomponents/collaboratorCards";
import useFecthCollaboratorsInfo from "../../hooks/fetch/useFetchCollaboratorsInfo";

export default function CollaboratorsPage() {
    const { collabInfos } = useFecthCollaboratorsInfo("./../../../public/data/collaboratorsInfo.json");
    console.log(collabInfos);

    return (
        <Flex direction={"column"} justify={"space-between"}>
            <Header />
            <Flex wrap={"wrap"} mt="200px" h="100%" bg="gray.200" align="center" justify="center">
                {collabInfos.map((person) => {
                    return(<CollaboratorCard src={person.photo} alt={"foto de " + person.name} name={person.name} /> );
                })}
                </Flex>
            <Footer />
        </Flex>
    );
}