import { FormControl, Input, Box } from "@chakra-ui/react";
import EventButton from "../Buttons/EventButton";
import PasswordInput from "../Inputs/PasswordInput";
import useHandleRegister from "../../hooks/validation/useHandleRegister";
import FormOptions from "./subcomponents/FormOptions";

interface iLoginProps {
  handleRender: (renderForm: string) => void;
}

export default function Login({ handleRender }: iLoginProps) {
  const {
    handleEmailchange,

    handlePasswordChange,
  } = useHandleRegister();
  return (
    <Box mb={"13em"}>
      {" "}
      <FormControl mb={10} display={"flex"} flexDir={"column"} alignItems={"center"} w={"80%"} rowGap={3}>
        <Input placeholder={"Email ..."} type={"text"} onChange={handleEmailchange} />
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
