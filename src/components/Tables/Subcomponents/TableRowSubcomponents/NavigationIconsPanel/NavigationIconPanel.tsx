import { Flex } from "@chakra-ui/react";
import StudyDataButton from "./ModalHeaderButtons/StudyDataButton";
import SelectionDataButton from "./ModalHeaderButtons/SelectionStudiesButton";
import DataExtractionFormButton from "./ModalHeaderButtons/DataExtractionFormButton";
import SimilarStudiesButton from "./ModalHeaderButtons/SimilarStudiesButton";
import QualityFormButton from "./ModalHeaderButtons/QualityFormButton";
import ReferencesButton from "./ModalHeaderButtons/ReferencesButton";

export default function NavegationIconsPanel() {
    return (
        <>
            <Flex w="100%" h='10' gap="5">
                <Flex bg="white" w="30%" h='100%'>
                    <StudyDataButton/>
                </Flex>
                <Flex w="70%" h='100%' gap="3">
                    <SelectionDataButton />
                    <DataExtractionFormButton/>
                    <SimilarStudiesButton/>
                    <QualityFormButton/>
                    <ReferencesButton/>
                </Flex>
            </Flex>
        </>
    );
}