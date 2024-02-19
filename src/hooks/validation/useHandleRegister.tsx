import { useSelect } from "../useSelect";
import useNameValidation from "./useNameValidation";
import useEmailValidation from "./useEmailValidation";
import usePassWordValidation from "./usePassWordValidation";
import useAffiliattionValidation from "./useAffiliattionValidation";

export default function useHandleRegister() {
  const { name, handleNameChange } = useNameValidation();
  const { selectedValue, handleSelectChange } = useSelect();
  const { email, validEmail, handleEmailchange } = useEmailValidation();
  const { affiliattion, handleAffiliattionChange } = useAffiliattionValidation();
  const { password, passwordMatch, handlePasswordChange, handleConfirmPasswordChange } = usePassWordValidation();

  const handleRegister = () => {
    if (name === "") {
      window.alert("Name is required!");
      return;
    }
    if (affiliattion === "") {
      window.alert("Affiliattion is required");
      return;
    }
    if (email === "") {
      window.alert("email  is required!");
      return;
    }
    if (!validEmail) {
      window.alert("Invalid email");
      return;
    }
    if (selectedValue === "") {
      window.alert("Country is required");
      return;
    }
    if (!passwordMatch) {
      window.alert("Passwords don't match!");
      return;
    }
    if (password === "") {
      window.alert("Password is required!");
      return;
    }
    window.alert("User registered with success!");
  };

  return {
    name,
    handleNameChange,
    selectedValue,
    handleSelectChange,
    email,
    validEmail,
    handleEmailchange,
    affiliattion,
    handleAffiliattionChange,
    password,
    passwordMatch,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRegister,
  };
}
