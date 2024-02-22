import EventButton from "../Buttons/EventButton";
import { FormControl, Box } from "@chakra-ui/react";
import PasswordInput from "../Inputs/PasswordInput";
import FormOptions from "./subcomponents/FormOptions";
import RegisterInputs from "./subcomponents/inputs/RegisterInputs";
import useHandleRegister from "../../hooks/validation/useHandleRegister";

interface iLoginProps {
  handleRender: (renderForm: string) => void;
}

export default function Login({ handleRender }: iLoginProps) {
  const { handleEmailchange, handlePasswordChange } = useHandleRegister();
  return (
    <Box mb={"13em"}>
      <FormControl mb={10} display={"flex"} flexDir={"column"} alignItems={"center"} w={"80%"} rowGap={3}>
        <RegisterInputs id="mail" placeholder={"Email ..."} handlechange={handleEmailchange} />
        <PasswordInput text="Password..." handlechange={handlePasswordChange} />
        <Box display={"flex"} flexDir={"row"} w={"100%"} justifyContent={"space-between"}>
          <EventButton
            event={() => {
              window.alert("Loged-in!!!");
            }}
            text={"Log in"}
            display={"flex"}
            mb={5}
            colorScheme="teal"
            variant={"solid"}
            w={"fit-content"}
          />

          <FormOptions text="Forgot Password?" onClick={() => handleRender("Password")} />
        </Box>
      </FormControl>
    </Box>
  );
}
