import { FormControl, Input, Box } from "@chakra-ui/react";
import EventButton from "../Buttons/EventButton";
import PasswordInput from "../Inputs/PasswordInput";
import SelectInput from "../Inputs/SelectInput";
import useHandleRegister from "../../hooks/validation/useHandleRegister";
import FormOptions from "./subcomponents/FormOptions";

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
        <Input id="nome" placeholder={"Name ..."} type={"text"} onChange={handleNameChange} />
        <Input id="mail" placeholder={"Email ..."} type={"email"} onChange={handleEmailchange} />
        <Input id="affiliation" placeholder={"Affiliation ..."} type={"text"} onChange={handleAffiliattionChange} />

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

        <Box display={"flex"} flexDir={"row"} columnGap={55}>
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
