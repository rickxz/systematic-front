import { Flex } from "@chakra-ui/react";
import { flexStyles } from "./styles/flexStyles";
import FlexLayout from "../../components/ui/Flex/Flex";
import Header from "../../components/ui/Header/Header";

//hooks imports
import useGetReviewCard from "../../hooks/reviewCard/useGetReviewCard";

//component imports
import Loader from "../../components/Icons/Loader";
import RenderCards from "./utils/RenderCards";
import RenderCreateNewReview from "./utils/RenderCreateNewReview";

export default function UserArea() {

  let { cardData, isLoaded } = useGetReviewCard();

  return (
    <FlexLayout defaultOpen={0} navigationType="Default">
      <Header text="My Systematic Reviews" />
      <Flex sx={flexStyles} w={"100%"} align="center" justify="center">

        { !isLoaded && <Loader />}
        
        { cardData && cardData.length > 0 && isLoaded && ( <RenderCards data={cardData}/> ) }

        { cardData && cardData.length == 0 && isLoaded && ( <RenderCreateNewReview /> ) }

      </Flex>
    </FlexLayout>
  );
}
