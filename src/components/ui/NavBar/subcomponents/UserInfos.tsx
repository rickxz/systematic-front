import { Flex, Divider, Avatar, Heading } from "@chakra-ui/react";
interface IUserInfos {
  navSize: string;
}
export default function UserInfos({ navSize }: IUserInfos) {
  return (
    <Flex p={"5%"} flexDir={"column"} w={"100%"} alignItems={"center"} mb={4}>
      <Divider />
      <Flex mt={4} justifyContent={"center"} flexDir={"column"} alignItems={"center"}>
        <Avatar size={"md"} mb={2}></Avatar>
        <Flex flexDir={"column"} ml={4}>
          <Heading display={navSize == "small" ? "none" : "flex"} as={"h3"} size={"sm"}>
            Nome do usuário
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}
