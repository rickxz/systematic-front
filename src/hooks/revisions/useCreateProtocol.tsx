import axios from "../../interceptor/interceptor";

interface protocolData{
    goal: string;
    mainQuestion: string;
    id: string;
    retry: boolean;
}

const useCreateProtocol = async ({goal, mainQuestion, id}: protocolData) => {
  const url = `http://localhost:8080/systematic-study/${id}/protocol`;
  const data = {
    "goal": goal,
    "justification": mainQuestion
  }
  console.log(id);
  try{
    let response = await axios.put(url, data, {withCredentials: true})
    console.log(response);
  } 
  catch(err){
        console.log(err);
  }
}

export default useCreateProtocol