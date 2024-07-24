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
            case "pick list":
                url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/extraction-question/pick-list`;
                data = {
                    code: questionId,
                    description: question,
                    options: ["string"]
                }
                break;
            case "number scale":
                url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/extraction-question/number-scale`;
                data = {
                    code: questionId,
                    description: question,
                    lower: 0,
                    higher: 10
                }
                break;
            case "labeled list":
                url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/extraction-question/labeled-scale`;
                data = {
                    code: questionId,
                    description: question,
                    scales: {
                        aditionalProp1: 0,
                        aditionalProp2: 0
                    }
                }
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