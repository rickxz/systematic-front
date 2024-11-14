import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Text, Tooltip } from '@chakra-ui/react'
import { collapsedTdSX } from '../../../pages/Execution/styles/CardsStyle'
import ArticleInterface from '../../../../public/interfaces/ArticleInterface'

interface Props {
    articles: ArticleInterface[];
}

export default function Expanded({articles}: Props) {
  return (
    (
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
                        <Th w={'5rem'} textAlign='center' color="white">ID Paper</Th>
                        <Th w={'5rem'} textAlign='center' color="white">Title</Th>
                        <Th w={'5rem'} textAlign='center' color="white">Author</Th>
                        <Th w='5rem' textAlign='center' color="white">Year</Th>
                        <Th w='5rem' textAlign='center' color="white">Selection</Th>
                        <Th w='5rem' textAlign='center' color="white">Extraction</Th>
                        <Th w={'5rem'} textAlign='center'  color="white">Reading priority</Th>
                        {/* 
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

                        <Td sx={collapsedTdSX}>{index + 1}</Td>
                        
                        <Td sx={collapsedTdSX}>
                            <Tooltip label={e.title} aria-label="Título completo"
                            hasArrow
                            placement="right" // Pode ser "top", "bottom", "left", "right"
                            fontSize="xs" // Tamanho da fonte
                            p={3} // Padding do tooltip>
                            >
                                <Text sx={collapsedTdSX}>{e.title}</Text>
                            </Tooltip>
                        </Td>

                        <Td sx={collapsedTdSX}>
                            <Tooltip label={e.authors} aria-label="Título completo"
                                hasArrow
                                placement="right" // Pode ser "top", "bottom", "left", "right"
                                fontSize="xs" // Tamanho da fonte
                                p={3} // Padding do tooltip>
                                >
                                    <Text sx={collapsedTdSX}>{e.authors}</Text>
                            </Tooltip>
                        </Td>
                        <Td sx={collapsedTdSX}>
                            <Tooltip label={e.year} aria-label="Título completo"
                                hasArrow
                                placement="right" // Pode ser "top", "bottom", "left", "right"
                                fontSize="xs" // Tamanho da fonte
                                p={3} // Padding do tooltip>
                                >
                                    <Text sx={collapsedTdSX}>{e.year}</Text>
                            </Tooltip>
                        </Td>
                        <Td sx={collapsedTdSX}>
                            <Tooltip label={'accepted'} aria-label="Título completo"
                                hasArrow
                                placement="right" // Pode ser "top", "bottom", "left", "right"
                                fontSize="xs" // Tamanho da fonte
                                p={3} // Padding do tooltip>
                                >
                                    <Text sx={collapsedTdSX}>{'accepted'}</Text>
                            </Tooltip>
                        </Td>
                        <Td sx={collapsedTdSX}>
                            <Tooltip label={'accepted'} aria-label="Título completo"
                                hasArrow
                                placement="right" // Pode ser "top", "bottom", "left", "right"
                                fontSize="xs" // Tamanho da fonte
                                p={3} // Padding do tooltip>
                                >
                                    <Text sx={collapsedTdSX}>{'accepted'}</Text>
                            </Tooltip>
                        </Td>
                        <Td sx={collapsedTdSX}>
                            <Tooltip label={e.readingPriority} aria-label="Título completo"
                                hasArrow
                                placement="right" // Pode ser "top", "bottom", "left", "right"
                                fontSize="xs" // Tamanho da fonte
                                p={3} // Padding do tooltip>
                                >
                                    <Text sx={collapsedTdSX}>{e.readingPriority}</Text>
                            </Tooltip>
                        </Td>
                        
                    </Tr>) : <p>no articles Found</p>}

                </Tbody>
            </Table>
        </TableContainer>
    )
  )
}
