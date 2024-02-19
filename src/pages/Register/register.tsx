import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import { Box, FormControl, Text } from "@chakra-ui/react";
import InputText from "../../components/Inputs/InputText";
import EmailInput from "../../components/Inputs/EmailInput";
import SelectInput from "../../components/Inputs/SelectInput";
import EventButton from "../../components/Buttons/EventButton";
import PasswordInput from "../../components/Inputs/PasswordInput";
import useHandleRegister from "../../hooks/validation/useHandleRegister";

export default function Register() {
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
    <GridLayout navigationType="Default">
      <Box
        borderWidth={"1px"}
        borderRadius={"lg"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={10}
        mb={20}
      >
        <Header text="Create Account" />
        <Text> Already have an account? Log in</Text>
        <FormControl mb={10} display={"flex"} flexDir={"column"} alignItems={"center"}>
          <InputText label={"Name: "} placeholder={""} type={"text"} nome={"name"} onChange={handleNameChange} />
          <EmailInput handleChange={handleEmailchange} />
          <InputText
            label={"Affiliation: "}
            placeholder={""}
            type={"text"}
            nome={"affiliattion"}
            onChange={handleAffiliattionChange}
          />

          <FormControl display={"flex"} flexDir={"column"} gap={10} mt={10} w={"75%"} alignSelf={"center"}>
            <SelectInput
              values={["", "Brazil", "England", "France", "Spain"]}
              names={["", "Brazil", "England", "France", "Spain"]}
              label={"Country: "}
              onSelect={handleSelectChange}
              selectedValue={selectedValue}
            />
            <PasswordInput text="Choose a password:" handlechange={handlePasswordChange} isValid={passwordMatch} />
            <PasswordInput
              text="Confirm your password: "
              handlechange={handleConfirmPasswordChange}
              isValid={passwordMatch}
            />
          </FormControl>
        </FormControl>
        <EventButton
          event={handleRegister}
          text={"Create Account"}
          display={"flex"}
          justifySelf={"flex-end"}
          mb={5}
          colorScheme="teal"
          variant={"solid"}
          w={"200px"}
        />
      </Box>
    </GridLayout>
  );
}
