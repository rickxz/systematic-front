export default function HeroSection() {
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
      <Box paddingTop={"4%"} h="75vh" display={"flex"} justifyContent={"center"} flexDir={mainDirection} gap={10}>
        <Flex gap="25px">
              <Image src={src} alt={alt} borderRadius="30px" />
              <Flex direction="column" alignItems="center" gap="50px" order={textIndex}>
                <Heading color={styles.textColor} alignSelf={"center"}>
                  {header}
                </Heading>
                  <Text color={styles.textColor}>{bodyText}</Text>
                  <Button w="40%" colorScheme={styles.buttonColor}>
                    Saiba mais
                  </Button>
              </Flex>
        </Flex>
      </Box>
    </Flex>
    );
}