import { FormControl, Input, Box, Text } from "@chakra-ui/react";
import EventButton from "../Buttons/EventButton";
import PasswordInput from "../Inputs/PasswordInput";
import useHandleRegister from "../../hooks/validation/useHandleRegister";

interface iLoginProps {
  handleRender: (renderForm: string) => string;
}

export default function Login({ handleRender }: iLoginProps) {
  const {
    handleEmailchange,

    handlePasswordChange,
  } = useHandleRegister();
  return (
    <Box mb={"12em"}>
      {" "}
      <FormControl mb={10} display={"flex"} flexDir={"column"} alignItems={"center"} w={"80%"} rowGap={3}>
        <Input placeholder={"Email ..."} type={"text"} onChange={handleEmailchange} />
        <PasswordInput text="Password..." handlechange={handlePasswordChange} />

        <Box display={"flex"} flexDir={"row"} columnGap={55}>
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

          <Text
            mt={2}
            onClick={() => {
              handleRender("Password");
            }}
            _hover={{ cursor: "pointer" }}
          >
            {" "}
            Forgot Password?{" "}
          </Text>
        </Box>
      </FormControl>
    </Box>
  );
}
