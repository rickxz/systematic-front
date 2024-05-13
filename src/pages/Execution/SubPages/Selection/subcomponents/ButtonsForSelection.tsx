import { Button, Flex } from "@chakra-ui/react";
import { boxconteiner, buttonconteiner, conteiner } from "../../../styles/BtnSelectionStyles";
import ComboBox from "../../../../../components/Inputs/ComboBox";
import useInputState from "../../../../../hooks/useInputState";

export default function ButtonsForSelection() {
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
  const { handleChange: handleCheckboxChange } = useInputState<string[]>([]);

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
          <Button borderRadius={"3px"}>Previous</Button>
          <Button borderRadius={"3px"}>Next</Button>
        </Flex>

        <Button borderRadius={"3px"}>Redifine</Button>
      </Flex>
    </>
  );
}
