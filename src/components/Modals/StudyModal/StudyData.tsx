import { IconButton, Flex, Stack, Text, Center } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";


  interface IStudyDataFiel {
  studyData: (string | number)[];
  type: string;
}

export default function StudyDataFiel({ studyData, type }: IStudyDataFiel) {
  const isTypeValibel: boolean = ( type == "Selection" || type == "Extraction");
  const isTypeSelection: boolean = ( type == "Selection");

  const selectionSX={
    bg: "gray.300",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignContent: "center",
    overflowY: "scroll",
    padding: "3",
  };
  const extractionSX = {
    bg: "gray.300",
    width: "350px",
    height: "350px",
    flexDirection: "column",
    alignContent: "center",
    overflowY: "scroll",
    padding: "3",
  };

  if (isTypeValibel) {
    return (
      <Flex  sx={isTypeSelection ? selectionSX : extractionSX} >
        <Center>
          <Stack direction={"row"} p="2">
            <Text fontSize={"lg"}>Study Data</Text>
            <IconButton aria-label="Edit Study Data" w="28px" h="28px" icon={<FaPen />} />
          </Stack>
        </Center>
        <Text align={"center"} fontSize={"xl"} fontWeight={"semibold"}>
          {studyData[0]}
        </Text>
        <Text align={"center"} p="1">
          {studyData[1]}
        </Text>

        <Flex direction={"column"} textAlign={"justify"} p="1">
          <Text marginBottom={"7px"}>
            <Text as="b">Keywords. </Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>

          <Text marginBottom={"7px"}>
            <Text as="b">Venue. </Text> Lorem ipsum dolor sit amet
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
  } 
  return (<>Wrong value for type of component StudyData</>);
}
