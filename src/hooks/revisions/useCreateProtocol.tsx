interface protocolData{
    goals: string;
    mainQuestion: string;
    id: string;

}

const useCreateProtocol = ({goals, mainQuestion, id}: protocolData) => {
  const url = `http://localhost:8080/systematic-study/${id}/protocol`
}

export default useCreateProtocol