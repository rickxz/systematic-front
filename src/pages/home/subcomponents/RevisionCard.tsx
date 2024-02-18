import { Box, Card } from "@chakra-ui/react";
import CardIcon from "./CardIcon";
import CardInfos from "./CardInfos";
import EditionInfos from "./EditionInfos";
import EnterRevisionButton from "./EnterRevisionButton";

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
      <Card
        h={"100PX"}
        w={"1010px"}
        boxShadow={"0 4px 12px 0 rgba(0, 0 , 0, 0.5)"}
        display={"flex"}
        flexDir="row"
        borderRadius={"20px"}
        ml={"5%"}
        fontSize={"12px"}
        justifySelf={"flex-start"}
      >
        <CardIcon />
        <CardInfos title={title} RevisorNames={RevisorNames} />
        <Box ml={"150px"} w={"fit-content"} id={id}>
          <EnterRevisionButton text="Review Info" />
          <EditionInfos lastEdition={lastEdition} creation={creation} isEdited={isEdited} />
        </Box>
      </Card>
    </>
  );
}
