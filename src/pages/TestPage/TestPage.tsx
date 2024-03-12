import { Flex } from "@chakra-ui/react";
import DataExtractionFormItensList from "../../components/Modals/Data Extraciton Field Creation/FormModalItensList";
import DataExtractionFormItensValueList from "../../components/Modals/Data Extraciton Field Creation/FormModalItensValueList";
import DataExtractionFormNumberInterval from "../../components/Modals/Data Extraciton Field Creation/FormModalNumberInterval";

export default function TestPage() {
  return (
    <>
    <Flex p='50px'>
      <DataExtractionFormNumberInterval />
      <DataExtractionFormItensValueList />
      <DataExtractionFormItensList />
    </Flex>

    <Flex p='50px'>
      ola
    </Flex>
      
    </>
  );
}
