import { Select } from "@chakra-ui/react";



export default function StatusSelection() {
    return (
        <Select placeholder='Select a status'>
            <option value='Unclassified'>Unclassified</option>
            <option value='Accepted'>Accepted</option>
            <option value='Rejected'>Rejected</option>
            <option value='Duplicated'>Duplicated</option>
        </Select>
    );
};