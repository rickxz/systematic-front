import { Flex } from "@chakra-ui/react";
import ContactCard from "./subComponent/ContactCard";
import EmailArea from "./subComponent/EmailArea";

export default function ContactSection() {
    return (
        <Flex justifyContent="center">
            <Flex wrap={"wrap"} w="500px" h="500px" gap="50px">
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />

            </Flex>
            <EmailArea />
        </Flex>
    );
}