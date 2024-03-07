import { FormControl } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FormControlstyle } from "../styles/ResearcherFilterStyles";
import TextAreaInput from "../../../components/Inputs/InputTextArea";

interface IResearcherData {
  name: string;
  email: string;
}

export default function ResearcherFilter() {
  const [researchers, setResearchers] = useState<IResearcherData[]>([]);
  const [filteredResearchers, setFilteredResearchers] = useState<IResearcherData[]>([]);

  useEffect(() => {
    fetch("src/data/test.json")
      .then((response) => response.json())
      .then((res) => setResearchers(res))
      .catch((err) => console.error(err));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFilteredResearchers(researchers.filter((researcher) => researcher.name.includes(e.target.value)));
    console.log(filteredResearchers);
  };

  return (
    <FormControl sx={FormControlstyle}>
      <TextAreaInput
        label="Researchers:"
        placeholder={"Enter researcher name"}
        onChange={handleInputChange}
      ></TextAreaInput>
    </FormControl>
  );
}
