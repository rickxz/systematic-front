import { FaPen } from "react-icons/fa";
import { IconButton, Flex, Stack, Text, Center } from "@chakra-ui/react";

interface IStudyData {
  title: string;
  authors: string[];
  year: string;
  venue: string;
  abstract: string;
  keywords: string[];
  type: string;
}

interface IStudyDataFiel {
  studyData: IStudyData[];
  type: string;
}

export default function StudyDataFiel({ studyData, type }: IStudyDataFiel) {
  const isTypeValid: boolean = type === "Selection" || type === "Extraction";
  const isTypeSelection: boolean = type === "Selection";

  const selectionSX = {
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

  if (isTypeValid) {
    return (
      <Flex sx={isTypeSelection ? selectionSX : extractionSX}>
        {studyData.map((data, index) => (
          <div key={index}>
            <Center>
              <Stack direction={"row"} p="2">
                <Text fontSize={"lg"}>Study Data</Text>
                <IconButton aria-label="Edit Study Data" w="28px" h="28px" icon={<FaPen />} borderRadius={"3px"}/>
              </Stack>
            </Center>
            <Flex marginBottom={"7px"} justify={"center"}>
              <Text>
                {data.venue}, {data.year}
              </Text>
            </Flex>
            <Text align={"center"} fontSize={"xl"} fontWeight={"semibold"}>
              {data.title}
            </Text>
            <Text align={"center"} p="1">
              {data.authors.join(", ")}
            </Text>
            <Flex direction={"column"} textAlign={"justify"} p="1">
              <Text>
                <Text as="b">Abstract. </Text> {data.abstract}
              </Text>
              <Text marginBottom={"7px"}>
                <Text as="b">Keywords. </Text> {data.keywords.join(", ")}
              </Text>
              <Text marginBottom={"7px"}>
                <Text as="b">Type. </Text> {data.type}
              </Text>
            </Flex>
          </div>
        ))}
      </Flex>
    );
  }

  return <>Wrong value for type of component StudyData</>;
}
