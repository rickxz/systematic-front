import { Flex, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Text, Tooltip } from "@chakra-ui/react";
import { collapsedTdSX, tdSX } from "../../../pages/Execution/styles/CardsStyle";
import FlexLayout from "../../ui/Flex/Flex";
import Header from "../../ui/Header/Header";
import ArticlesInterface from '../../../../public/interfaces/ArticleInterface';
import AppContext from "../../Context/AppContext";
import { useContext, useEffect } from "react";
import Collapsed from "./Collapsed";
import Expanded from "./Expanded";

interface Props {
    articles: ArticlesInterface[]
}

function ArticlesTable({articles}: Props) {
    const context = useContext(AppContext);
    if(!context) {
        throw new Error('Failed to get the context on articles table');
    }
    const { sidebarState } = context

    return sidebarState == 'open' ?
    
    <Collapsed articles={articles} />

    :

    <Expanded articles={articles} />
}

export default ArticlesTable;