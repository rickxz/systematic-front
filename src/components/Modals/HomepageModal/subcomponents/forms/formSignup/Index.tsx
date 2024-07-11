import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import useRegisterUser from "../../../../../../hooks/validation/useSendUser";
import sendUserProp from "../../../../../../../public/interfaces/sendUserInterface";
import { useToast } from "@chakra-ui/react";

export default function FormSignup({ redirectFormLogin }: { redirectFormLogin: () => void }) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [affiliation, setAffiliation] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [affiliationError, setAffiliationError] = useState<string>("");
    const [stateError, setStateError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const toast = useToast();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isValid = true;

        if (!name) {
            setNameError("Please enter your name");
            isValid = false;
        } else {
            setNameError("");
        }

        if (!email) {
            setEmailError("Please enter your email");
            isValid = false;
        }
        else if (!validateEmail(email)) {
            setEmailError("Invalid email address format");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!affiliation) {
            setAffiliationError("Please enter your affiliation");
            isValid = false;
        } else {
            setAffiliationError("");
        }

        if (!state) {
            setStateError("Please select your state");
            isValid = false;
        } else {
            setStateError("");
        }

        if (password.length < 5) {
            setPasswordError("Password must be at least 5 characters long");
            isValid = false;
        } else {
            setPasswordError("");
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            isValid = false;
        } else {
            setConfirmPasswordError("");
        }

        if (isValid) {
            console.log("inicio da requisição")

            const data: sendUserProp = {
                "username": name,
                "password": password,
                "email": email,
                "country": state,
                "affiliation": affiliation
            }

            try {
                const response = useRegisterUser(data);
                console.log(response);
                const user =  (await response).data.username;
                sessionStorage.setItem('userId', (await response).data.id);
                if ((await response).status == 201)
                    toast({
                        title: 'Account created.',
                        description: `You can now log in with your account, ${user}.`,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    }
                )
            }
            catch(err: any) {
                console.error(err);
                toast({
                    title: err.response.data.message,
                    description: err.response.data.detail,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            };
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="contentForm">
                <div className="inputGroup">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className={nameError ? "inputError" : ""}
                    />
                    {nameError && <p className="error">{nameError}</p>}
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={emailError ? "inputError" : ""}
                    />
                    {emailError && <p className="error">{emailError}</p>}
                </div>
                <div className="inputGroup">
                    <label htmlFor="affiliation">Affiliation</label>
                    <input 
                        type="text" 
                        id="affiliation"
                        value={affiliation} 
                        onChange={(e) => setAffiliation(e.target.value)}
                        className={affiliationError ? "inputError" : ""}
                    />
                    {affiliationError && <p className="error">{affiliationError}</p>}
                </div>
                <div className="inputGroup">
                    <label htmlFor="state">State</label>
                    <select 
                        value={state} 
                        onChange={(e) => setState(e.target.value)}
                        className={stateError ? "inputError" : ""}
                    >
                        <option value="">Select State</option>
                        <option>Brazil</option>
                        <option>Spain</option>
                        <option>England</option>
                        <option>France</option>
                    </select>
                    {stateError && <p className="error">{stateError}</p>}
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={passwordError ? "inputError" : ""}
                    />
                    {passwordError && <p className="error">{passwordError}</p>}
                </div>
                <div className="inputGroup">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={confirmPasswordError ? "inputError" : ""}
                    />
                    {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
                </div>
                <div className="actions">
                    <button type="submit">Create Account</button>
                    <Link to="#" onClick={redirectFormLogin}>
                        Already have an account?
                    </Link>
                </div>
            </div>
        </form>
    );
}
