import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
interface IAccordion {
  navSize: string;
}

export default function AccordionNav({ navSize }: IAccordion) {
  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" alignContent={"flex-start"}>
              Planejamento
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <ul>
              <li>Protocolo </li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>{" "}
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" alignContent={"flex-start"}>
              Execução
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <ul>
              <li>Identificação de Estudos</li>
              <li>Seleção</li>
              <li>Extração</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>{" "}
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" alignContent={"flex-start"}>
              Sumarização
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <ul>
              <li>Gráficos</li>
              <li>Visualização</li>
              <li>Finalizar Revisão</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Link to="/">
        {" "}
        <NavItem navSize={navSize} icon={FaHome} title="Página Principal" />
      </Link>
    </>
  );
}
