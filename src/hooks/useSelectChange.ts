import { useState } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const [selectedValue, setSelectedValue] = useState<string | null>(null);
export const handleSelectChange = (value: string) => {
  selectedValue;
  setSelectedValue(value);
};
