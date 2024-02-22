import SelectInput from "../Inputs/SelectInput";
import EventButton from "../Buttons/EventButton";
import { FormControl, Box } from "@chakra-ui/react";
import PasswordInput from "../Inputs/PasswordInput";
import FormOptions from "./subcomponents/FormOptions";
import RegisterInputs from "./subcomponents/inputs/RegisterInputs";
import useHandleRegister from "../../hooks/validation/useHandleRegister";

interface iRegisterProps {
  handleRender: (renderForm: string) => void;
}

export default function Register({ handleRender }: iRegisterProps) {
  const {
    handleNameChange,
    selectedValue,
    handleSelectChange,
    handleEmailchange,
    handleAffiliattionChange,
    passwordMatch,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRegister,
  } = useHandleRegister();
  return (
    <>
      <FormControl mb={10} display={"flex"} flexDir={"column"} alignItems={"center"} w={"80%"} rowGap={3} pr={5}>
        <RegisterInputs id="nome" placeholder={"Name ..."} handlechange={handleNameChange} />
        <RegisterInputs id="mail" placeholder={"Email ..."} handlechange={handleEmailchange} />
        <RegisterInputs id="affiliation" placeholder={"Affiliation ..."} handlechange={handleAffiliattionChange} />

        <SelectInput
          values={["Brazil", "England", "France", "Spain"]}
          names={["Brazil", "England", "France", "Spain"]}
          label={" "}
          onSelect={handleSelectChange}
          selectedValue={selectedValue}
        />
        <PasswordInput text="Password..." handlechange={handlePasswordChange} isValid={passwordMatch} />
        <PasswordInput
          text="Confirm  password... "
          handlechange={handleConfirmPasswordChange}
          isValid={passwordMatch}
        />

        <Box display={"flex"} flexDir={"row"} justifyContent={"space-between"} w={"100%"}>
          <EventButton
            event={handleRegister}
            text={"Create Account"}
            display={"flex"}
            mb={5}
            colorScheme="teal"
            variant={"solid"}
            w={"fit-content"}
          />
          <FormOptions text="Already have an account? " onClick={() => handleRender("Login")} />
        </Box>
      </FormControl>
    </>
  );
}
