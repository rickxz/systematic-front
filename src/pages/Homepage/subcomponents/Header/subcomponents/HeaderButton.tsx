import { Button} from "@chakra-ui/react";
import { useState } from "react";
//import { buttonTheme } from "./ButtonTheme";

interface IHeaderButton {
    text: string
}


export default function HeaderButton({text}: IHeaderButton) {
    const [onHover, SetOnHover] = useState(false);

    return (
            <Button color={onHover? "black ": "white"} variant="outline"
            onMouseEnter={() => SetOnHover(true)}
            onMouseLeave={() => SetOnHover(false)}
            size='md'
            pt="10px"
            pb="10px"
            pl="50px"
            pr="50px"
            border='2px' 
            borderRadius="50px"
            >{text}</Button>
    );
}