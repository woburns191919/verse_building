import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();


  const modalStyle = {
    backgroundColor: "#282c34",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
    color: "#FFF",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  };

  const inputStyle = {
    width: "90%",
		maxWidth:"150px",
    padding: "12px 20px",
    border: "2px solid #61dafb",
    borderRadius: "6px",
    background: "#333842",
    color: "white",
  };

  const buttonStyle = {
    backgroundColor: "#61dafb",
    color: "#282c34",
    padding: "12px 24px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
    transition: "background-color 0.3s",
  };

  const errorStyle = {
    color: "red",
    fontSize: "0.9em",
    margin: "5px 0",
    fontWeight: "600",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      } else {
        closeModal();
      }
    } else {
      setErrors(["Confirm Password field must be the same as the Password field"]);
    }
  };

  return (
    <div style={modalStyle}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx} style={errorStyle}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
        <button type="submit" style={buttonStyle}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormModal;
