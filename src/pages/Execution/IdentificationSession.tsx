import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FlexLayout from "../../components/ui/Flex/Flex";
import Header from "../../components/ui/Header/Header";
import {Flex} from "@chakra-ui/react";
import useGetSessionStudies from "../../hooks/useGetSessionStudies";
import ArticlesTable from "../../components/Tables/ArticlesTable/ArticlesTable";

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

    return (
        // <ArticlesTable articles={articles}/>
        <FlexLayout defaultOpen={1} navigationType="Accordion">
            <Header text="Search Sessions" />

            <Flex justifyContent={"center"}>
                <ArticlesTable articles={articles}/>
            </Flex>
        </FlexLayout>
    );
}
