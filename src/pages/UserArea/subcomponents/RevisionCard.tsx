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
    console.log(response);
    if(response.data.content.goal == null || response.data.content.justification == null){
      window.location.href = `http://localhost:5173/#/newRevision/protocol/${revisionId}`;
    }
    else console.log("continuar lógica de continuar protocolo");
    
  }
  
  return (
    <>
      <Card sx={Cardstyles}>
        <CardIcon />
        <CardInfos title={title} reviewers={reviewers} reviewId={revisionId}/>
        <Box sx={CardInfosConteiner} id={id}>
          <EnterRevisionButton text="Review Info" event={redirectToReview}/>
          <EditionInfos status={status} creation={creation} /*isEdited={isEdited} */ />
        </Box>
      </Card>
    </>
  );
}
