import { Button } from "@chakra-ui/react";
import Dashboard from "../../../components/ui/Dashboard/Dashboard";

interface IButtonProps {
  text: string;
}
export default function EnterRevisionButton({ text }: IButtonProps) {
  return (
    <div>
      <Dashboard></Dashboard>
      <Button ml={"1rem"} mt={4} w={"100px"} h={"25px"}>
      {text}
    </Button>
    </div>
  );
}
