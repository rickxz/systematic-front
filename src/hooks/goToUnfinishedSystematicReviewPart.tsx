import { useNavigate } from "react-router-dom";

export default function goToUnfinishedSystematicReviewPart() {
    const navigate =  useNavigate();

    const stillInProtocolOne = protocolPartOneIsFinished();
    const stillInProtocolTwo = protocolPartTwoIsFinished();
    const stillInProtocolThree = protocolPartThreeIsFinished();
    const stillInSelection = SelectionIsFinished();
    const stillInExtraction = ExtractionIsFinished();

    if (stillInProtocolOne) navigate("/newRevision/protocol");
    else if (stillInProtocolTwo) navigate("/newRevision/protocolpartTwo");
    else if (stillInProtocolThree) navigate("/newRevision/protocolpartThree");
    else if (stillInSelection) navigate("/newRevision/selection");
    else if (stillInExtraction) navigate("/newRevision/extraction");
    else navigate("/newRevision/finalization");
}