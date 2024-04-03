import { Box, Container, Text, Input, Heading, Select, CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";
import useFetchExtractionForm from "../../../hooks/fetch/useFetchExtractionForm";

const boxTheme = {
    my: "1rem",
}
const textTheme ={
    fontWeight: "bold",
    mb: '4px',
}

export default function DataExtractionForm() {
    const extractionForm = useFetchExtractionForm("../../../../public/data/dataExtractionForm.json");

    console.log(extractionForm);

    return(
        <Container flex="row" style={{ maxHeight: "350px", overflowY: "auto" }}>
            <Heading textAlign="center" my="1rem">Data Extraction Form</Heading>
            <Box sx={boxTheme}>
                <Text sx={textTheme}>Label:</Text>
                <Input
                    placeholder= {extractionForm?.label}
                    size='md'
                />
            </Box>
            <Box sx={boxTheme}>
                <Text sx={textTheme}>Label:</Text>
                <Select placeholder='Select option'>
                    {extractionForm?.selector.map((option) => <option value={option}>{option}</option>)}
                </Select>
            </Box>
            <Box sx={boxTheme}>
                <Text sx={textTheme}>Checkbox List:</Text>
                <CheckboxGroup colorScheme='green'>
                    <Stack direction={['column']}>
                        {extractionForm?.checkboxes.map((option) => <Checkbox>{option}</Checkbox>)}
                    </Stack>
                </CheckboxGroup>
            </Box>
            
            
        </Container>
    );
}