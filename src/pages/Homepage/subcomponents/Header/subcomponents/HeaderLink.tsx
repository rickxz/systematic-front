import { useState } from "react";
import { DarkText, LightText } from "./styles/LinkTheme";
import { DarkBackground, LightBackground } from "./styles/LinkTheme";

import { Box, Text } from "@chakra-ui/react";

enum LinkTypeEnum {
  GoToOtherPage = "GoToOtherPage",
  StayInSamePage = "StayInSamePage"
}


interface IHeaderLink {
  text: string;
  id: string;
  type: LinkTypeEnum
}

export default function HeaderLink({ text, id, type }: IHeaderLink) {
  const [onHover, SetOnHover] = useState(false);
  console.log(id);

  return (
    <>
      <a href={type==LinkTypeEnum.StayInSamePage ? `#${id}` : id }>
        <Box sx={onHover ? DarkBackground : LightBackground}>
          <Text
            onMouseEnter={() => SetOnHover(true)}
            onMouseLeave={() => SetOnHover(false)}
            sx={onHover ? DarkText : LightText}
          >
            {text}
          </Text>
        </Box>
      </a>
    </>
  );
}
