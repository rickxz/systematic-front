import axios from 'axios';

export const useGetTokens = async (username: string, password: string) => {
    const url = 'http://localhost:8080/';
    const userData = {
        username: username,
        password: password
    }

    const response = await axios.post(`${url}api/v1/auth`, userData);
    localStorage.setItem('accessToken', response.data.accessToken);
    document.cookie = `refresh-token=${response.data.refreshToken}`;
    return response;
}
