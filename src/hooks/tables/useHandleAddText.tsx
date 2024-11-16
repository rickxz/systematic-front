import useSendKeywords from "../../hooks/tables/useSendKeywords";
import useSendInclusionCriteria from "../../hooks/tables/useSendInclusionCriteria";
import useSendExclusionCriteria from "../../hooks/tables/useSendExclusionCriterias";
import useSendResearchQuestions from "../../hooks/tables/useSendResearchQuestions";
import { useToast } from "@chakra-ui/react";

interface ServerOrientedProps{
    value: string;
    text: string;
    onAddText: (newKeyword: string) => void;
    url: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const useHandleAddText = () => {
    const sendKeywords = useSendKeywords();
    const sendResearchQuestion = useSendResearchQuestions();
    const sendCriterias = useSendInclusionCriteria();
    const sendExclusionCriteria = useSendExclusionCriteria();
    const toast = useToast();

    function handleServerOriented({value, text, onAddText, url, setValue}: ServerOrientedProps){
        if (value.trim() !== "") {
            onAddText(value.trim());
            if(text == 'Inclusion criteria'){
              let criteria = {description: value.trim(), type: "INCLUSION"};
              const data = {criteria, url}
              sendCriterias(data);
            }
            else if(text == 'Exclusion criteria'){
              let criteria = {description: value.trim(), type: "EXCLUSION"};
              const data = {criteria, url};
              sendExclusionCriteria(data);
            }
            else if(text == 'Keywords'){
              const data = {
                keyword: value.trim(),
                url
              }
              sendKeywords(data);
            }
            else if(text == 'Research Questions'){
              const data = {
                researchQuestions: value.trim(),
                url
              }
              sendResearchQuestion(data);
            }
            setValue("");
          } else {
            toast({
              title: "Empty Field",
              description: "The field must be filled!",
              status: "warning",
              duration: 4500,
              isClosable: true,
              position: 'top'
            });
          }
    }

    return { handleServerOriented }
}

export default useHandleAddText;
