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
      <AccordionElement navSize={navSize} title="Planejamento" names={["Protocol"]} basePath="/novaRevisao" />
      <AccordionElement
        navSize={navSize}
        title="Execução"
        names={["Identification", "Selection", "Extraction"]}
        basePath="/novaRevisao"
      />
      <AccordionElement
        navSize={navSize}
        title="Sumarização"
        names={["Grafics", "Visualization", "Finalization"]}
        basePath="/novaRevisao"
      />
      <Link to="/">
        {" "}
        <NavItem navSize={navSize} icon={FaHome} title="Página Principal" />
      </Link>
    </>
  );
}
