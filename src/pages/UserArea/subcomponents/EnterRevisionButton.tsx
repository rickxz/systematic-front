import { Button } from "@chakra-ui/react";
import { buttonstyles } from "../styles/RevisionButtonStyles";
import Dashboard from "../../../components/ui/Dashboard/Dashboard";

interface IButtonProps {
  text: string;
}

export default function EnterRevisionButton({ /*text, event*/ }: IButtonProps) {
  return (
    <div>
      <Dashboard></Dashboard>
      {/*<Button sx={buttonstyles} onClick={event}>{text}</Button>*/}
    </div>
  );
}
