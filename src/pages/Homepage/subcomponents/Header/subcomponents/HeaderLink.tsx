import { useState } from "react";
import { DarkText, LightText } from "./styles/LinkTheme";
import { DarkBackground, LightBackground } from "./styles/LinkTheme";

import { Box, Text } from "@chakra-ui/react";

interface IHeaderLink {
  text: string;
  id: string;
}

export default function HeaderLink({ text, id }: IHeaderLink) {
  const [onHover, SetOnHover] = useState(false);

  return (
    <>
      <a href={`#${id}`}>
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
