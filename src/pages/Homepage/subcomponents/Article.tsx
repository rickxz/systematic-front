import { Flex, Text, Image, Button, Heading } from "@chakra-ui/react";

interface IArticle {
    header: string;
    bodyText: string;
    src: string;
    alt: string;
    imgPosition: string;
    style: string;
}

export default function Article({header, bodyText, src, alt, imgPosition, style}: IArticle) {
    interface CustomStyles {
        textColor: string;
        background: string;
        buttonColor: string;
    }
    
    // Implementação do objeto
    const styles: CustomStyles = {
        textColor: "",
        background: "",
        buttonColor: ""
    };

    if (style == "dark") {
        styles.background = "gray.900";
        styles.buttonColor = "gray";
        styles.textColor = "white";
    }
    if (style == "light") {
        styles.background = "gray.200";
        styles.buttonColor = "blackAlpha";
        styles.textColor = "black";
    }

    if ( imgPosition === "left") return (
        <Flex direction="column" alignItems={"center"} gap="50px" pt="30px" pb="30px" pl="150px" pr="150px" background={styles.background}>
            <Heading color={styles.textColor}>{header}</Heading>
            <Flex gap="25px">
                <Flex direction={"column"} alignItems={"center"} gap="50px">
                    <Text color={styles.textColor}>{bodyText}</Text>
                    <Button w={"40%"} colorScheme={styles.buttonColor}>Saiba mais</Button>
                </Flex>
                <Image src={src} alt={alt} borderRadius="30px"/>
            </Flex>
        </Flex>
    );
    
    if ( imgPosition === "right") return (
        <Flex direction="column" alignItems={"center"} gap="50px" pt="30px" pb="30px" pl="150px" pr="150px" background={styles.background}>
            <Heading color={styles.textColor}>{header}</Heading>
            <Flex gap="25px">
                <Image src={src} alt={alt} borderRadius="30px"/>
                <Flex direction={"column"} alignItems={"center"} gap="50px">
                    <Text color={styles.textColor}>{bodyText}</Text>
                    <Button w={"40%"} colorScheme={styles.buttonColor}>Saiba mais</Button>
                </Flex>
            </Flex>
        </Flex>
    );

    if ( imgPosition === "top") return (
        <Flex direction="column" alignItems={"center"} gap="50px" pt="30px" pb="30px" pl="150px" pr="150px" background={styles.background}>
            <Heading color={styles.textColor}>{header}</Heading>
            <Flex gap="25px" direction="column" >
                <Image src={src} alt={alt} borderRadius="30px"/>
                <Flex direction={"column"} alignItems={"center"} gap="50px">
                    <Text color={styles.textColor}>{bodyText}</Text>
                    <Button w={"40%"} colorScheme={styles.buttonColor}>Saiba mais</Button>
                </Flex>
            </Flex>
        </Flex>
    );

    if ( imgPosition === "bottom") return (
        <Flex direction="column" alignItems={"center"} gap="50px" pt="30px" pb="30px" pl="150px" pr="150px" background={styles.background}>
            <Heading color={styles.textColor}>{header}</Heading>
            <Flex gap="25px" direction="column" >
                <Flex direction={"column"} alignItems={"center"} gap="50px">
                    <Text color={styles.textColor}>{bodyText}</Text>
                    <Button w={"40%"} colorScheme={styles.buttonColor}>Saiba mais</Button>
                </Flex>
                <Image src={src} alt={alt} borderRadius="30px"/>
            </Flex>
        </Flex>
    );

    return(
        <>Falta informar o valor da props 'imgPosition'!</>
    );
}