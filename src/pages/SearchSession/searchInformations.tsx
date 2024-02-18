import { Box, Card, Text } from "@chakra-ui/react";

export default function SearchInformations() {
  return (
    <Box w={"40%"} display={"flex"} flexDir={"column"} gap={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
      <Text fontWeight={"bold"} fontSize={18}>
        Search String:{" "}
      </Text>
      <Card h={10} w={"100%"} textAlign={"center"} justifyContent={"center"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Card>
      <Text>
        <b>Number of Papers:</b> 22 <b>Date of search:</b> dd/mm/aa{" "}
      </Text>
      <Text fontWeight={"bold"} fontSize={18}>
        Observation:{" "}
      </Text>
      <Card h={200} w={"100%"} textAlign={"center"} justifyContent={"center"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Card>
    </Box>
  );
}
