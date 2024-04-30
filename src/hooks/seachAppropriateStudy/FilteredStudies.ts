import { ExtractionStatus } from "../../../public/enums/extractionStatus";
import { SelectionStatus } from "../../../public/enums/selectionStatus";
import { StudyInterface } from "../../../public/interfaces/IStudy";
import useFetchStudyData from "./useFetchStudyData";
import {ExcutionFaseEnum} from "../../../public/enums/ExcutionFaseEnum";


export default function FilteredStudies (type: ExcutionFaseEnum): StudyInterface[] {
    
    const studies = useFetchStudyData("../../../public/data/NewStudyData.json");
    var filterStudies: StudyInterface[] = [];

    if (type == ExcutionFaseEnum.SELECTION) 
        filterStudies = studies.filter( study => study.selectionStatus === SelectionStatus.INCLUDED);
    else 
        filterStudies = studies.filter( study => 
    study.selectionStatus === SelectionStatus.INCLUDED && study.extractionStatus === ExtractionStatus.INCLUDED);

    return filterStudies;
}