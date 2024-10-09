import { Flex, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface actionsModal{
    action: "create" | "update";
}

interface Props {
    handleOpenModal: (action: actionsModal) => void;
    timestamp: string,
    numberOfStudies: number
}

const SessionPrev = ({ handleOpenModal, timestamp, numberOfStudies}: Props) => {

    const date = new Date(timestamp);
    let day, month;

    if(date.getDay() < 10) day = `0${date.getDate()}`;
    else day = date.getDay();
    
    if(date.getMonth() < 9) month = `0${date.getMonth() + 1}`;
    else month = `${date.getMonth() + 1}`;
    
    const sessionDate = day + '/' + month;

    return (
    <Flex flex={1} justifyContent="space-between" alignItems="center" py={2} gap={"5px"}>
        <Text textAlign="left" width={"calc(min(60px, 30%))"} textOverflow={"ellipsis"} whiteSpace={"nowrap"} overflow={"hidden"}>{sessionDate}</Text>
        <Text flex="1" textAlign="center" >{numberOfStudies}</Text>

        <Flex width={"140px !important"} justifyContent="flex-end" mt={2}>
            <Button as={Link} to={"/newRevision/identification/15"} flex={1} colorScheme="gray" mr={2} height={"35px"}>View</Button>
            <Button flex={1} colorScheme="gray" height={"35px"}
            onClick={() => handleOpenModal({ action: "update" })}
            >
            Edit
            </Button>
        </Flex>
    </Flex>
    )
}

export default SessionPrev