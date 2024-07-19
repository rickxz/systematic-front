import axios from "../../interceptor/interceptor";

interface KeywordType {
    keyword: string;
    url: string;
}

const useSendKeywords = () => {
    async function sendKeywords({ keyword, url }: KeywordType) {
        // Fetching keywords from the server
        let response = await axios.get(url, { withCredentials: true });
        const fetchedKeywords = response.data.content.keywords;
        
        // Adding the new keyword to the fetched keywords
        const updatedKeywords = [...fetchedKeywords, keyword];
        console.log(`updated array: ${updatedKeywords}`);
        
        // Sending updated keywords to the server
        const data = { keywords: updatedKeywords };
        let putResponse = await axios.put(url, data, { withCredentials: true });
        console.log(putResponse);
    }

    return sendKeywords;
}

export default useSendKeywords;
