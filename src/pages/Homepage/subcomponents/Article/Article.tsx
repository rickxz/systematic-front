import { Flex, Text, Image, Button, Heading, Box } from "@chakra-ui/react";

interface IArticle {
  header: string;
  bodyText: string;
  src: string;
  alt: string;
  imgPosition: string;
  style: string;
  id: string;
}

export default function Article({ header, bodyText, src, alt, imgPosition, style, id }: IArticle) {
  interface CustomStyles {
    textColor: string;
    background: string;
    buttonColor: string;
  }

  // Implementação do objeto
  const styles: CustomStyles = {
    textColor: "",
    background: "",
    buttonColor: "",
  };

  if (style === "dark") {
    styles.background = "gray.400";
    styles.buttonColor = "gray";
    styles.textColor = "black";
  }
  if (style === "light") {
    styles.background = "gray.200";
    styles.buttonColor = "blackAlpha";
    styles.textColor = "black";
  }

  let mainDirection: "column" | "column-reverse" = "column";
  let imgDirection: "row" | "row-reverse" = "row";
  let imgIndex: number = 1;
  let textIndex: number = 2;

  if (imgPosition === "right") {
    imgDirection = "row";
    imgIndex = 2;
    textIndex = 1;
  } else if (imgPosition === "top") {
    mainDirection = "column-reverse";
    imgIndex = 2;
    textIndex = 1;
  } else if (imgPosition === "bottom") {
    mainDirection = "column-reverse";
    imgIndex = 1;
    textIndex = 2;
  }

  return (
    <Flex
      direction={mainDirection}
      alignItems="center"
      gap="50px"
      pt="30px"
      pb="30px"
      pl="300px"
      pr="300px"
      background={styles.background}
      id={id}
    >
      {" "}
      <Box paddingTop={"4%"} display={"flex"} flexDir={mainDirection} gap={10}>
        <Heading color={styles.textColor} alignSelf={"center"}>
          {header}
        </Heading>
        <Flex gap="25px" direction={imgDirection}>
          {imgPosition === "left" || imgPosition === "top" ? (
            <>
              <Image src={src} alt={alt} borderRadius="30px" order={imgIndex} />
              <Flex direction="column" alignItems="center" gap="50px" order={textIndex}>
                <Text color={styles.textColor}>{bodyText}</Text>
                <Button w="40%" colorScheme={styles.buttonColor}>
                  Saiba mais
                </Button>
              </Flex>
            </>
          ) : (
            <>
              <Flex direction="column" alignItems="center" gap="50px" order={textIndex}>
                <Text color={styles.textColor}>{bodyText}</Text>
                <Button w="40%" colorScheme={styles.buttonColor}>
                  Saiba mais
                </Button>
              </Flex>
              <Image src={src} alt={alt} borderRadius="30px" order={imgIndex} />
            </>
          )}
        </Flex>
      </Box>
    </Flex>
  );
}
