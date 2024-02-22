import GridLayout from "../../components/ui/Grid/Grid";
import { Box, Card, Text } from "@chakra-ui/react";
import { useState } from "react";
import Register from "../../components/Landing/Register";
import Login from "../../components/Landing/Login";
import RecoverPassWord from "../../components/Landing/RecoverPassWord";

export default function LandingPage() {
  const [renderForm, SetRenderForm] = useState("Login");
  const renderLogin = renderForm === "Login";

  return (
    <GridLayout navigationType="Default">
      <Box
        borderWidth={"1px"}
        borderRadius={"lg"}
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={"9em"}
        mb={20}
        h={"500px"}
        gap={10}
      >
        <Box ml={"3em"} pb={"5em"} alignContent={"center"} textAlign={"center"}>
          {" "}
          <Card w={400} h={200} textAlign={"center"} fontWeight={"bold"} bgColor={"teal"}>
            {" "}
            <Text mt={"5em"}>Logo da Start Aqui</Text>
          </Card>
        </Box>
        <Box display={"flex"} flexDir={"column"} gap={1} justifyContent={"flex-end"} w={"50%"} mt={"5em"} ml={"5em"}>
          <Box display={"flex"} flexDir={"row"} gap={4} mb={3}>
            <Text
              fontWeight={renderLogin ? "bold" : ""}
              color={"teal"}
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                SetRenderForm("Login");
              }}
            >
              Login
            </Text>
            <Text
              fontWeight={!renderLogin ? "bold" : ""}
              color={"teal"}
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                SetRenderForm("Register");
              }}
            >
              Register
            </Text>
          </Box>
          {renderForm === "Login" && (
            <Login
              handleRender={(renderForm) => {
                SetRenderForm("Password");
                return renderForm;
              }}
            />
          )}{" "}
          {renderForm === "Register" && (
            <Register
              handleRender={(renderForm) => {
                SetRenderForm("Login");
                return renderForm;
              }}
            />
          )}
          {renderForm === "Password" && (
            <RecoverPassWord
              handleRender={(renderForm) => {
                SetRenderForm("Login");
                return renderForm;
              }}
            />
          )}
        </Box>
      </Box>
    </GridLayout>
  );
}
