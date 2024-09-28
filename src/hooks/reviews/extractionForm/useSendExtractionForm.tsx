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

interface NumberScaleProps{
    question: string;
    questionId: number;
    reviewId: string;
    lower: number,
    higher: number
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
            return response.data.questionId;
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
            return response.data.questionId;
        } catch(err){
            console.log(err);
        }
    }

    async function sendNumberScaleQuestion({question, questionId, reviewId, lower, higher}: NumberScaleProps){
        let url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/extraction-question/number-scale`;
        console.log(typeof(lower));
        
        const data = {
            code: questionId,
            description: question,
            lower: lower,
            higher: higher
        }

        try{
            let response = await axios.post(url, data, {withCredentials: true});
            console.log(response);
            return response.data.questionId;
        } catch(err){
            console.log(err);
        }
    }

    return { sendTextualQuestion, sendPickListQuestion, sendNumberScaleQuestion };
}

export default useSendExtractionForm;