import useSendKeywords from "../../hooks/tables/useSendKeywords";
import useSendInclusionCriteria from "../../hooks/tables/useSendInclusionCriteria";
import useSendExclusionCriteria from "../../hooks/tables/useSendExclusionCriterias";

interface ServerOrientedProps{
    value: string;
    text: string;
    onAddText: (newKeyword: string) => void;
    url: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const useHandleAddText = () => {

    const sendKeywords = useSendKeywords();
    const sendCriterias = useSendInclusionCriteria();
    const sendExclusionCriteria = useSendExclusionCriteria();

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
            setValue("");
          } else {
            window.alert("The field must be filled!");
          }
    }

    return { handleServerOriented }
}

export default useHandleAddText;
