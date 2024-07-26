import { AddIcon } from "@chakra-ui/icons";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import { useInteractiveTable } from "../../hooks/useInteractiveTable";
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button, Select, Input } from "@chakra-ui/react";
import useSendExtractionForm from "../../hooks/revisions/extractionForm/useSendExtractionForm";
import axios from "../../interceptor/interceptor";
import { useEffect } from "react";
interface Props{
  id: string;
  url: string;
}

export default function InteractiveTable({id, url}: Props) {
  const { rows, addRow, handleDelete, handleQuestionChange, handleTypeChange, options, headers } =
    useInteractiveTable();
  const { sendExtractionForm } = useSendExtractionForm();

  useEffect(() => {
    const fetch = async () => {
      let response = await axios.get(url, {withCredentials: true});
      console.log(response);
    }

    fetch();
  }, [])

  return (
    <TableContainer>
      <Table variant="striped" size="md" w={"60vw"}  borderRadius={"8px"} overflow="hidden">
        <Thead bgColor={"#2E4B6C"}>
          <Tr>
            {headers.map((header) => (
              <Th color={"#DDE4E9"}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, index) => (
            <Tr key={index} bgColor={"#C9D9E5"}>
              <Td>{row.id}</Td>
              <Td>
                <Input value={row.question} onChange={(e) => handleQuestionChange(index, e.target.value)}
                border={"solid 1px #303D50"} />
              </Td>
              <Td>
                <Select border={"solid 1px #303D50"} value={row.type} onChange={(e) => handleTypeChange(index, e.target.value)}>
                  {options.map((opt, i) => (
                    <option key={i} value={opt.toLowerCase()}>
                      {opt}
                    </option>
                  ))}
                </Select>
              </Td>
              <Td>
                <DeleteButton index={index} handleDelete={() => handleDelete(index)} />
                <EditButton
                  index={index}
                  editIndex={index}
                  handleEdit={() => {
                    // handle edit logic
                  }}
                  handleSaveEdit={async () => {
                    // handle save edit logic
                    console.log(rows[index].question, rows[index].type, rows[index].id);
                    const data = {
                      question: rows[index].question,
                      type: rows[index].type,
                      questionId: rows[index].id,
                      reviewId: id
                    }
                    sendExtractionForm(data);
                    let response = await axios.get(`http://localhost:8080/api/v1/systematic-study/${id}/protocol/extraction-question`, {withCredentials: true});
                    console.log(response);
                  }}
                />
              </Td>
            </Tr>
          ))}
          <Tr bgColor={"#2E4B6C"}>
            <Td></Td>
            <Td colSpan={2}>
              <Button size="sm" leftIcon={<AddIcon />} onClick={addRow}>
                Add Row
              </Button>
            </Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}