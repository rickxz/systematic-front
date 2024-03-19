import { IconButton, Flex, Stack, Text, Center } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import ModalContext from "../../Tables/Subcomponents/ModalContext";
import { useContext } from "react";

{
  /*interface IStudyDataFiel {
  studyData: (string | number)[];
}*/
}

export default function StudyDataFiel({ studyData }: IStudyDataFiel) {
  const context = useContext(ModalContext);
  console.log("E ai??:" + context?.StudyDataButtonState);
  const isOpen = context?.StudyDataButtonState;

  if (isOpen) return (
    <Flex bg="gray.300" w="450px" h="350px" direction={"column"} alignContent={"center"} overflowY={"scroll"} p="3">
      <Center>
        <Stack direction={"row"} p="2">
          <Text fontSize={"lg"}>Study Data</Text>
          <IconButton aria-label="Edit Study Data" w="28px" h="28px" icon={<FaPen />} />
        </Stack>
      </Center>
      <Text align={"center"} fontSize={"xl"} fontWeight={"semibold"}>
        Titulo do Artigo
      </Text>
      <Text align={"center"} p="1">
        Autor SOBRENOME, autor 2 SOBRENOME
      </Text>

      <Flex direction={"column"} textAlign={"justify"} p="1">
        <Text marginBottom={"7px"}>
          <Text as="b">Keywords. </Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Text>

        <Text marginBottom={"7px"}>
          <Text as="b">Journal. </Text> Lorem ipsum dolor sit amet
        </Text>

        <Text marginBottom={"7px"}>
          <Text as="b">Year. </Text> XXXX
        </Text>

        <Text marginBottom={"7px"}>
          <Text as="b">Type. </Text> Lorem ipsum dolor sit amet
        </Text>

        <Text>
          <Text as="b">Abstract. </Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum
        </Text>
      </Flex>
      {/*studyData.map((cell, cellIndex) => (
        <Input placeholder="cell" key={cellIndex} bg="gray.700" color="black" />
      ))*/}
    </Flex>
  );
  return (
    <></>
  );
}
