import { useState, useEffect } from "react";
import axios from "axios";

export function useVerifyIfLoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const verifyLogin = async () => {
            try {
                let response = await axios.post("http://localhost:8080/api/v1/auth/refresh", {}, { withCredentials: true });
                console.log(response);
                if (response.status === 200) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (err) {
                setIsLoggedIn(false);
            }
        };

        verifyLogin();
    }, []);

    return isLoggedIn;
}
