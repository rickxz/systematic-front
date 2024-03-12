import { Checkbox, Flex, Input } from "@chakra-ui/react";

interface IStudyDataFiel {
    studyData: (string | number)[];
}

export default function StudyDataFiel({studyData}: IStudyDataFiel) {
    return(
        <Flex bg='black' w="300px" direction={"column"} alignContent={'center'} justifyContent={'center'} p="5">
            {
            studyData.map((cell, cellIndex) => (
                <Input placeholder="cell" key={cellIndex} bg="gray.700"color="black"/>
            ))
            }
        </Flex>
    );
}