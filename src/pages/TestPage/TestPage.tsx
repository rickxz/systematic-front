import { Flex } from "@chakra-ui/react";
import DataExtractionFormItensList from "../../components/Modals/Data Extraciton Field Creation/FormModalItensList";
import DataExtractionFormItensValueList from "../../components/Modals/Data Extraciton Field Creation/FormModalItensValueList";
import DataExtractionFormNumberInterval from "../../components/Modals/Data Extraciton Field Creation/FormModalNumberInterval";
import { DataExtractionFormIcon } from "../../../public/icons/StudyModal/DataExtractionFormIcon";
import { QualityFormIcon } from "../../../public/icons/StudyModal/QualityFormIcon";
import { ReferencesIcon } from "../../../public/icons/StudyModal/ReferencesIcon";
import { SelectionDataIcon } from "../../../public/icons//StudyModal/SelectionDataIcon";
import { SimilarStudiesIcon } from "../../../public/icons/StudyModal/SimilarStudiesIcon";
import { StudyDataIcon } from "../../../public/icons/StudyModal/StudyDataIcon";

export default function TestPage() {
  return (
    <>
      <Flex p="50px">
        <DataExtractionFormNumberInterval />
        <DataExtractionFormItensValueList />
        <DataExtractionFormItensList />
      </Flex>

      <Flex p="50px">
        <DataExtractionFormIcon />
        <QualityFormIcon />
        <ReferencesIcon />
        <SelectionDataIcon />
        <SimilarStudiesIcon />
        <StudyDataIcon />
      </Flex>
    </>
  );
}
