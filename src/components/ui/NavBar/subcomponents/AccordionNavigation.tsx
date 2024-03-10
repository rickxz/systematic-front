import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import AccordionElement from "./AccordionItem";
import NavItem from "./NavItem";
import { Accordion } from "@chakra-ui/react";
interface IAccordion {
  navSize: string;
  defaultOpen: number;
}

export default function AccordionNav({ navSize, defaultOpen }: IAccordion) {
  return (
    <>
      <Accordion defaultIndex={defaultOpen} allowMultiple>
        <AccordionElement navSize={navSize} title="Planning" names={["Protocol"]} basePath="/newRevision" />
        <AccordionElement
          navSize={navSize}
          title="Execution"
          names={["KeyWords", "Insertion", "Identification", "Selection", "Extraction"]}
          basePath="/newRevision"
        />
        <AccordionElement
          navSize={navSize}
          title="Summarization"
          names={["Graphics", "Visualization", "Finalization"]}
          basePath="/newRevision"
        />
      </Accordion>

      <Link to="/">
        {" "}
        <NavItem navSize={navSize} icon={FaHome} title="Home Page" />
      </Link>
    </>
  );
}
