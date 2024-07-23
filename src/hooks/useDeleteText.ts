import axios from "../interceptor/interceptor";

export function useDeleteText() {
  const handleDeleteText = (index: number, setAddText: React.Dispatch<React.SetStateAction<string[]>>, url: string, text: string) => {
    setAddText((prevAddText) => {
      const updatedAddText = [...prevAddText];
      updatedAddText.splice(index, 1);
      console.log(updatedAddText);
      
      async function updateArray(){
        let data = {};
        if(text == "Keywords"){
          data = {
            keywords: updatedAddText
          }
        } else if(text == "Inclusion criteria"){
          let response = await axios.get(url, {withCredentials: true});
          let array = response.data.content.eligibilityCriteria;
          
          let newArray = updatedAddText.map(item => ({description: item, type: "INCLUSION"}));

          for(let i = 0; i < array.length; i++){
            if(array[i].type == "INCLUSION"){
              array.splice(i, 1);
            }
          }

          for(let i = 0; i < updatedAddText.length; i++){
            array.push(newArray[i]);
          }

          data = {
            eligibilityCriteria: array
          }
        }

        axios.put(url, data, {withCredentials: true});
      }

      updateArray();

      return updatedAddText;
    });
  };

  return { handleDeleteText };
}
