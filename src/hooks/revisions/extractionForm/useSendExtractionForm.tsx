import axios from "../../../interceptor/interceptor";

interface TextualProps{
    question: string;
    questionId: number;
    reviewId: string;
}

interface PickListProps{
    question: string;
    questionId: number;
    reviewId: string;
    options: string[];
}

const useSendExtractionForm = () => {
    async function sendTextualQuestion({question, questionId, reviewId}: TextualProps){
        let url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/extraction-question/textual`;
        const data = {
            code: questionId,
            description: question
        }

        try{
            let response = await axios.post(url, data, {withCredentials: true});
            console.log(response);
        } catch(err){
            console.log(err);
        }
    }

    async function sendPickListQuestion({question, questionId, reviewId, options}: PickListProps){
        let url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/extraction-question/pick-list`;
        const data = {
            code: questionId,
            description: question,
            options
        }

        try{
            let response = await axios.post(url, data, {withCredentials: true});
            console.log(response);
        } catch(err){
            console.log(err);
        }
    }

    return { sendTextualQuestion, sendPickListQuestion };
}

export default useSendExtractionForm;