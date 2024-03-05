import DataExtractionFormItensList from "../../components/Modals/Data Extraciton Field Creation/FormModalItensList";
import DataExtractionFormItensValueList from "../../components/Modals/Data Extraciton Field Creation/FormModalItensValueList";
import DataExtractionFormNumberInterval from "../../components/Modals/Data Extraciton Field Creation/FormModalNumberInterval";
import StudyModal from "../../components/Modals/Study Selection and Extraction Modal/TableRow";

export default function TestPage() {
  return (
    <>
      <DataExtractionFormNumberInterval />
      <DataExtractionFormItensValueList />
      <DataExtractionFormItensList />
      <StudyModal title={"Titulo de teste"} status={"Accepted"} readingPriority={"High"} searchSession={"Scopus"} score={500} />
    </>
  );
}
