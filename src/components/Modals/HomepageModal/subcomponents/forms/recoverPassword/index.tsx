import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

interface iRecoverProps {
    onClose: () => void;
  }
  
  export default function ForgotPassword({ onClose }: iRecoverProps) {
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Invalid email");
            return;
        } else{
        // lógica de envio do email de recuperação de senha (auth)
        console.log("Enviar email para:", email); //teste
        onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="contentForm">
                    <div className="inputGroup">
                        <label htmlFor="forgot-email">Email</label>
                        <input 
                            type="text" 
                            id="forgot-email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <div className="actions">
                        <Link to="#">Back to Login</Link>
                        <button type="submit">Recover Password</button>
                    </div>
                </div>
            </form>
            
        </div>
    );
}





