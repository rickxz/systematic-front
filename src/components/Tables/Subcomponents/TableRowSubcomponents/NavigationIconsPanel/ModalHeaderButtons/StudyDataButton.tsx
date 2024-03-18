import { Button, Text} from "@chakra-ui/react";
import { StudyDataIcon } from "../../../../../../../public/icons/StudyModal/StudyDataIcon";
import { useState } from "react";


export default function StudyDataButton() {
    const [isOpen, setOpen] = useState(true);
    function handleClick() {
        setOpen(!isOpen);
    }


    return(
        <Button onClick={handleClick}
         alignItems={"center"} gap="5" bg="gray"
        pl="3" pr="3" w={isOpen ? "3000px" : "20%"}>
            <StudyDataIcon /> 
            {isOpen && (
                <Text color="black"  fontSize={"sm"}>Study Data</Text>
            )}
        </Button>
    );
}