import { Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { buttonTheme } from "./styles/ButtonTheme";

interface IHeaderButton {
    text: string,
    path: string,
}


export default function HeaderButton({text, path}: IHeaderButton) {
    const [onHover, SetOnHover] = useState(false);

    return (
        <Link to={path}>
            <Button color={onHover? "black ": "white"} variant="outline" sx={buttonTheme}
            onMouseEnter={() => SetOnHover(true)}
            onMouseLeave={() => SetOnHover(false)}
            >{text}</Button>
        </Link>
    );
}