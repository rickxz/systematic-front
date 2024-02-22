import { FormControl, Input, Box, Text } from "@chakra-ui/react";
import EventButton from "../Buttons/EventButton";
import PasswordInput from "../Inputs/PasswordInput";
import SelectInput from "../Inputs/SelectInput";
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
      {" "}
      <FormControl mb={10} display={"flex"} flexDir={"column"} alignItems={"center"} w={"80%"} rowGap={3} pr={5}>
        <Input placeholder={"Name ..."} type={"text"} onChange={handleEmailchange} />
        <Input placeholder={"Email ..."} type={"text"} onChange={handleNameChange} />
        <Input placeholder={"Affiliation ..."} type={"text"} onChange={handleAffiliattionChange} />

        <SelectInput
          values={["Brazil", "England", "France", "Spain"]}
          names={["Brazil", "England", "France", "Spain"]}
          label={" "}
          onSelect={handleSelectChange}
          selectedValue={selectedValue}
          placeholder="Country..."
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

          <Text
            mt={2}
            onClick={() => {
              handleRender("Login");
            }}
            _hover={{ cursor: "pointer" }}
          >
            Already have an account?
          </Text>
        </Box>
      </FormControl>
    </>
  );
}
