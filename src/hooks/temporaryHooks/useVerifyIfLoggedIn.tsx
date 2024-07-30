import { useState, useEffect } from "react";
import axios from "axios";

export function useVerifyIfLoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isChecking, setIsChecking] = useState(true); // Estado para verificar se a verificação está em andamento

    useEffect(() => {
        const verifyLogin = async () => {
            try {
                let response = await axios.post("http://localhost:8080/api/v1/auth/refresh", {}, { withCredentials: true });
                console.log(response);
                if (response.status === 200) {
                    console.log("Login successful");
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (err) {
                console.error("Login verification failed:", err);
                setIsLoggedIn(false);
            } finally {
                setIsChecking(false); // Verificação concluída
            }
        };

        verifyLogin();
    }, []); // Array de dependências vazio para garantir que o efeito seja executado apenas uma vez

    return { isLoggedIn, isChecking };
}
