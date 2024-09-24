import { Card, Box, Text } from "@chakra-ui/react";
import NavButton from "../../../components/Buttons/NavButton";
import EventButton from "../../../components/Buttons/EventButton";
import DataBaseIcon from "../../../components/Icons/DataBaseIcon";
import AccordionDashboard from "./subcomponents/AccordionDashboard";
import { btnConteiner, btnConteinerAllBases, card, conteiner, iconConteiner, testo } from "../styles/CardsStyle";

interface DatabaseCardProps {
  text: string;
  type: string;
}

export default function DataBaseCard({ text, type }: DatabaseCardProps) {
  return (
    <Card w={type === "allData" ? "80vw" : "26vw"} sx={card}>

      <Box sx={conteiner} 
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDirection={"row"}
      bgColor={type === "allData" ? "#EBF0F3" : "#EBF0F3"}
      color={type === "allData" ? "#263C56" : "#263C56"}
      >

        <Box sx={iconConteiner} ml={"1em"}>
          <DataBaseIcon/>
          <Text sx={testo}> {text}</Text>
        </Box>

        <Box sx={type === "allData" ? btnConteinerAllBases : btnConteiner}>

          { /*<NavButton
            fontSize={type === "allData" ? 16 : 13}
            w={"fit-content"}
            text={"Add Session"}
            path={"/newRevision/searchSession"}
            bgColor={"#263C56"}
            color={"#C9D9E5"}
            //border={"1px solid #FDF0D5"}
            fontWeight="bold"
            borderRadius="10px"
          /> */}
          { <EventButton
            fontSize={type === "allData" ? 16 : 14}
            bgColor={type === "allData" ? "#263C56" : "#263C56"}
            w={"80px"}
            color={type === "allData" ? "#C9D9E5" : "#C9D9E5"}
            borderRadius="10px"
            event={function (): void {
              console.log("View");
            }}
            text={"View"}
          /> }
        </Box>

      </Box>

      <AccordionDashboard/>

    </Card>
  );
}
