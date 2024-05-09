import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";

interface CollaboratorType {
  photo: string;
  name: string;
  github: string;
  filiacao: string;
}

export default function CollaboratorCard({ collaborator }: { collaborator: CollaboratorType }) {
  const withBlur = { filter: "blur(2px) grayscale(70%) brightness(0.5)", transition: "0.3s" };
  const noBlur = { filter: "blur(0px) grayscale(0%)", transition: "0.3s" };
  const [imageStyle, SetImageStyle] = useState(noBlur);

  const iconAppears = { filter: "opacity(100%)", color: "#53CABE", transition: "top 3s ease-out-in" };
  const iconDesappears = { filter: "opacity(0%)", color: "#53CABE", transition: "top 3s ease-in-out" };
  const [isIconAppeating, SetIsIconAppearing] = useState(false);
  const [iconStyle, SetIconStyle] = useState(iconDesappears);

  function handleOnMouseEnter() {
    SetImageStyle(withBlur);
    SetIconStyle(iconAppears);
    SetIsIconAppearing(true);
  }
  function handleOnMouseLeave() {
    SetImageStyle(noBlur);
    SetIconStyle(iconDesappears);
    SetIsIconAppearing(false);
  }

  return (
    <>
      <Flex direction="column" p="20px" alignItems="center" maxWidth="220px">
        <Flex
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          position="relative"
          alignItems="center"
          justifyContent="center"
          display={"flex"}
          flexDir={"row"}
          width={"180px"}
          h={"auto"}
        >
          <Image
            src={collaborator.photo}
            alt={"Foto de integrante " + collaborator.name}
            borderRadius="100px"
            h="150px"
            w="160px"
            style={imageStyle}
          />
          <Box
            position="absolute"
            top={isIconAppeating ? "50%" : "100%"}
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={1}
            w="32px"
            h="32px"
          >
            <Link href={collaborator.github}>
              <FaGithub size={32} style={iconStyle} />
            </Link>
          </Box>
        </Flex>

        <Flex mt="0.5em" direction={"column"} textAlign={"center"}>
          <Text fontWeight={"bold"}>{collaborator.name}</Text>
          <Text>{collaborator.filiacao}</Text>
        </Flex>
        
      </Flex>
    </>
  );
}
