import useFecthCollaboratorsInfo from "../../../../hooks/fetch/useFetchCollaboratorsInfo";

export default function CollaboratorsCarousel() {
    const { collabInfos } = useFecthCollaboratorsInfo("./../../../public/data/collaboratorsInfo.json");
    
    return (
        <></>
    );
}