import { Flex } from "@chakra-ui/react"
import Header from "../Homepage/subcomponents/Header/Header";
import Footer from "../Homepage/subcomponents/Footer/Footer";
import CollaboratorCard from "./subcomponents/collaboratorCards";
import useFecthCollaboratorsInfo from "../../hooks/fetch/useFetchCollaboratorsInfo";

export default function CollaboratorsPage() {
    const collabsInfos = useFecthCollaboratorsInfo("/data/collaborationInfo.json");
    console.log(collabsInfos);

    return (
        <Flex direction={"column"} justify={"space-between"}>
            <Header />
            <Flex h="100vh" bg="gray.200" align="center" justify="center">
                    <CollaboratorCard src="" alt="" name=""/> 
            </Flex>
            <Footer />
        </Flex>
    );
}