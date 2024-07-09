import axios from "axios";

interface protocolData{
    goal: string;
    mainQuestion: string;
    id: string;

}

const useCreateProtocol = async ({goal, mainQuestion, id}: protocolData) => {
  const url = `http://localhost:8080/systematic-study/${id}/protocol`
  const data = {
    "goal": goal,
    "justification": mainQuestion
  }
  console.log(id);
}

export default useCreateProtocol