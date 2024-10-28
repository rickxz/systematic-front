import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../interceptor/interceptor";
import { tdSX } from "./styles/CardsStyle";
import FlexLayout from "../../components/ui/Flex/Flex";
import Header from "../../components/ui/Header/Header";
import {
    Flex,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Box,
} from "@chakra-ui/react";
import useGetSessionStudies from "../../hooks/useGetSessionStudies";

export default function IdentificationSession() {
    const { session = "" } = useParams();
    const [articles, setArticles] = useState<{title: string, authors: string, venue: string} []>([]);

    useEffect(() => {
        async function fetchArticles() {
            let response = await useGetSessionStudies(session);
            console.log(response);
            setArticles(response.data.studyReviews);
        }

        fetchArticles();
    }, []);

    function returnIdentification() {
        window.history.back();
    }

    return (
        <FlexLayout defaultOpen={1} navigationType="Accordion">
            <Header text="Search Sessions" />

            <Flex justifyContent={"center"}>
                <TableContainer 
                    width={"80%"}
                    mt={5}  
                    borderRadius="15px 15px 0 0" 
                    boxShadow="lg" 
                    bg="#EBF0F3"
                >
                    <Table
                        variant="simple"
                        colorScheme="#263C56"
                        size="md"
                        boxShadow="md"
                    >
                        <Thead bg="#263C56" borderRadius={10}>
                            <Tr>
                                <Th color="white">ID Paper</Th>
                                <Th color="white">Title</Th>
                                <Th color="white">Author</Th>
                                <Th color="white">Journal</Th>

                                {/* <Th color="white">Year</Th>
                                <Th color="white">Status/Selection</Th>
                                <Th color="white">Status/Extraction</Th>
                                <Th color="white">Reading Priority</Th>
                                <Th color="white">Score</Th> */}
                            </Tr>
                            
                        </Thead>
                        <Tbody>
                            {/*     <Tr
                                    key={index}
                                    _hover={{ bg: "teal.50", boxShadow: "md" }}
                                    transition="background-color 0.3s, box-shadow 0.3s"
                                >
                                    <Td>{article.id}</Td>
                                    <Td>{article.title}</Td>
                                    <Td>{article.author}</Td>
                                    <Td>{article.journal}</Td>
                                </Tr>
                            ))} */}

                            {articles ? articles.map(e => <Tr
                                _hover={{ bg: "#F5F8F9" }}
                                transition="background-color 0.3s, box-shadow 0.3s"
                            >

                                <Td sx={tdSX}></Td>
                                <Td sx={tdSX}>{e.title}</Td>
                                <Td sx={tdSX}>{e.authors}</Td>
                                <Td sx={tdSX}>{e.venue}</Td>
                                
                            </Tr>) : <p>no articles Found</p>}
                            {/* <Tr
                                _hover={{ bg: "#F5F8F9" }}
                                transition="background-color 0.3s, box-shadow 0.3s"
                            >

                                <Td>2</Td>
                                <Td>title</Td>
                                <Td>author</Td>
                                <Td>Journal</Td>
                                
                            </Tr>
                            <Tr
                                _hover={{ bg: "#F5F8F9" }}
                                transition="background-color 0.3s,box-shadow 0.3s"
                            >

                                <Td>3</Td>
                                <Td>title</Td>
                                <Td>author</Td>
                                <Td>Journal</Td>
                                
                            </Tr> */}


                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
        </FlexLayout>
    );
}
