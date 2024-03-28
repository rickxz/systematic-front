import { Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { buttonTheme } from "./styles/ButtonTheme";
import AppContext from "../../../../../components/Context/AppContext";

interface IHeaderButton {
    text: string,
    path: string,
    type: string,
}


export default function HeaderButton({text, path, type}: IHeaderButton) {
    const [onHover, SetOnHover] = useState(false);
    const context = useContext(AppContext);
    function handleClick() {
        if (type == "Login") context?.SetRenderForm("Login");
        if (type == "Register") context?.SetRenderForm("Register");

    }

    return (
        <Link to={path}>
            <Button color={onHover? "black ": "white"} variant="outline" sx={buttonTheme}
            onMouseEnter={() => SetOnHover(true)}
            onMouseLeave={() => SetOnHover(false)}
            onClick={handleClick}
            >{text}</Button>
        </Link>
    );
}