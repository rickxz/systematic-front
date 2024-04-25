import { Card, Box, Text } from "@chakra-ui/react";
import NavButton from "../../../components/Buttons/NavButton";
import EventButton from "../../../components/Buttons/EventButton";
import DataBaseIcon from "../../../components/Icons/DataBaseIcon";
import AccordionDashboard from "./subcomponents/AccordionDashboard";
import { btnConteiner, card, conteiner, iconConteiner, testo } from "../styles/CardsStyle";

interface DatabaseCardProps {
  text: string;
  type: string;
}

export default function DataBaseCard({ text, type }: DatabaseCardProps) {
  return (
    <Card w={type === "allData" ? "80vw" : "38vw"} sx={card}>
      <Box sx={conteiner}>
        <Box sx={iconConteiner}>
          <DataBaseIcon />
          <Text sx={testo}> {text}</Text>
        </Box>
        <Box sx={btnConteiner}>
          <NavButton
            fontSize={type === "allData" ? 16 : 12}
            w={"fit-content"}
            text={"Add Session"}
            path={"/newRevision/searchSession"}
          />
          <EventButton
            fontSize={type === "allData" ? 16 : 12}
            w={"200px"}
            event={function (): void {
              console.log("Session deleted");
            }}
            text={"Remove Session"}
          />
        </Box>
      </Box>
      <AccordionDashboard />
    </Card>
  );
}
