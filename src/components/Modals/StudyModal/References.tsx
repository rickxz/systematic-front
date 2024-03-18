import { HStack, Container, Text, Input, InputGroup, Flex, Heading, Button } from "@chakra-ui/react";
import TextAreaInput from "../../Inputs/InputTextArea";

export default function References() {
    return(
        <Container p="1px" style={{ maxHeight: "300px", overflowY: "auto" }}>
            <Heading textAlign="center" mb=".5em">References</Heading>

            <Container background="gray.300" border="1px solid black" my=".5rem">
                <Flex>
                    <HStack spacing='.2em' mt=".5em">
                        <Text fontWeight="bold" my=".5rem" mr=".3em">Author:</Text>
                        <InputGroup>
                            <Input w="19.5em"  variant='filled' placeholder="Garfield, Andre; Manguari, Toni" 
                            _placeholder={{ color: 'black', opacity: "1" }}></Input>
                        </InputGroup>
                    </HStack>
                    <Flex mt=".5em">
                        <Text fontWeight="bold" my=".5rem" ml=".5em" mr=".3em">Year:</Text>
                        <InputGroup>
                            <Input w="4.3em" variant='filled' placeholder="2021" 
                            _placeholder={{ color: 'black', opacity: "1" }}></Input>
                        </InputGroup> 
                    </Flex>       
                </Flex>
                <Text mt=".7rem" fontWeight="bold">Full Refference:</Text>
                <Flex>
                    <InputGroup>
                        <TextAreaInput w="24em" variant='filled' style={{ maxHeight: "200px", overflowY: "auto" }} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in rhoncus nulla, id dapibus est. Curabitur eu gravida dui, vel posuere felis. " 
                        _placeholder={{ color: 'black', opacity: "1" }}></TextAreaInput>
                    </InputGroup>
                    <Button my="1.5em" mx=".2em" colorScheme="blackAlpha">New Revision</Button> 
                </Flex>    
            </Container>


            <Container background="gray.300" border="1px solid black" my=".5rem">
                <Flex>
                    <HStack spacing='.2em' mt=".5em">
                        <Text fontWeight="bold" my=".5rem" mr=".3em">Author:</Text>
                        <InputGroup>
                            <Input w="19.5em"  variant='filled' placeholder="Garfield, Andre; Manguari, Toni" 
                            _placeholder={{ color: 'black', opacity: "1" }}></Input>
                        </InputGroup>
                    </HStack>
                    <Flex mt=".5em">
                        <Text fontWeight="bold" my=".5rem" ml=".5em" mr=".3em">Year:</Text>
                        <InputGroup>
                            <Input w="4.3em" variant='filled' placeholder="2021" 
                            _placeholder={{ color: 'black', opacity: "1" }}></Input>
                        </InputGroup> 
                    </Flex>       
                </Flex>
                <Text mt=".7rem" fontWeight="bold">Full Refference:</Text>
                <Flex>
                    <InputGroup>
                        <TextAreaInput w="24em" variant='filled' style={{ maxHeight: "200px", overflowY: "auto" }} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in rhoncus nulla, id dapibus est. Curabitur eu gravida dui, vel posuere felis. " 
                        _placeholder={{ color: 'black', opacity: "1" }}></TextAreaInput>
                    </InputGroup>
                    <Button my="1.5em" mx=".2em" colorScheme="blackAlpha">New Revision</Button> 
                </Flex>    
            </Container>


            <Container background="gray.300" border="1px solid black" my=".5rem">
                <Flex>
                    <HStack spacing='.2em' mt=".5em">
                        <Text fontWeight="bold" my=".5rem" mr=".3em">Author:</Text>
                        <InputGroup>
                            <Input w="19.5em"  variant='filled' placeholder="Garfield, Andre; Manguari, Toni" 
                            _placeholder={{ color: 'black', opacity: "1" }}></Input>
                        </InputGroup>
                    </HStack>
                    <Flex mt=".5em">
                        <Text fontWeight="bold" my=".5rem" ml=".5em" mr=".3em">Year:</Text>
                        <InputGroup>
                            <Input w="4.3em" variant='filled' placeholder="2021" 
                            _placeholder={{ color: 'black', opacity: "1" }}></Input>
                        </InputGroup> 
                    </Flex>       
                </Flex>
                <Text mt=".7rem" fontWeight="bold">Full Refference:</Text>
                <Flex>
                    <InputGroup>
                        <TextAreaInput w="24em" variant='filled' style={{ maxHeight: "200px", overflowY: "auto" }} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in rhoncus nulla, id dapibus est. Curabitur eu gravida dui, vel posuere felis. " 
                        _placeholder={{ color: 'black', opacity: "1" }}></TextAreaInput>
                    </InputGroup>
                    <Button my="1.5em" mx=".2em" colorScheme="blackAlpha">New Revision</Button> 
                </Flex>    
            </Container>

            

        </Container>
    );
}