import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { buttonTheme } from "./styles/ButtonTheme";
import AppContext from "../../../../../components/Context/AppContext";

interface IHeaderButton {
  text: string;
  path: string;
  type: string;
  isActive: boolean;
  setActiveButton: (type: string) => void;
}

export default function HeaderButton({ text, path, type, isActive, setActiveButton }: IHeaderButton) {
  const context = useContext(AppContext);

  function handleClick() {
    context?.SetRenderForm(type);
    setActiveButton(type);
  }

  return (
    <Link to={path}>
      <Button
        color={isActive ? "black" : "white"}
        bgColor={isActive ? "white" : "rgba(0,0,0,0)"}
        sx={buttonTheme}
        onClick={handleClick}
      >
        {text}
      </Button>
    </Link>
  );
}
