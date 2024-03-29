import { Box, Divider, Flex, Icon, Stack, Text } from "@chakra-ui/react";

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
export default function Footer() {
  return (
    <Flex bg="gray.600" height="20%" flexDir={"row"} justifyContent={"space-evenly"} color={"#FFFF"}>
      <Box justifySelf={"center"} alignSelf={"center"}>
        <Text>Logo</Text>
      </Box>
      <Box>
        <Stack direction="row" h="150px" p={4}>
          <Divider orientation="vertical" />
          <Flex flexDir="column" gap={2.5}>
            {" "}
            <Text>Documentos</Text>
            <Text>Recursos</Text>
            <Text>Comunidade</Text>
          </Flex>
        </Stack>
      </Box>
      <Box>
        <Stack direction="row" h="150px" p={4}>
          <Divider orientation="vertical" />
          <Flex flexDir="column" gap={2.5}>
            {" "}
            <Text>Contatos</Text>
            <Text>Sobre</Text>
            <Text>Sugestões</Text>
          </Flex>
        </Stack>
      </Box>
      <Box>
        <Stack direction="row" h="150px" p={4} w={"100%"}>
          <Divider orientation="vertical" />
          <Flex flexDir={"row"} alignSelf={"center"} justifyContent={"space-between"} gap={10}>
            <Text>Redes Sociais</Text>
            <Box display={"flex"} flexDir={"row"} gap={5} justifyContent={"space-between"} alignSelf={"center"}>
              <Icon as={FaFacebookF} fontSize={"24px"} />
              <Icon as={FaInstagram} fontSize={"24px"} />
              <Icon as={FaYoutube} fontSize={"24px"} />
              <Icon as={FaWhatsapp} fontSize={"24px"} />
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
}
