import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import AccordionElement from "./AccordionItem";
import NavItem from "./NavItem";
interface IAccordion {
  navSize: string;
}

export default function AccordionNav({ navSize }: IAccordion) {
  return (
    <>
      <AccordionElement navSize={navSize} title="Planning" names={["Protocol"]} basePath="/newRevision" />
      <AccordionElement
        navSize={navSize}
        title="Execution"
        names={["KeyWords", "Insertion", "Identification", "Selection", "Extraction"]}
        basePath="/newRevision"
      />
      <AccordionElement
        navSize={navSize}
        title="Summarizaton"
        names={["Graphics", "Visualization", "Finalization"]}
        basePath="/newRevision"
      />
      <Link to="/">
        {" "}
        <NavItem navSize={navSize} icon={FaHome} title="Home Page" />
      </Link>
    </>
  );
}
