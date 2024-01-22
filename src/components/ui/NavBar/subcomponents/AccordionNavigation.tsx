import { FaHome } from "react-icons/fa";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import AccordionElement from "./AccordionItem";
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
        names={["KeyWords", "Identification", "Selection", "Extraction"]}
        basePath="/newRevision"
      />
      <AccordionElement
        navSize={navSize}
        title="Summarizaton"
        names={["Grafics", "Visualization", "Finalization"]}
        basePath="/newRevision"
      />
      <Link to="/">
        {" "}
        <NavItem navSize={navSize} icon={FaHome} title="Home Page" />
      </Link>
    </>
  );
}
