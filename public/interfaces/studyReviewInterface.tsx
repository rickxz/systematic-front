interface Criteria {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  }
  
  interface FormAnswers {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  }
  
  interface RobAnswers {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  }
  
  export interface StudyReview {
    studyReviewId: number;
    systematicStudyId: string;
    studyType: string;
    title: string;
    year: number;
    authors: string;
    venue: string;
    abstract: string;
    keywords: string[];
    references: string[];
    doi: string;
    searchSources: string[];
    criteria: Criteria;
    formAnswers: FormAnswers;
    robAnswers: RobAnswers;
    comments: string;
    readingPriority: string;
    extractionStatus: string;
    selectionStatus: string;
  }
  