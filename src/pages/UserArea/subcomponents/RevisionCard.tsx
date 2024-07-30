import CardIcon from "./CardIcon";
import CardInfos from "./CardInfos";
import EditionInfos from "./EditionInfos";
import { Box, Card } from "@chakra-ui/react";
import EnterRevisionButton from "./EnterRevisionButton";
import { CardInfosConteiner, Cardstyles } from "../styles/revisionCardstyles";
import goToUnfinishedSystematicReviewPart from "../../../hooks/goToUnfinishedSystematicReviewPart";

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
    goToUnfinishedSystematicReviewPart(revisionId);
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
