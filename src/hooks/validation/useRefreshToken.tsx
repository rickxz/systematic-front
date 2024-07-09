import axios from "axios";

const refreshAccessToken = async (): Promise<string> => {
    const url = "http://localhost:8080/";
    const refreshToken = localStorage.getItem('refreshToken');
    try {
        const response = await axios.post(`${url}api/v1/auth/refresh`, { "refreshToken": refreshToken });
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data.accessToken;
    } catch (err) {
        console.error("Failed to refresh access token:", err);
        throw err;
    }
}

export default refreshAccessToken;
