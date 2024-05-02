import EventButton from "../Buttons/EventButton";
import { FormControl, Box } from "@chakra-ui/react";
import PasswordInput from "../Inputs/PasswordInput";
import FormOptions from "./subcomponents/FormOptions";
import RegisterInputs from "./subcomponents/inputs/RegisterInputs";
import useHandleRegister from "../../hooks/validation/useHandleRegister";
import { bxconteiner, evbtn, formcontrol } from "./styles/loginstyles";

interface iLoginProps {
  handleRender: (renderForm: string) => void;
}
export default function Login({ handleRender }: iLoginProps) {
  const { handleEmailchange, handlePasswordChange } = useHandleRegister();
  return (
    <Box w={"100%"} mb={"13em"} ml={"20%"}>
      <FormControl sx={formcontrol}>
        <RegisterInputs id="mail" placeholder={"Email ..."} handlechange={handleEmailchange} />
        <PasswordInput text="Password..." handlechange={handlePasswordChange} />
        <Box sx={bxconteiner}>
          <EventButton
            event={() => {
              window.alert("Loged-in!!!");
            }}
            text={"Log in"}
            sx={evbtn}
          />

          <FormOptions text="Forgot Password?" onClick={() => handleRender("Password")} />
        </Box>
      </FormControl>
    </Box>
  );
}
