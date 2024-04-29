import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Flex
      bg=" black"
      alignItems="center"
      gap="50px"
      pt="30px"
      pb="30px"
      pl="200px"
      pr="200px"
      justifyContent={"center"}
    >
      <Flex gap="5px">
        <Flex direction="column" alignItems="center" gap="5px">
          <Heading color="white" alignSelf={"center"} fontSize={"70"} pb="130px">
            Pesquise mais, de qualquer lugar!
          </Heading>
          <Text color="white" fontSize={"16"}>{`Potencialize suas pesquisas! Experimente nossa 
                  ferramenta gratuita para revisões sistemáticas - fácil de usar e ideal 
                  para pesquisadores e estudantes.`}</Text>
          <Button w="40%" colorScheme="whiteAlpha">
            Cadastre-se já
          </Button>
        </Flex>
        <Image
          src="../../../../../public/photos/homepagePhotos/HeroSectionPic.png"
          alt={`Foto de diferentes dispositivos eletronicos conectados a ferramenta StArt 
              - computador deskot, smart phone e tablet.`}
          borderRadius="30px"
        />
      </Flex>
    </Flex>
  );
}
