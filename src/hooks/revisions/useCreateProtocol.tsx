import axios from "axios";
import useRefreshToken from "../validation/useRefreshToken";;

interface protocolData{
    goal: string;
    mainQuestion: string;
    id: string;
    retry: boolean;
}

const useCreateProtocol = async ({goal, mainQuestion, id, retry}: protocolData) => {
  const url = `http://localhost:8080/systematic-study/${id}/protocol`
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
        if(axios.isAxiosError(err)){
        if((err.response?.status == 400 || err.response?.status == 401 || err.response?.status == 500 || err.response?.status === 404) && retry == true){
            await useRefreshToken();
            await useCreateProtocol({goal, mainQuestion, id, retry: false});
        }
    }
  }
}

export default useCreateProtocol