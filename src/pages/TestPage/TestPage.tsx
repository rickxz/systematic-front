//import { Button, ButtonGroup, ButtonOptions } from "@chakra-ui/react";
//import NavButton from "../../components/Buttons/NavButton";
import { Flex } from "@chakra-ui/react";

import SystemToast from "../../components/Toasts/SystemToast";
import DataExtractionFormNumberInterval from "../../components/Modals/Data Extraciton Field Creation/FormModalNumberInterval";
import DataExtractionFormItensList from "../../components/Modals/Data Extraciton Field Creation/FormModalItensList";
import DataExtractionFormItensValueList from "../../components/Modals/Data Extraciton Field Creation/FormModalItensValueList";


export default function TestPage() {

    return (
        <>
            <Flex justify="space-around" gap="5" flexWrap="wrap">
                <SystemToast title="Test Title" description="test description" status="success" isClosable={true}/>
                <DataExtractionFormNumberInterval/>
                <DataExtractionFormItensList/>
                <DataExtractionFormItensValueList/>
            </Flex>

        </>
    );
}