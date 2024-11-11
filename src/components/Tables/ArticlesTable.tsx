import { Flex, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Text, Tooltip } from "@chakra-ui/react";
import { tdSX } from "../../pages/Execution/styles/CardsStyle";
import FlexLayout from "../ui/Flex/Flex";
import Header from "../ui/Header/Header";
import ArticlesInterface from '../../../public/interfaces/ArticleInterface';

interface Props {
    articles: ArticlesInterface[]
}

function ArticlesTable({articles}: Props) {
    return (
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

                    {articles ? articles.map((e, index) => <Tr
                        _hover={{ bg: "#F5F8F9" }}
                        transition="background-color 0.3s, box-shadow 0.3s"
                    >

                        <Td sx={tdSX}>{index + 1}</Td>
                        
                        <Td sx={tdSX}>
                            <Tooltip label={e.title} aria-label="Título completo"
                            hasArrow
                            placement="right" // Pode ser "top", "bottom", "left", "right"
                            fontSize="xs" // Tamanho da fonte
                            p={3} // Padding do tooltip>
                            >
                                <Text sx={tdSX}>{e.title}</Text>
                            </Tooltip>
                        </Td>

                        <Td sx={tdSX}>
                            <Tooltip label={e.authors} aria-label="Título completo"
                                hasArrow
                                placement="right" // Pode ser "top", "bottom", "left", "right"
                                fontSize="xs" // Tamanho da fonte
                                p={3} // Padding do tooltip>
                                >
                                    <Text sx={tdSX}>{e.authors}</Text>
                            </Tooltip>
                        </Td>
                        <Td sx={tdSX}>
                            <Tooltip label={e.venue} aria-label="Título completo"
                                hasArrow
                                placement="right" // Pode ser "top", "bottom", "left", "right"
                                fontSize="xs" // Tamanho da fonte
                                p={3} // Padding do tooltip>
                                >
                                    <Text sx={tdSX}>{e.venue}</Text>
                            </Tooltip>
                        </Td>
                        
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
    )
}

export default ArticlesTable;