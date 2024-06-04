import { FaPen } from "react-icons/fa";
import { IconButton, Flex, Text, Center } from "@chakra-ui/react";
import { StudyInterface } from "../../../../public/interfaces/IStudy";

interface IStudyDataFiel {
  studyData: StudyInterface;
  type: "Selection" | "Extraction";
}

export default function StudyDataFiel({ studyData, type }: IStudyDataFiel) {
  const isTypeValid: boolean = type === "Selection" || type === "Extraction";
  const isTypeSelection: boolean = type === "Selection";

  if (!studyData) return <>Study not found</>

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
  };

  if (isTypeValid) {
    if (isTypeSelection)
      return (
        <Flex sx={selectionSX}>

            <Flex flexDirection="column" padding="60px">

                <Flex display="flex" lineHeight="1" gap="5" flexDirection="column" w="100%" pt="10px" fontFamily={"Merriweather"}
                 maxHeight="250px"
                >
                  <Flex>
                    <Text marginBottom={"7px"} w="30%" align={"left"}>
                          <Text fontSize={"14px"} fontWeight={"bold"}>Type: {studyData.studyType}</Text> 
                    </Text>
                    <Text fontSize={"20px"} align={"right"} as="i" fontWeight={"Bold"} w="70%">
                      {studyData.venue}, {studyData.year}
                    </Text>
                  </Flex>

                  <Text fontSize={"35"} fontWeight={"bold"} fontFamily={"Boboni"} lineHeight="1" align={"center"}>
                    {studyData.title}
                  </Text>

                  <Text p="1" fontWeight={"Bold"} align={"center"}>
                    {studyData.authors}
                  </Text>

                <Flex fontFamily={"Literata"} flexDirection={"column"} align={"right"} gap="15px" pb="60px">
                    <Text fontSize={"xxl"}><b>Abstract.</b> {studyData.abstract}</Text> 
                    <Text fontSize={"xxl"}><b>Keywords.</b> {studyData.keywords}</Text> 
                </Flex>

              </Flex>
                
            </Flex>
        
        </Flex>
      );

      return (
        <Flex sx={extractionSX}>

          <Flex flexDirection="column" >
              <Center>
                <Flex direction={"row"} justifyContent={"center"} m="2" position={"relative"} w="100%">
                  <Text as="h3" fontSize={"lg"} fontWeight={"bold"}>Study Data</Text>
                  <IconButton aria-label="Edit Study Data" w="28px" h="28px" position={"absolute"} right="0px" icon={<FaPen />} />
                </Flex>
              </Center>
              
              <Flex display="flex" overflowY="scroll" lineHeight="1" gap="10" flexDirection="column" p="20px" fontFamily={"Merriweather"}
              maxHeight="290px" bg="rgb(240,240,240)" ml="10px" mr="10px"
              >
                <Flex>
                  <Text marginBottom={"7px"} w="40%" align={"left"}>
                        <Text fontSize={"10px"} fontWeight={"bold"}>Type: {studyData.studyType}</Text> 
                  </Text>
                  <Text fontSize={"15px"} align={"right"} as="i" fontWeight={"Bold"} w="60%">
                    {studyData.venue}, {studyData.year}
                  </Text>
                </Flex>

                <Text fontSize={"25"} fontWeight={"bold"} fontFamily={"Boboni"} lineHeight="1" align={"center"}>
                  {studyData.title}
                </Text>

                <Text p="1" fontSize={"15"} fontWeight={"Bold"} align={"center"}>
                  {studyData.authors}
                </Text>

                <Flex fontFamily={"Literata"} flexDirection={"column"} textAlign={"justify"} gap="15px">
                    <Text fontSize={"xxl"}><b>Abstract.</b> {studyData.abstract}</Text> 
                    <Text fontSize={"xxl"}><b>Keywords.</b> {studyData.keywords}</Text> 
                </Flex>

              </Flex>

          </Flex>
        
        </Flex>
      );
  }

  return <>Wrong value for type of component StudyData</>;
}
