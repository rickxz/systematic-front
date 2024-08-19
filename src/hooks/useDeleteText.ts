import axios from "../interceptor/interceptor";

export function useDeleteText() {
  const handleDeleteText = (index: number, setAddText: React.Dispatch<React.SetStateAction<string[]>>, url: string, text: string) => {
    setAddText((prevAddText) => {
      const updatedAddText = [...prevAddText];
      updatedAddText.splice(index, 1);
      
      async function updateArray(){
        const accessToken = localStorage.getItem('accessToken');
        let options = {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
        let data = {};

        if(text == "Keywords"){
          data = {
            keywords: updatedAddText
          }
          axios.put(url, data, options);
        } else if(text == "Inclusion criteria"){
          let response = await axios.get(url, options);
          let array: {description: string, type: "INCLUSION" | "EXCLUSION"}[] = response.data.content.eligibilityCriteria;
          array = array.filter(item => item.type !== "INCLUSION");

          let newArray: {description: string, type: "INCLUSION" | "EXCLUSION"}[] = updatedAddText.map(item => ({description: item, type: "INCLUSION"}));

          array = array.concat(newArray);
          
          data = { eligibilityCriteria: array };
          axios.put(url, data, options);
        } else if(text == "Exclusion criteria"){
          let response = await axios.get(url, { withCredentials: true });
          let array: {description: string, type: "INCLUSION" | 'EXCLUSION'}[] = response.data.content.eligibilityCriteria;
          array = array.filter(item => item.type !== "EXCLUSION");

          let newArray: {description: string, type: "INCLUSION" | "EXCLUSION"}[] = updatedAddText.map(item => ({description: item, type: "EXCLUSION"}));

          array = array.concat(newArray);

          console.log(array);

          data = { eligibilityCriteria: array };
          axios.put(url, data, options);
        } else if(text == "Research Questions"){
          data = {
            researchQuestions: updatedAddText
          }
          const response = axios.put(url, data, options);
          console.log(response)
        }
      }

      updateArray();

      return updatedAddText;
    });
  };

  return { handleDeleteText };
}
