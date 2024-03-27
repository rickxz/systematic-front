import { Button} from "@chakra-ui/react";
import { useState } from "react";
import { buttonTheme } from "./ButtonTheme";

interface IHeaderButton {
    text: string
}


export default function HeaderButton({text}: IHeaderButton) {
    const [onHover, SetOnHover] = useState(false);

    return (
            <Button color={onHover? "black ": "white"} variant="outline" sx={buttonTheme}
            onMouseEnter={() => SetOnHover(true)}
            onMouseLeave={() => SetOnHover(false)}
            >{text}</Button>
    );
}