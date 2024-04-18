import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

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
    color: "#FFF"
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    border: "2px solid #61dafb",
    borderRadius: "6px",
    background: "#333842",
    color: "white"
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
    ":hover": {
      backgroundColor: "#21a1f1"
    }
  };

  const errorStyle = {
    color: "red",
    fontSize: "0.9em",
    margin: "5px 0",
    fontWeight: "600",
    textAlign: "center"
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
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label>
					Email
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label>
					Username
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<label>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignupFormModal;
