import { Box, Checkbox, CheckboxGroup, Container, Flex, Heading, Spacer, Stack } from "@chakra-ui/react";

export default function StatusSelection() {
    return(
        <Container style={{ maxHeight: "350px", overflowY: "auto"}}>
            <Heading as="h1" textAlign="center" my="1rem">Selection Data</Heading>
            <Flex>
                <Box>
                    <Heading as="h3" size="md" textAlign="center" mb="1rem">Inclusion Criterias</Heading>
                    <CheckboxGroup colorScheme="green">
                        <Stack direction="column" spacing=".5rem">
                            <Checkbox>First Criteria</Checkbox>
                            <Checkbox>Second Criteria</Checkbox>
                            <Checkbox>Third Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </Box>

                <Spacer/>

                <Box>
                    <Heading as="h3" size="md" textAlign="center" mb="1rem">Exclusion Criterias</Heading>
                    <CheckboxGroup colorScheme="green">
                        <Stack direction="column" spacing=".5rem">
                            <Checkbox>First Criteria</Checkbox>
                            <Checkbox>Second Criteria</Checkbox>
                            <Checkbox>Third Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                            <Checkbox>n Criteria</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </Box>
            </Flex>
        </Container>
    );
}