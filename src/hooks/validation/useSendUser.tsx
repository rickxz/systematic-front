import axios from 'axios';

export default async function useSendUser(data: string[]){
    const url = 'http://localhost:8080/'

    const userData = { //putting the userData in a object 
        'username': data[0],
        'password': data[1],
        'email': data[2],
        'country': data[3],
        'affiliation': data[4]
    }

    axios.post(`${url}api/v1/user`, userData)  //Doing a request to send the json object with the user data
    .then(response => {
        console.log(response);
        sessionStorage.setItem('userId', response.data.id);
    })
    .catch(err => console.error(err));
}