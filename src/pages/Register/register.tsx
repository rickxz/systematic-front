import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import { Box, FormControl, Text } from "@chakra-ui/react";
import InputText from "../../components/Inputs/InputText";
import EmailInput from "../../components/Inputs/EmailInput";
import SelectInput from "../../components/Inputs/SelectInput";
import EventButton from "../../components/Buttons/EventButton";
import PasswordInput from "../../components/Inputs/PasswordInput";
import useHandleRegister from "../../hooks/validation/useHandleRegister";
import { Link } from "react-router-dom";

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
        <Box display={"flex"} flexDir={"row"} gap={1}>
          <Text> Already have an account?</Text>
          <Link to={"/"}> Log in</Link>
        </Box>

        <FormControl mb={10} display={"flex"} flexDir={"column"} alignItems={"center"}>
          <InputText
            label={"Name: "}
            placeholder={"Enter your name here..."}
            type={"text"}
            nome={"name"}
            onChange={handleNameChange}
          />
          <EmailInput handleChange={handleEmailchange} />
          <InputText
            label={"Affiliation: "}
            placeholder={"Enter your Affiliation here..."}
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
