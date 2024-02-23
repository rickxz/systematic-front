import { Select } from "@chakra-ui/react";



export default function ReadingPrioritySelection() {
    return (
        <Select placeholder='Select reading priority'>
            <option value='Very high'>Very high</option>
            <option value='High'>High</option>
            <option value='Low'>Low</option>
            <option value='Very low<'>Very low</option>
        </Select>
    );
};