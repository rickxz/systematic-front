import {StudyType} from "./../enums/studyType";
import {CriteriaType} from "./../enums/CriteriaType";
import {ReadingPriority} from "./../enums/readingPriority";
import {SelectionStatus} from "./../enums/selectionStatus";
import {ExtractionStatus} from "./../enums/extractionStatus";



interface StudyReview {
    studyId: number;
    systematicStudyId: number;
    studyType: StudyType;
    title: string;
    year: number;
    authors: string;
    venue: string;
    abstract: string;
    doi?: string | null;
    keywords: string[];
    searchSources: string[];
    references: string[];
    criteria: CriteriaType;
    formAnswers: any[]; // Defina o tipo correto para a resposta do formulário
    robAnswers: any[]; // Defina o tipo correto para a resposta do ROB
    comments: string;
    readingPriority: ReadingPriority;
    selectionStatus: SelectionStatus;
    extractionStatus: ExtractionStatus;
}