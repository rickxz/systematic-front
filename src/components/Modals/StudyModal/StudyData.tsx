import { Flex } from "@chakra-ui/react";

interface IStudyDataFiel {
    studyData: (string | number)[];
}

export default function StudyDataFiel({studyData}: IStudyDataFiel) {
    return(
        <Flex bg='gray.500' w="300px" alignContent={'center'} justifyContent={'center'}>
            {
            studyData.map((cell, cellIndex) => (
                <li key={cellIndex}>{cell}</li>
            ))
            }
        </Flex>
    );
}