import { FormControl } from "@chakra-ui/react";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";
import PasswordInput from "../../components/Inputs/PasswordInput";
import SelectInput from "../../components/Inputs/SelectInput";
import { useSelect } from "../../hooks/useSelect";
import EventButton from "../../components/Buttons/EventButton";

//Acho que poderia colocar nome, e-mail, afiliação, país, senha, confirmação de senha.

export default function Register() {
  const { selectedValue, handleSelectChange } = useSelect();
  return (
    <GridLayout navigationType="Default">
      <Header text="Register Page" />
      <FormControl mb={10} display={"flex"} flexDir={"column"}>
        <InputText label={"Name: "} placeholder={""} type={"text"} nome={"name"} />
        <InputText label={"E-mail: "} placeholder={""} type={"text"} nome={"email"} />
        <InputText label={"Affiliation: "} placeholder={""} type={"text"} nome={"affiliattion"} />
        <FormControl display={"flex"} flexDir={"column"} gap={10} mt={10}>
          <SelectInput
            values={["", "Brazil", "England", "France", "Spain"]}
            names={["", "Brazil", "England", "France", "Spain"]}
            label={"Country: "}
            onSelect={handleSelectChange}
            selectedValue={selectedValue}
          />

          <PasswordInput text="Choose a password:" />
          <PasswordInput text="Confirm your password: " />
        </FormControl>
      </FormControl>

      <EventButton
        event={() => {
          window.alert("User registered with success!");
        }}
        text={"register"}
        display={"flex"}
        justifySelf={"flex-end"}
        mb={20}
      />
    </GridLayout>
  );
}
