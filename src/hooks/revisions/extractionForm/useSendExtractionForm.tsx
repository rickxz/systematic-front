import axios from "../../../interceptor/interceptor";

interface Props{
    question: string;
    type: string;
    questionId: number;
    reviewId: string;
}

const useSendExtractionForm = () => {
    async function sendExtractionForm({question, type, questionId, reviewId}: Props){
        let url: string = '';
        let data = {};

        switch (type) {
            case "textual":
                url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/extraction-question/textual`;
                data = {
                    code: questionId,
                    description: question
                }
                break;
            case "Pick list":
                url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/extraction-question/pick-list`;
                break;
            case "Number scale":
                url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/extraction-question/number-scale`;
                break;
            case "Labeled scale":
                url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/extraction-question/labeled-scale`;
                break;
            default: 
                throw new Error('invalid question type!');
        }

        try{
        let response = await axios.post(url, data, {withCredentials: true});
        console.log(response);
        } catch(err){
            console.log(err);
        }
    }

    return { sendExtractionForm };
}

export default useSendExtractionForm