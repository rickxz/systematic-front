//import { Button, ButtonGroup, ButtonOptions } from "@chakra-ui/react";
//import NavButton from "../../components/Buttons/NavButton";
import { useState } from "react";
import EventButton from "../../components/Buttons/EventButton";
import AlertModal from "../../components/Modals/AlertModal";
import { AlertIcon } from "@chakra-ui/react";


export default function TestPage() {
    const[open, setOpen] = useState(false)

    return (
        <>
            <EventButton event={() => setOpen(!open)} text="Abrir modal"/>
            <AlertModal title="Teste" text="Texto de teste" color="red" icon={<AlertIcon/>} isOpen={open} setOpen={setOpen}/>
        </>
    );
}