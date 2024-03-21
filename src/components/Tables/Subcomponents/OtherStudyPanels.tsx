import { useContext } from "react";
import ModalContext from "./ModalContext";
import SelectionData from "../../Modals/StudyModal/SelectionData";
import DataExtractionForm from "../../Modals/StudyModal/DataExtractionForm";
import SimilarStudies from "../../Modals/StudyModal/SimilarStudies";
import QualityForm from "../../Modals/StudyModal/QualityForm";
import References from "../../Modals/StudyModal/References";




export default function OtherStudyPanels() {
    const context = useContext(ModalContext);

    if (context?.PanelState == "Selection Data") return(<SelectionData/>);
    if (context?.PanelState == "Data Extraction Form") return(<DataExtractionForm/>);
    if (context?.PanelState == "Similar Studies") return(<SimilarStudies/>);
    if (context?.PanelState == "Quality Form") return(<QualityForm/>);
    if (context?.PanelState == "References") return(<References/>);
    return (<></>);
}