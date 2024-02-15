import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface iButtonProps {
  text: string;
  path: string;
}

export default function NavButton({ text, path }: iButtonProps) {
  return (
    <Box alignSelf={"flex-end"} mt={50} mb={10} mr={"2em"}>
      <Link to={path}>
        <Button w={250} borderRadius={12}>
          {text}
        </Button>
      </Link>
    </Box>
  );
}
