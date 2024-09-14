import { useState, useEffect } from "react";
import useCreateProtocol from "./reviews/useCreateProtocol";
import axios from "../interceptor/interceptor";

export function useAddText(context: string) {
  const { sendAddText } = useCreateProtocol();
  const [AddText, setAddText] = useState<string[]>([]);

  useEffect(() => {
    let id = localStorage.getItem('systematicReviewId');
    const token = localStorage.getItem('accessToken');
    const options = {
      headers: { Authorization: `Bearer: ${ token }` }
    }

    async function fetchAddTexts(){
      let response = await axios.get(`http://localhost:8080/systematic-study/${id}/protocol`, options);
      
      if( context == 'Research Questions' ) setAddText(response.data.content.researchQuestions);
      
      if( context == 'Keywords' ) setAddText(response.data.content.keywords);
      
      if( context == 'Inclusion criteria' ) {
        let criterias = response.data.content.eligibilityCriteria
        .filter((item: { description: string, type: string }) => {
          if(item.type == 'INCLUSION') return item;
        })
        .map((item: { description: string, type: string }) => {
          return item.description;
        })

        console.log(criterias);

        setAddText(criterias);
      }
      
      if( context == 'Exclusion criteria' ) {
        let criterias = response.data.content.eligibilityCriteria
          .filter((item: { description: string, type: string }) => {
            if(item.type == 'EXCLUSION') return item;
          })
        .map((item: { description: string, type: string }) => {
          return item.description;
        })

        setAddText(criterias);
      }
    }

    fetchAddTexts();
  }, [])

  const handleAddText = (newKeyword: string) => {
    setAddText((prevAddText) => {
      const data = [...prevAddText, newKeyword];
      sendAddText(data, context);

      return data;
    });
  };

  return { AddText, handleAddText, setAddText };
}