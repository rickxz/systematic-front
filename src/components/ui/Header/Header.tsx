import { Heading } from "@chakra-ui/react";

interface IHeaderProps {
  text: string;
}

export default function Header({ text }: IHeaderProps) {
  return (
    <Heading mt={10} as={"h1"} alignSelf={"center"} ml={"45%"}>
      {text}
    </Heading>
  );
}
