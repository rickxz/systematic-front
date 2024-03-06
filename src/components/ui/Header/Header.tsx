import { Heading } from "@chakra-ui/react";

interface IHeaderProps {
  text: string;
}

export default function Header({ text }: IHeaderProps) {
  return (
    <Heading mt={2} as={"h1"} alignSelf={"center"}>
      {text}
    </Heading>
  );
}
