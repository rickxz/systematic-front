import { Button } from "@chakra-ui/react";
import { buttonstyles } from "../styles/RevisionButtonStyles";
import Dashboard from "../../../components/ui/Dashboard/Dashboard";

interface IButtonProps {
  text: string;
}

export default function EnterRevisionButton({ text }: IButtonProps) {
  return (
    <div>
      <Dashboard></Dashboard>
      <Button sx={buttonstyles}>{text}</Button>
    </div>
  );
}
