import { Box, Button, Card, Flex, Grid, GridItem, Heading, Icon, Text } from "@chakra-ui/react";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa6";
import Sidebar from "../../components/ui/NavBar/Sidebar";

export default function Home() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Default" />
      <GridItem>
        <Heading mt={10} as={"h1"} alignSelf={"center"} ml={"45%"}>
          Minhas Revisões
        </Heading>
        <Flex mt={"2.5vh"}>
          <Card
            h={"100PX"}
            w={"1100PX"}
            boxShadow={"0 4px 12px 0 rgba(0, 0 , 0, 0.5)"}
            display={"flex"}
            flexDir="row"
            borderRadius={"20px"}
            ml={"5%"}
            fontSize={"12px"}
            justifySelf={"flex-start"}
          >
            <Icon
              as={IoNewspaperSharp}
              w={"60px"}
              h={"60px"}
              justifySelf={"center"}
              alignSelf={"center"}
              ml={"0.5rem"}
            />
            <Box
              display={"flex"}
              flexDir={"column"}
              ml={"4.4rem"}
              alignSelf={"center"}
              justifySelf={"center"}
              rowGap={"0.5em"}
            >
              <Text as={"h4"}>Titulo da revisão sistemática</Text>
              <Text>Revisore: Revisor1....RevisorN</Text>
            </Box>
            <Box ml={"20%"}>
              <Button ml={"100%"} mt={4} w={"106px"} h={"25px"}>
                Ver Revisão
              </Button>

              <Box display={"flex"} flexDir={"row"} justifyContent={"space-between"} ml={"20%"} mt={"1.5rem"}>
                <Icon as={FaRegCircle} size={"md"} color={"green"} mt={1.4} />
                <Box display={"flex"} flexDir={"row"} ml={0.5}>
                  <Text w={"200px"}>Data da ultima ediçao: dd/mm/yyyy</Text>
                  <Text w={"200px"}>Data de criação: dd/mm/yyyy</Text>
                </Box>
              </Box>
            </Box>
          </Card>
        </Flex>
      </GridItem>
    </Grid>
  );
}
