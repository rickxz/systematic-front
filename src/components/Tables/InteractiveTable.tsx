import { AddIcon } from "@chakra-ui/icons";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import { useInteractiveTable } from "../../hooks/useInteractiveTable";
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button, Select, Input, FormLabel } from "@chakra-ui/react";
import useSendExtractionForm from "../../hooks/reviews/extractionForm/useSendExtractionForm";
import axios from "../../interceptor/interceptor";
import { useEffect, useState } from "react";
import NumberScaleModal from "../Modals/Data Extraciton Field Creation/NumberScaleModal";
import PickListModal from "../Modals/Data Extraciton Field Creation/PickListModal";

interface Props{
  id: string;
  url: string;
  label: string
}

export default function InteractiveTable({id, url, label}: Props) {
  const { setRows, rows, addRow, handleDelete, handleQuestionChange, handleTypeChange, options, headers, 
    handleServerSend, handleAddQuestions, values, setValues } =
    useInteractiveTable();
  const { sendTextualQuestion, sendPickListQuestion, sendNumberScaleQuestion } = useSendExtractionForm();

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [numberScale, setnumberScale] = useState<number[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  
  useEffect(() => {

    const fetch = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        let options = {
          headers: { Authorization: `Bearer ${accessToken}` }
        }

        let response = await axios.get(url, options);
  
        let link = response.data._links['find-all-review-extraction-questions'].href;
        response = await axios.get(link, options);
  
        const fetchedRows = response.data.questions.map((item: { questionType: any; code: any; 
          description: any; questionId: string; options: string[], lower: number, higher: number}) => {
          let type;
          let questions;
          console.log(item);

          switch (item.questionType) {
            case 'TEXTUAL':
              type = 'textual';
              break;
            case 'PICK_LIST':
              type = 'pick list';
              questions = item.options;
              break;
            case 'NUMBERED_SCALE':
              type = 'number scale';
              break;
            case 'LABELED_SCALE':
              type = 'labeled list';
              break;
          }
  
          return {
            id: item.code,
            question: item.description,
            type: type,
            questionId: item.questionId,
            isNew: false,
            questions: questions,
            higher: item.higher,
            lower: item.lower
          };
        });
  
        setRows(fetchedRows);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };
  
    fetch();
  }, []);

  function handleSelect(index: number, newValue: string){
    handleTypeChange(index, newValue); // Atualiza o tipo primeiro
  
    if (newValue === 'pick list') {
      setModalType(newValue);  // Atualiza o tipo do modal
      setShowModal(true);  // Abre o modal
    }

    if (newValue === 'number scale') {
      setModalType(newValue);  // Atualiza o tipo do modal
      setShowModal(true);  // Abre o modal
    }
  }

  async function handleSaveEdit(index: number) {
    console.log(rows[index].question, rows[index].type, rows[index].id);
    if(rows[index].type == "textual"){
      const data = {
        question: rows[index].question,
        questionId: rows[index].id,
        reviewId: id
      }

      let questionId = await sendTextualQuestion(data);

      handleServerSend(index, questionId);

    } else if(rows[index].type == "pick list"){
      const data = {
          question: rows[index].question,
          questionId: rows[index].id,
          reviewId: id,
          options: questions
      }   
      
      handleAddQuestions(index, questions);
      let questionId = await sendPickListQuestion(data);
      handleServerSend(index, questionId);
    } else if(rows[index].type == "number scale"){
      const data = {
        question: rows[index].question,
        questionId: rows[index].id,
        reviewId: id,
        lower: numberScale[0],
        higher: numberScale[1]
      }
      
      let questionId = await sendNumberScaleQuestion(data);
      handleServerSend(index, questionId);
    }
    const accessToken = localStorage.getItem('accessToken');
    let options = {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
    
    setEditIndex(null);
    await axios.get(`http://localhost:8080/api/v1/systematic-study/${id}/protocol/extraction-question`, options);
  }

  function addNewRow() {
    addRow(setEditIndex);
  }

  return (
    <TableContainer>
      <FormLabel  color={"#2E4B6C"}>{label}</FormLabel>
      <Table variant="striped" size="md" w={"60vw"}  borderRadius={"8px"} overflow="hidden">
        <Thead bgColor={"#2E4B6C"}>
          <Tr>
            {headers.map((header) => (
              <Th color={"#DDE4E9"}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          { rows.map((row, index) => (
            <Tr key={index} bgColor={"#C9D9E5"}>
              <Td>{row.id}</Td>
              <Td>
                <Input value={row.question} onChange={(e) => handleQuestionChange(index, e.target.value)}
                border={"solid 1px #303D50"} />
              </Td>
              <Td>
                <Select onChange={(e) => handleSelect(index, e.target.value)} border={"solid 1px #303D50"} value={row.type} >
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
                  editIndex={editIndex}
                  handleEdit={() => {
                    console.log(row.higher, row.lower, row.questions);
                    setValues([row.lower, row.higher]);
                    setEditIndex(index);
                    setShowModal(true);
                    setModalType(row.type);
                    setQuestions(row.questions);
                  }}
                  handleSaveEdit={async () => {
                    handleSaveEdit(index);
                  }}
                />
              </Td>
            </Tr>
          ))}
          <Tr bgColor={"#2E4B6C"}>
            <Td></Td>
            <Td colSpan={2}>
              <Button size="sm" leftIcon={<AddIcon />} onClick={addNewRow}>
                Add Row
              </Button>
            </Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
      {showModal == true && modalType == 'pick list' && (
        <PickListModal show={setShowModal} questionHolder={setQuestions} questions={questions} />
      )}
      {showModal == true && modalType == 'number scale' && (
        <NumberScaleModal show={setShowModal} scaleHolder={setnumberScale} values={values}/>
      )}
    </TableContainer>
  );
}