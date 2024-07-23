import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import userToLoginProp from "../../../../../../../public/interfaces/userToLogin";
import useLoginUser from "../../../../../../hooks/validation/useLoginUser";
import { useToast } from "@chakra-ui/react";

export default function FormLogin({ redirectForgotPassword }: { redirectForgotPassword: () => void }) {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [usernameError, setUsernameError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [error, setError] = useState<string>("");

    
    const isValid = (error === "" && username !== "" && password !== "");
    const data: userToLoginProp = {
        "username": username,
        "password": password
    }

    const toast = useToast();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (username == "") {
            setUsernameError("Please, enter with your username");
        } else {
            setUsernameError("");
        }

        if (password == "") {
            setPasswordError("Please, enter with your password");
        }
        else if (password.length < 4) {
            setPasswordError("password need to have more than 6 letters");
            return;
        } else {
            setPasswordError("");
        }
        
        
        if (isValid) {
            console.log("inicio da requisição")
            try {
                const response = await useLoginUser(data);
                console.log(response);
                if ((await response).status == 200) {
                    toast({
                        title: "Login successful.",
                        description: `Welcome back, ${username}!`,
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })
                    navigate('/user');
                }; 
            }
            catch(err: any) {
                console.error(err.message);
                setError("Wrong username or password");
                setUsername("");
                setPassword("");
            };
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <div className="contentForm">
                <div className="inputGroup">
                    <label htmlFor="email">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => {setUsername(e.target.value); setError("")}}
                    />
                    {usernameError && <p className="error">{usernameError}</p>}
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => {setPassword(e.target.value); setError("")}}
                    />
                    {passwordError && <p className="error">{passwordError}</p>}
                </div>
                {error && <p className="error">{error}</p>}
                <div className="actions">
                    <button type="submit">Log in</button>
                    <Link to="#" onClick={redirectForgotPassword}>Forgot Password?</Link>
                </div>
            </div>
        </form>
    );
}
