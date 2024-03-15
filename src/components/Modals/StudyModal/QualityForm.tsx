import { Box, Container, Heading, Input, Text, Select } from "@chakra-ui/react";

const boxTheme = {
        my: "1rem",
    }

const textTheme ={
        fontWeight: "bold",
        mb: '4px',
    }
export default function QualityForm() {
    return(
        <Container flex="row" style={{ maxHeight: "300px", overflowY: "auto" }}>
            <Heading textAlign="center" my="1rem">Quality Form</Heading>
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
                <Text sx={textTheme}>Label:</Text>
                <Select
                    placeholder='Placeholder'
                    />
            </Box>
            <Box sx={boxTheme}>
                <Text sx={textTheme}>Label:</Text>
                <Select
                    placeholder='Placeholder'
                    />
            </Box>
            <Box sx={boxTheme}>
                <Text sx={textTheme}>Label:</Text>
                <Input
                    placeholder='Placeholder'
                    size='md'
                />
            </Box>
            <Box sx={boxTheme}>
                <Text sx={textTheme}>Label:</Text>
                <Input
                    placeholder='Placeholder'
                    size='md'
                />
            </Box>
            <Box sx={boxTheme}>
                <Text sx={textTheme}>Label:</Text>
                <Input
                    placeholder='Placeholder'
                    size='md'
                />
            </Box>
            
            
        </Container>
    );
}