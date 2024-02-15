import { FormControl } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TextAreaInput from "../../../components/Inputs/InputTextArea";

interface IResearcherData {
  name: string;
  email: string;
}

export default function ResearcherFilter() {
  const [researchers, setResearchers] = useState<IResearcherData[]>([]);
  const [filteredResearchers, setFilteredResearchers] = useState<IResearcherData[]>([]);

  useEffect(() => {
    // This useEffect is fetching the local json file for test purposes, this will later fetch from the database.
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
    <FormControl rowGap={5} display={"flex"} flexDir={"column"} alignItems={"center"}>
      <TextAreaInput
        label="Researchers:"
        placeholder={"Enter researcher name"}
        onChange={handleInputChange}
      ></TextAreaInput>
    </FormControl>
  );
}
