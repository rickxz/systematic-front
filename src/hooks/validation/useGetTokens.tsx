import axios from 'axios';

export const useGetTokens = async (username: string, password: string) => {
    const url = 'http://localhost:8080/';
    const userData = {
        username: username,
        password: password
    }

    try{
        const response = await axios.post(`${url}api/v1/auth`, userData, {withCredentials: true});
        console.log("Resposta do hook");
        if(response.status === 200){
            console.log(response);

            localStorage.setItem('myRevisionsLink', response.data._links['find-my-reviews'].href);
        }
        else{
            throw new Error("Falha ao fazer requisição");
        }  
    } catch(error){
        console.error(error);
    }
    
    return 1;
}
