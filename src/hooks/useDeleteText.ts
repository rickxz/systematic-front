import axios from "../interceptor/interceptor";

export function useDeleteText() {
  const handleDeleteText = (index: number, setAddText: React.Dispatch<React.SetStateAction<string[]>>, url: string) => {
    setAddText((prevAddText) => {
      const updatedAddText = [...prevAddText];
      updatedAddText.splice(index, 1);
      console.log(updatedAddText);
      
      const data = {
        keywords: updatedAddText
      }
      axios.put(url, data, {withCredentials: true});
      return updatedAddText;
    });
  };

  return { handleDeleteText };
}
