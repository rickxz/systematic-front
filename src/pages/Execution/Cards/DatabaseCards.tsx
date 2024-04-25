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
    <Card w={type === "allData" ? "80vw" : "38vw"} sx={card}>

      <Box sx={conteiner} 
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDirection={"row"}
      bgColor={type === "allData" ? "#C9D9E5" : "#301E1A"}
      color={type === "allData" ? "#301E1A" : "#C9D9E5"}
      borderRadius={"1%"}>

        <Box sx={iconConteiner} ml={"1em"}>
          <DataBaseIcon/>
          <Text sx={testo}> {text}</Text>
        </Box>

        <Box sx={type === "allData" ? btnConteinerAllBases : btnConteiner}>

          <NavButton
            fontSize={type === "allData" ? 16 : 13}
            w={"fit-content"}
            text={"Add Session"}
            path={"/newRevision/searchSession"}
            bgColor={"#414B53"}
            color={"#FDF0D5"}
            border={"1px solid #FDF0D5"}
            fontWeight="bold"
          />
          <EventButton
            fontSize={type === "allData" ? 16 : 13}
            bgColor={type === "allData" ? "#301E1A" : "#C9D9E5"}
            w={"170px"}
            color={type === "allData" ? "#C9D9E5" : "#301E1A"}
            fontWeight="bold"
            event={function (): void {
              console.log("Session deleted");
            }}
            text={"Remove Session"}
          />
        </Box>

      </Box>

      <AccordionDashboard/>

    </Card>
  );
}
