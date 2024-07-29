import CardIcon from "./CardIcon";
import CardInfos from "./CardInfos";
import EditionInfos from "./EditionInfos";
import { Box, Card } from "@chakra-ui/react";
import EnterRevisionButton from "./EnterRevisionButton";
import { CardInfosConteiner, Cardstyles } from "../styles/revisionCardstyles";
import axios from "../../../interceptor/interceptor";

interface iRevisionCardProps {
  revisionId: string,
  id: string;
  title: string;
  reviewers: string[];
  status: string;
  creation: string;
  isEdited: boolean;
}

export default function RevisionCard({ revisionId, id, title, reviewers, status, creation, /* isEdited */}: iRevisionCardProps) {
  async function redirectToReview(){
    const url = `http://localhost:8080/systematic-study/${revisionId}/protocol`;
    let response = await axios.get(url, {withCredentials: true})
    //primeira página
    console.log(response.data.content.id);
    console.log(response.data.content.systematicStudy);

    console.log(response.data.content.goal);
    console.log(response.data.content.justification);

    console.log(response.data.content.studiesLanguages);
    console.log(response.data.content.eligibilityCriteria);
    console.log(response.data.content.informationSources);
    console.log(response.data.content.keywords);
    console.log(response.data.content.sourcesSelectionCriteria);
    console.log(response.data.content.searchMethod);
    console.log(response.data.content.extractionQuestions);
    console.log(response.data.content.picoc);
    console.log(response.data.content.robQuestions);
    console.log(response.data.content.selectionProcess);
    console.log(response.data.content.studyTypeDefinition);
    console.log(response.data.content.dataCollectionProcess);

    console.log(response.data.content.researchQuestions);
    console.log(response.data.content.analysisAndSynthesisProcess);

    console.log(response.data.content.searchString);

    
    if(response.data.content.goal == null || response.data.content.justification == null){
      window.location.href = `http://localhost:5173/#/newRevision/protocol/${revisionId}`;
    }
    else if (response.data.content.studiesLanguages == null ||
              response.data.content.eligibilityCriteria == null ||
              response.data.content.informationSources == null ||
              response.data.content.keywords == null ||
              response.data.content.sourcesSelectionCriteria == null ||
              response.data.content.searchMethod == null ||
              response.data.content.extractionQuestions == null ||
              response.data.content.picoc == null ||
              response.data.content.robQuestions == null ||
              response.data.content.selectionProcess == null ||
              response.data.content.studyTypeDefinition == null ||
              response.data.content.dataCollectionProcess == null)
              
              window.location.href = ` http://localhost:5173/#/newRevision/protocolpartTwo/${revisionId}`;
    else if ( response.data.content.researchQuestions == null ||
              response.data.content.analysisAndSynthesisProcess == null)  
      window.location.href = ` http://localhost:5173/#/newRevision/selection`;   
  }
  
  return (
    <>
      <Card sx={Cardstyles} onClick={redirectToReview}>
        <CardIcon />
        <CardInfos title={title} reviewers={reviewers}/>
        <Box sx={CardInfosConteiner} id={id}>
          <EnterRevisionButton text="Review Info"/>
          <EditionInfos status={status} creation={creation} /*isEdited={isEdited} */ />
        </Box>
      </Card>
    </>
  );
}
