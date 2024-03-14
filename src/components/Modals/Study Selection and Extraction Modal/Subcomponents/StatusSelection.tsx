import { Flex, Select, Text } from "@chakra-ui/react";

export default function StatusSelection() {
  return (
    <>
      <Flex gap="10px">
        <Text>Select a status:</Text>
        <Select placeholder="Select a status" w={"150px"} size={"sm"} bg="white" color="black">
          <option value="Unclassified">Unclassified</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
          <option value="Duplicated">Duplicated</option>
        </Select>
      </Flex>
    </>
  );
}
