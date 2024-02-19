import { FormLabel } from "@chakra-ui/react";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";

export default function Register() {
  return (
    <GridLayout navigationType="Default">
      <Header text="Register Page" />
      <FormLabel></FormLabel>
    </GridLayout>
  );
}
