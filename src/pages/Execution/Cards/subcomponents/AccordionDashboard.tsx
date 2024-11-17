import { useEffect, useState } from "react";
import { Accordionbtn, accordion } from "../../styles/CardsStyle";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import IdentificationModal from "../../../../components/Modals/IdentificationModal";
import SessionPrev from "./SessionPrev";

//hooks
import useGetSession from "../../../../hooks/reviews/useGetSession";

interface actionsModal {
  action: "create" | "update";
}

export default function AccordionDashboard({ type }: { type: string }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [actionModal, setActionModal] = useState<"create" | "update">("create");
  const [sessions, setSessions] = useState<
    {
      id: string;
      systematicStudyd: string;
      userId: string;
      searchString: string;
      additionalInfo: string;
      timestamp: string;
      source: string;
      numberOfRelatedStudies: number;
    }[]
  >([]);

  const getTotalStudiesRelated = () => {
    let totalStudies = 0;

    sessions.map((item) => {
      totalStudies += item.numberOfRelatedStudies;
    });

    return totalStudies;
  };

  useEffect(() => {
    async function fetchSessions() {
      let response = await useGetSession(type);
      console.log(response.data.searchSessions);
      setSessions(response.data.searchSessions);
    }

    fetchSessions();
  }, []);

  const handleOpenModal = ({ action }: actionsModal) => {
    setActionModal(action);
    setShowModal(true);
  };

  const handleDeleteStudies = (id: string) => {
    setSessions(sessions.filter((prevStudies) => prevStudies.id != id));
  };

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <Accordion allowToggle sx={accordion} onChange={handleAccordionToggle}>
      {showModal == true && (
        <IdentificationModal
          show={setShowModal}
          action={actionModal}
          type={type}
          setSessions={setSessions}
        />
      )}

      <AccordionItem>
        <AccordionButton sx={Accordionbtn}>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel>
          {sessions && sessions.length > 0 ? (
            <>
              <Flex
                flex={1}
                fontWeight="bold"
                justifyContent="space-between"
                alignItems="center"
                py={2}
                gap={"3rem"}
              >
                <Flex>
                  <Text
                    
                    textAlign="left"
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                  >
                    Date
                  </Text>
                </Flex>

                <Flex flex={1}>
                  <Text textAlign="center">
                    Studies
                  </Text>
                </Flex>
              </Flex>
              {sessions.map((item, index) => {
                return (
                  <SessionPrev
                    key={index}
                    sessionId={item.id}
                    handleOpenModal={handleOpenModal}
                    handleDelete={handleDeleteStudies}
                    timestamp={item.timestamp}
                    numberOfStudies={item.numberOfRelatedStudies}
                  />
                );
              })}
              <Box>
                <Text>Total: {getTotalStudiesRelated()}</Text>
              </Box>
            </>
          ) : (
            <Text>Studies not found</Text>
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
