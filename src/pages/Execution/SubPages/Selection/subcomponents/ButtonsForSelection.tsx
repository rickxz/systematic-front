import { Box, Button, Flex } from "@chakra-ui/react";
import { boxconteiner, buttonconteiner, conteiner } from "../../../styles/BtnSelectionStyles";
import ComboBox from "../../../../../components/Inputs/ComboBox";
import useInputState from "../../../../../hooks/useInputState";
import useFetchTableData from "../../../../../hooks/fetch/useFetchTableData";

export default function ButtonsForSelection() {
  // Critérios de Exclusão (Exclusion Criteria)
const criteriosExclusao: string[] = [
  "Tipo estudo inadequado",
  "Idioma não compreendido",
  "Data publicação fora período",
  "Publicação não revisada",
  "População não incluída",
  "Intervenção diferente",
  "Comparador inadequado",
  "Desfechos não medidos",
  "Baixa qualidade metodológica",
  "Dados incompletos/indisponíveis",
];

// Critérios de Inclusão (Inclusion Criteria)
const criteriosInclusao: string[] = [
  "Tipo estudo adequado",
  "Idioma compreendido",
  "Data publicação dentro período",
  "Publicação revisada",
  "População incluída",
  "Intervenção igual",
  "Comparador adequado",
  "Desfechos medidos",
  "Alta qualidade metodológica",
  "Dados completos/disponíveis",
];
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);


  return (
    <>
      <Flex sx={conteiner}>
        <Flex sx={boxconteiner}>
          <ComboBox
              text="filter options"
              options={criteriosExclusao}
              handleCheckboxChange={handleCheckboxChange}
              selectedItems={criteriosExclusao}
            />
            <ComboBox
              text="filter options"
              options={criteriosInclusao}
              handleCheckboxChange={handleCheckboxChange}
              selectedItems={criteriosInclusao}
            />
        </Flex>

        <Flex sx={buttonconteiner}>
          <Button>Previous</Button>
          <Button>Next</Button>
        </Flex>

        <Button>Redifine</Button>
      </Flex>
    </>
  );
}
