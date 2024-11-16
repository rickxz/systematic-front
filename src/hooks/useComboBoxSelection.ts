import { useContext } from "react";
import StudySelectionContext from "../components/Context/StudiesSelectionContext";

const useComboBoxSelection = () => {
  const selectionContext = useContext(StudySelectionContext);
  const setIsIncluded = selectionContext?.setIsIncluded;
  const setIsExcluded = selectionContext?.setIsExcluded;

  const handleIncludeItemClick = (isChecked: boolean) => {
    if(setIsIncluded) setIsIncluded(isChecked);
  };

  const handleExcludeItemClick = (isChecked: boolean) => {
    if(setIsExcluded) setIsExcluded(isChecked);
  }

  return { handleIncludeItemClick, handleExcludeItemClick };
};

export default useComboBoxSelection;
