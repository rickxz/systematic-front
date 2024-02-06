import DynamicTable from "../../../components/Tables/DynamicTable";
import Sidebar from "../../../components/ui/NavBar/Sidebar";

import {Box, Flex} from "@chakra-ui/react";

export default function Finalization() {

  const headerData = ["IDSS", "ID Paper", "Title", "Author", "Year", "S/S", "S/E", "RP", "Score"];
  const bodyData = [
    [
      "01",
      "00001",
      "Lorem ipsum dolor sit amet consectur",
      "Jão da Silva, Cleitin, et all",
      "2002",
      "undefined",
      "undefined",
      "001",
      100,
    ],
    [
      "01",
      "00001",
      "Lorem ipsum dolor sit amet consectur",
      "Jão da Silva, Cleitin, et all",
      "2002",
      "undefined",
      "undefined",
      "001",
      100,
    ],
    [
      "01",
      "00001",
      "Lorem ipsum dolor sit amet consectur",
      "Jão da Silva, Cleitin, et all",
      "2002",
      "undefined",
      "undefined",
      "001",
      100,
    ],
  ];
  return (
    <Flex>
      <Sidebar type="accordion"/>

      <Flex flexDirection="column" p="2%">
        <DynamicTable headerData={headerData} bodyData={bodyData} />
      </Flex>
    </Flex>
  )
}
