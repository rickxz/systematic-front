import { Flex, Divider, Avatar, Heading } from "@chakra-ui/react";

interface IUserInfosProps {
  navSize: string;
}

const SMALL_SIZE = "small";

export default function UserInfos({ navSize }: IUserInfosProps): JSX.Element {
  const isSmallSize = navSize === SMALL_SIZE;

  return (
    <Flex p="5%" flexDir="column" w="100%" alignItems="center" mb={4}>
      <Divider />
      <Flex mt={4} justifyContent="center" flexDir="column" alignItems="center">
        <Avatar size="md" mb={2}></Avatar>
        <Flex flexDir="column" ml={4}>
          <Heading display={isSmallSize ? "none" : "flex"} as="h3" size="sm">
            Username
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}
