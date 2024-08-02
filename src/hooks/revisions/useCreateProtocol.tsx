import axios from "../../interceptor/interceptor";

interface protocolData{
    goal: string;
    mainQuestion: string;
    picoc: {
      "population": string,
      "intervention": string,
      "control": string,
      "outcome": string,
      "context": string
    };
    id: string;
    retry: boolean;
}

const useCreateProtocol = async ({goal, mainQuestion, picoc, id}: protocolData) => {
  console.log(picoc);

  const url = `http://localhost:8080/systematic-study/${id}/protocol`;
  let data = {};

  if(picoc.context != '' && picoc.control != '' && picoc.intervention != '' && picoc.outcome != ''&& picoc.population != '')
    data = {
      "goal": goal,
      "justification": mainQuestion,
      picoc
    }
    else
    data = {
      "goal": goal,
      "justification": mainQuestion,
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