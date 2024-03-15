import { Flex, Divider, Avatar, Heading } from "@chakra-ui/react";
import { SMALL_SIZE, avatar, flexconteiner, infoconteiner, nameconteiner } from "../styles/userInfossStyles";

interface IUserInfosProps {
  navSize: string;
}

export default function UserInfos({ navSize }: IUserInfosProps): JSX.Element {
  const isSmallSize = navSize === SMALL_SIZE;

  return (
    <Flex sx={flexconteiner}>
      <Divider />
      <Flex sx={infoconteiner}>
        <Avatar sx={avatar}></Avatar>
        <Flex sx={nameconteiner}>
          <Heading display={isSmallSize ? "none" : "flex"} as="h3" size="sm">
            Username
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}
