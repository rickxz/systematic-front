import { IoLibrary } from "react-icons/io5";

interface ILogo {
    type: string,
}

export default function Logo({type}: ILogo) {
    return(
        <IoLibrary color="white" size={type == "homepage" ? "40" : "250px"}/>
    );
}