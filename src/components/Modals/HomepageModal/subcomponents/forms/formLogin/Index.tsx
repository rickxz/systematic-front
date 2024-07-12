import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function FormLogin() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Invalid email or password");
            return;
        }

        if (password.length < 6) {
            setError("Invalid email or password");
            return;
        }

        // Simulação(auth)
        const isAuthenticated = email === "test@example.com" && password === "password123";

        if (!isAuthenticated) {
            setError("Invalid email or password");
        } else {
            setError("");
            // aq é p redirecionar ou executar a lógica de login 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <div className="contentForm">
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <div className="actions">
                    <button type="submit">Log in</button>
                    <Link to="#">Forgot Password?</Link>
                </div>
            </div>
        </form>
    );
}
