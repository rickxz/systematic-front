import { Box, Container, Text, Input, Heading, Select, CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";

const boxTheme = {
    my: "1rem",
}
const textTheme ={
    fontWeight: "bold",
    mb: '4px',
}

export default function DataExtractionForm() {
    return(
        <Container flex="row" style={{ maxHeight: "300px", overflowY: "auto" }}>
            <Heading textAlign="center" my="1rem">Data Extraction Form</Heading>
            <Box sx={boxTheme}>
                <Text sx={textTheme}>Label:</Text>
                <Input
                    placeholder='Placeholder'
                    size='md'
                />
            </Box>
            <Box sx={boxTheme}>
                <Text sx={textTheme}>Label:</Text>
                <Select
                    placeholder='Placeholder'
                    />
            </Box>
            <Box sx={boxTheme}>
                <Text sx={textTheme}>Checkbox List:</Text>
                <CheckboxGroup colorScheme='green'>
                    <Stack direction={['column']}>
                        <Checkbox>Checkbox</Checkbox>
                        <Checkbox>Checkbox</Checkbox>
                        <Checkbox>Checkbox</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </Box>
            
            
        </Container>
    );
}