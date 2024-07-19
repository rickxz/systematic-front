import axios from "../../interceptor/interceptor";
import { useState } from "react";

interface KeywordType {
    keyword: string;
    url: string;
}

const useSendKeywords = () => {
    const [keywords, setKeywords] = useState<string[]>([]);
    
    async function sendKeywords({keyword, url}: KeywordType) {
        // fetching keywords from the server
        let response = await axios.get(url, { withCredentials: true });
        const fetchedKeywords = response.data.content.keywords;
        
        // setting the fetched keywords
        setKeywords(fetchedKeywords);
        
        // updating the state with the new keyword
        setKeywords(prevKeywords => {
            const updatedKeywords = [...prevKeywords, keyword];
            // sending updated keywords to the server
            console.log(`updated array: ${updatedKeywords}`);
            const data = { keywords: updatedKeywords };
            axios.put(url, data, { withCredentials: true })
                .then(putResponse => {
                    console.log(putResponse);
                })
                .catch(error => {
                    console.error("Error updating keywords:", error);
                });
            
            return updatedKeywords;
        });
    }

    return sendKeywords;
}

export default useSendKeywords;
