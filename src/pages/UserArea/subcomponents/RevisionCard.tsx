import CardIcon from "./CardIcon";
import CardInfos from "./CardInfos";
import EditionInfos from "./EditionInfos";
import { Box, Card } from "@chakra-ui/react";
import EnterRevisionButton from "./EnterRevisionButton";
import { CardInfosConteiner, Cardstyles } from "../styles/revisionCardstyles";

interface iRevisionCardProps {
  id: string;
  title: string;
  RevisorNames: string[];
  lastEdition: string;
  creation: string;
  isEdited: boolean;
}

export default function RevisionCard({ id, title, RevisorNames, lastEdition, creation, isEdited }: iRevisionCardProps) {
  return (
    <>
      <Card sx={Cardstyles}>
        <CardIcon />
        <CardInfos title={title} RevisorNames={RevisorNames} />
        <Box sx={CardInfosConteiner} id={id}>
          <EnterRevisionButton text="Review Info" />
          <EditionInfos lastEdition={lastEdition} creation={creation} isEdited={isEdited} />
        </Box>
      </Card>
    </>
  );
}
