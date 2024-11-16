import { Button, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { boxconteiner, buttonconteiner, conteiner } from "../../../styles/BtnSelectionStyles";
import ComboBox from "../../../../../components/Inputs/ComboBox";
import useInputState from "../../../../../hooks/useInputState";
import { FaPen } from "react-icons/fa6";
import { useContext } from "react";
import AppContext from "../../../../../components/Context/AppContext";
import { StudyInterface } from "../../../../../../public/interfaces/IStudy";
import StudyEdtionModal from "../../../../../components/Modals/StudyModal/StudyEdtionModal";
import useFetchInclusionCriteria from "../../../../../hooks/fetch/useFetchInclusionCriteria";
import useFetchExclusionCriteria from "../../../../../hooks/fetch/useFetchExclusionCriterias";

export default function ButtonsForSelection() {
  const context = useContext(AppContext);
  const sortedStudies = (context?.selectionStudies as StudyInterface[]);
  const index = (context?.selectionStudyIndex as number);
  const { isOpen, onOpen, onClose} = useDisclosure();
  const criteriosExclusao: string[] = useFetchExclusionCriteria();
  const criteriosInclusao: string[] = useFetchInclusionCriteria();
  const { handleChange: handleCheckboxChange } = useInputState<string[]>([]);

  function ChangeToNext() {
    if (index < sortedStudies.length -1) {
      const newIndex = (index as number) + 1;
      context?.setSelectionStudyIndex(newIndex)
      context?.setSelectionStudy((sortedStudies as StudyInterface[])[newIndex])
    }
  }

  function ChangeToPrevius() {
    if (index >= 1) {
      const newIndex = (index as number) - 1;
      context?.setSelectionStudyIndex(newIndex)
      context?.setSelectionStudy((sortedStudies as StudyInterface[])[newIndex])
    }
  }

  return (
    <>
      <Flex sx={conteiner}>
      <Flex direction={"row"} p="2">
        <IconButton aria-label="Edit Study Data" w="28px" h="28px" icon={<FaPen />} onClick={onOpen}/>
      </Flex>

        <Flex sx={boxconteiner}>
          
          <ComboBox
            text="Exclude"
            options={criteriosExclusao}
            handleCheckboxChange={handleCheckboxChange}
            selectedItems={criteriosExclusao}
          />
          <ComboBox
            text="Include"
            options={criteriosInclusao}
            handleCheckboxChange={handleCheckboxChange}
            selectedItems={criteriosInclusao}
          />
        </Flex>

        <Flex sx={buttonconteiner}>
          <Button borderRadius={"3px"} onClick={ChangeToPrevius}>Previous</Button>
          <Button borderRadius={"3px"} onClick={ChangeToNext}>Next</Button>
        </Flex>

        <Button borderRadius={"3px"}>Redifine</Button>
      </Flex>
      {
          isOpen ? (
            <StudyEdtionModal isOpen={isOpen} onClose={onClose} study={(context?.selectionStudy as StudyInterface)} />
          ) : (<></>)
        }
    </>
  );
}
