import axios from "../../interceptor/interceptor";

interface KeywordType {
    keyword: string;
    url: string;
}

const useSendKeywords = () => {
    async function sendKeywords({ keyword, url }: KeywordType) {
        const accessToken = localStorage.getItem('accessToken');
        let options = {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
        
        let response = await axios.get(url, options);
        const fetchedKeywords = response.data.content.keywords;
        
        
        const updatedKeywords = [...fetchedKeywords, keyword];
        console.log(`updated array: ${updatedKeywords}`);
        
        
        const data = { keywords: updatedKeywords };
        let putResponse = await axios.put(url, data, options);
        console.log(putResponse);
    }

    return sendKeywords;
}

export default useSendKeywords;
