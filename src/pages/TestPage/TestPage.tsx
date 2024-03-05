import DataExtractionFormItensList from "../../components/Modals/Data Extraciton Field Creation/FormModalItensList";
import DataExtractionFormItensValueList from "../../components/Modals/Data Extraciton Field Creation/FormModalItensValueList";
import DataExtractionFormNumberInterval from "../../components/Modals/Data Extraciton Field Creation/FormModalNumberInterval";

export default function TestPage() {
  return (
    <>
      <DataExtractionFormNumberInterval />
      <DataExtractionFormItensValueList />
      <DataExtractionFormItensList />
    </>
  );
}
