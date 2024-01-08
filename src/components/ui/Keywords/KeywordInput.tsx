import { Button } from "@chakra-ui/react";
import TextAreaInput from "../../Inputs/InputTextArea";

interface IKeywordInputProps{
    event: () => void;
}

export default function KeywordInput({event}: IKeywordInputProps) {
    return (
        <>
            <TextAreaInput label='' placeholder='Informe a palavra-chave'></TextAreaInput>
            <Button onClick={event}>Add</Button>
        </>
    );
}