import { Card, Box, Text } from "@chakra-ui/react";
import NavButton from "../../../components/Buttons/NavButton";
import EventButton from "../../../components/Buttons/EventButton";
import AccordionDashboard from "./subcomponents/AccordionDashboard";
import DataBaseIcon from "../../../components/Icons/DataBaseIcon";

interface DatabaseCardProps {
  text: string;
  type: string;
}

export default function DataBaseCard({ text, type }: DatabaseCardProps) {
  return (
    <Card w={type === "allData" ? "80vw" : "32vw"} mb={5} h={"fit-content"}>
      <Box display={"flex"} flexDir={"row"} justifyContent={"space-between"}>
        <Box display={"flex"} flexDir={"row"} alignContent={"center"} justifyContent={"flex-start"} w={"50%"}>
          <DataBaseIcon />
          <Text ml={"5%"} mt={5}>
            {" "}
            {text}
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-evenly"}
          columnGap={"10%"}
          w={"50%"}
          mt={5}
          mb={3}
          mr={4}
        >
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
