import axios from "../../interceptor/interceptor";

interface KeywordType{
    keyword: string;
    url: string;
}

const useSendKeywords = () => {
    async function sendKeywords({keyword, url}: KeywordType){
        //first of all we'll check if the are any keywords already exists
        let response = await axios.get(url, {withCredentials: true});
        let keywords = response.data.content.keywords;
        console.log(keywords);


        
    }

    return sendKeywords;
}

export default useSendKeywords