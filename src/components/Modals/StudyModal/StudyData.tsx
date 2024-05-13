import { FaPen } from "react-icons/fa";
import { IconButton, Flex, Text, Center } from "@chakra-ui/react";

interface IStudyData {
  title: string;
  authors: string[];
  year: string;
  venue: string;
  abstract: string;
  keywords: string[];
  studyType: string;
}

interface IStudyDataFiel {
  studyData: IStudyData[];
  type: string;
}

export default function StudyDataFiel({ studyData, type }: IStudyDataFiel) {
  const isTypeValid: boolean = type === "Selection" || type === "Extraction";
  const isTypeSelection: boolean = type === "Selection";

  const selectionSX = {
    bg: "white",
    width: "100%",
    height: "300px",
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
    if (isTypeSelection)
      return (
        <Flex sx={isTypeSelection ? selectionSX : extractionSX}>

            <Flex flexDirection="column" padding="60px">

                <Flex display="flex" lineHeight="1" gap="5" flexDirection="column" w="100%" pt="10px" fontFamily={"Merriweather"}
                 maxHeight="250px"
                >
                  <Flex>
                    <Text marginBottom={"7px"} w="30%" align={"left"}>
                          <Text fontSize={"14px"} fontWeight={"bold"}>Type: {studyData[0].studyType}</Text> 
                    </Text>
                    <Text fontSize={"20px"} align={"right"} as="i" fontWeight={"Bold"} w="70%">
                      {studyData[0].venue}, {studyData[0].year}
                    </Text>
                  </Flex>

                  <Text fontSize={"35"} fontWeight={"bold"} fontFamily={"Boboni"} lineHeight="1" align={"center"}>
                    {studyData[0].title}
                  </Text>

                  <Text p="1" fontWeight={"Bold"} align={"center"}>
                    {studyData[0].authors.join(", ")}
                  </Text>

                <Flex fontFamily={"Literata"} flexDirection={"column"} align={"right"} gap="15px" pb="60px">
                    <Text fontSize={"xxl"}><b>Abstract.</b> {studyData[0].abstract}</Text> 
                    <Text fontSize={"xxl"}><b>Keywords.</b> {studyData[0].keywords.join(", ")}</Text> 
                </Flex>

              </Flex>
                
            </Flex>
        
        </Flex>
      );

      return (
        <Flex sx={isTypeSelection ? selectionSX : extractionSX}>

            <Flex>
              <Center>
                <Flex direction={"row"} p="2">
                  <Text fontSize={"lg"}>Study Data</Text>
                  <IconButton aria-label="Edit Study Data" w="28px" h="28px" icon={<FaPen />} />
                </Flex>
              </Center>

              <Flex display="flex" flexDirection="row" gap={"4"} fontFamily={"10"}>

                <Flex display="flex" flexDirection="column" w="20%" pt="10px">
                  <Text fontSize={"20px"} align={"right"}>
                    {studyData[0].venue}, {studyData[0].year}
                  </Text>
                  <Text align={"right"} p="1">
                    {studyData[0].authors.join(", ")}
                  </Text>
                </Flex>

                <Flex direction={"column"} textAlign={"justify"} w="80%">
                  <Text fontSize={"30"} fontWeight={"bold"}>
                    {studyData[0].title}
                  </Text>
                  <Text>
                    <Text fontSize={"xxl"}><b>Abstract.</b> {studyData[0].abstract}</Text> 
                  </Text>
                  <Text marginBottom={"7px"}>
                    <Text fontSize={"xxl"}><b>Keywords.</b> {studyData[0].keywords.join(", ")}</Text> 
                  </Text>
                  <Text marginBottom={"7px"}>
                    <Text fontSize={"xxl"}><b>Type.</b> {studyData[0].studyType}</Text> 
                  </Text>
                </Flex>
                
              </Flex>
            </Flex>
        
        </Flex>
      );
  }

  return <>Wrong value for type of component StudyData</>;
}
