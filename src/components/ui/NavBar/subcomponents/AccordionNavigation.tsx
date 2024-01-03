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
      <AccordionElement navSize={navSize} title="Planejamento" names={["Protocólo"]} />
      <AccordionElement navSize={navSize} title="Execução" names={["Identificação", "Seleção", "Extração"]} />
      <AccordionElement navSize={navSize} title="Sumarização" names={["Gráficos", "Visualização", "Finalização"]} />
      <Link to="/">
        {" "}
        <NavItem navSize={navSize} icon={FaHome} title="Página Principal" />
      </Link>
    </>
  );
}
