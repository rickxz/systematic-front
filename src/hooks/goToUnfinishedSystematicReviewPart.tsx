import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchAllStudies from "./fetch/useFetchAllStudies";
import useFetchProtocol from "./fetch/useFetchProtocol";

export default async function goToUnfinishedSystematicReviewPart(systematicStudyId: string) {
    const [protocol, setProtocol] = useState(null);
    const [studies, setStudies] = useState(null);
    
    const protocolData = await useFetchProtocol(systematicStudyId);
    setProtocol(protocolData);
                
    const studiesData = await useFetchAllStudies(systematicStudyId);
    setStudies(studiesData);

    console.log(protocol);
    console.log(studies);
    

    function protocolPartOneIsFinished(protocol: any): boolean {
        return false;
    }

    function protocolPartTwoIsFinished(protocol: any): boolean {
        return false;
    }

    function protocolPartThreeIsFinished(protocol: any): boolean {
        return false;
    }

    function SelectionIsFinished(studies: any): boolean {
        return false;
    }

    function ExtractionIsFinished(studies: any): boolean {
        return false;
    }


    const stillInProtocolOne = protocolPartOneIsFinished(protocol);
    const stillInProtocolTwo = protocolPartTwoIsFinished(protocol);
    const stillInProtocolThree = protocolPartThreeIsFinished(protocol);
    const stillInSelection = SelectionIsFinished(studies);
    const stillInExtraction = ExtractionIsFinished(studies);

    if (stillInProtocolOne) console.log("/newRevision/protocol");
    else if (stillInProtocolTwo) console.log("/newRevision/protocolpartTwo");
    else if (stillInProtocolThree) console.log("/newRevision/protocolpartThree");
    else if (stillInSelection) console.log("/newRevision/selection");
    else if (stillInExtraction) console.log("/newRevision/extraction");
    else console.log("/newRevision/finalization");
}