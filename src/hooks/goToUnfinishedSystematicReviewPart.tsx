import useFetchAllStudies from "./fetch/useFetchAllStudies";
import useFetchProtocol from "./fetch/useFetchProtocol";
import {Protocol} from "../../public/interfaces/protocolInterface";
import {StudyReview} from "../../public/interfaces/studyReviewInterface";


function isProtocolPartOneFinished(response:  Protocol) {
    return response.goal !== null && response.justification !== null
}
    
function isProtocolPartTwoFinished(response:  Protocol) {
    return response.studiesLanguages !== null &&
        response.eligibilityCriteria !== null &&
        response.informationSources !== null &&
        response.keywords !== null &&
        response.sourcesSelectionCriteria !== null &&
        response.searchMethod !== null &&
        response.selectionProcess !== null 
    }

function isProtocolPartThreeFinished(response:  Protocol) {
    return response.researchQuestions !== null &&
           response.analysisAndSynthesisProcess !== null
    }

function isSelectionProcessFinished(response:  StudyReview[]) { 
    return false;
}

function isExtractionProcessFinished(response:  StudyReview[]) { 
    return false;
}





export default async function goToUnfinishedSystematicReviewPart(revisionId: string) {
    const protocolData = await useFetchProtocol(revisionId);
    const studiesData = await useFetchAllStudies(revisionId);

    
    if(!isProtocolPartOneFinished(protocolData)) {
        window.location.href = `http://localhost:5173/#/newRevision/protocol/${revisionId}`;
      }
      else if (!isProtocolPartTwoFinished(protocolData)) {
                  window.location.href = ` http://localhost:5173/#/newRevision/protocolpartTwo/${revisionId}`;
                }
                
      else if (!isProtocolPartThreeFinished(protocolData)) {
        window.location.href = ` http://localhost:5173/#/newRevision/protocolpartThree/${revisionId}`;
      }
        
      else if(!isSelectionProcessFinished(studiesData)) {
        window.location.href = ` http://localhost:5173/#/newRevision/selection`;
      }
      else if (!isExtractionProcessFinished(studiesData)) window.location.href = ` http://localhost:5173/#/newRevision/extraction`;
      else window.location.href = ` http://localhost:5173/#/newRevision/finalization`;
}