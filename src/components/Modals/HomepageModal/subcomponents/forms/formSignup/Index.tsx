import { Link } from "react-router-dom";
import "../index.css";
import useHandleSignup from "../../../../../../hooks/validation/useHandleRegister";

export default function FormSignup({ redirectFormLogin, closeModal }: { redirectFormLogin: () => void, closeModal: () => void }) {
    const {
        name, setName, email, setEmail, affiliation, setAffiliation,
        state, setState, password, setPassword, confirmPassword, setConfirmPassword,
        nameError, setNameError, emailError, setEmailError, affiliationError,
        setAffiliationError, stateError, setStateError, passwordError, setPasswordError,
        confirmPasswordError, setConfirmPasswordError, handleSubmit
    } = useHandleSignup(closeModal);

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
                        onChange={(e) => { setName(e.target.value); setNameError(""); }}
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
                        onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
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
                        onChange={(e) => { setAffiliation(e.target.value); setAffiliationError("") }}
                        className={affiliationError ? "inputError" : ""}
                    />
                    {affiliationError && <p className="error">{affiliationError}</p>}
                </div>
                <div className="inputGroup">
                    <label htmlFor="state">State</label>
                    <select
                        value={state}
                        onChange={(e) => { setState(e.target.value); setStateError(""); }}
                        className={stateError ? "inputError" : ""}
                    >
                        <option value="">Select Country</option>
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
                        onChange={(e) => { setPassword(e.target.value); setPasswordError(""); setConfirmPasswordError(""); }}
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
                        onChange={(e) => { setConfirmPassword(e.target.value); setConfirmPasswordError(""); setPasswordError(""); }}
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
