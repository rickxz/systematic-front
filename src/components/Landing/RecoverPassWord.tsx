import { FormControl, Input, Box, Text } from "@chakra-ui/react";
import EventButton from "../Buttons/EventButton";
import useHandleRegister from "../../hooks/validation/useHandleRegister";
interface iRecoverProps {
  handleRender: (renderForm: string) => string;
}
export default function RecoverPassWord({ handleRender }: iRecoverProps) {
  const { handleEmailchange } = useHandleRegister();
  return (
    <Box mb={"12em"}>
      {" "}
      <FormControl mb={10} display={"flex"} flexDir={"column"} alignItems={"center"} w={"80%"} rowGap={3}>
        <Input placeholder={"Email ..."} type={"text"} onChange={handleEmailchange} />

        <Box display={"flex"} flexDir={"row"} columnGap={55}>
          <EventButton
            event={() => {
              window.alert("Recover mail sent!!!");
            }}
            text={"Recover Password"}
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
            back
          </Text>
        </Box>
      </FormControl>
    </Box>
  );
}
