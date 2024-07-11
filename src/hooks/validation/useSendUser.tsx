import axios from 'axios';
import sendUserProp from "../../../public/interfaces/sendUserInterface"

export default function useSendUser(data: sendUserProp, toast: any){
    const url = 'http://localhost:8080/';

    axios.post(`${url}api/v1/user`, data)  //Doing a request to send the json object with the user data
    .then(response => {
        console.log(response);
        sessionStorage.setItem('userId', response.data.id);
        if (response.status == 201)
            toast({
                title: 'Account created.',
                description: "Now you can login with your account.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            }
        )
    })
    .catch(err => {
        console.error(err);
        toast({
            title: err.response.data.message,
            description: err.response.data.detail,
            status: "error",
            duration: 9000,
            isClosable: true,
        })
    });
}