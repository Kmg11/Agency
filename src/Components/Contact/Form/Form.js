import axios from "axios";
import { useState } from "react";

// Import Custome Hooks
import { useDarkTheme } from "./../../../CustomeHooks/useDarkTheme/useDarkTheme";
import useLocalStorage from "./../../../CustomeHooks/useLocalStorage/useLocalStorage";
import useThrottle from "./../../../CustomeHooks/useThrottle/useThrottle";

// Main Contact Form Sass File
import "./Form.scss";

// Contact Form Component
const ContactForm = () => {
	const darkTheme = useDarkTheme();
	const { throttle } = useThrottle();

	const [nameLS, setNameLS] = useLocalStorage("form-name", "");
	const [emailLS, setEmailLS] = useLocalStorage("form-email", "");
	const [messageLS, setMessageLS] = useLocalStorage("form-message", "");

	const [name, setName] = useState(nameLS);
	const [email, setEmail] = useState(emailLS);
	const [message, setMessage] = useState(messageLS);

	const [isPending, setIsPending] = useState(false);
	const [sucess, setSucess] = useState(false);
	const [error, setError] = useState(null);

	const throttleHandleSubmit = throttle(() => {
		!isPending && setIsPending(true);
		sucess && setSucess(false);
		error && setError(null);

		axios
			.post("", {
				name,
				email,
				message,
			})
			.then(
				(response) => {
					console.log("New Message Added");

					setIsPending(false);
					setSucess(true);
					setError(null);

					// Empty Local Storage After Send Data
					setNameLS("");
					setEmailLS("");
					setMessageLS("");
				},
				(error) => {
					console.log(error);

					setIsPending(false);
					setSucess(false);
					setError(error.message);
				}
			);
	}, 2000);

	const handleSubmit = (e) => {
		e.preventDefault();
		throttleHandleSubmit();
	};

	return (
		<div className="send-message">
			<img
				className="background-image"
				src={`./Images/Contact/background${darkTheme ? "-dark" : ""}.svg`}
				alt="Background 2"
				draggable="false"
			/>

			<form onSubmit={handleSubmit} className="contact-form">
				<label htmlFor="name">Say Hi</label>
				<input
					id="name"
					type="text"
					placeholder="Full Name"
					required
					value={name}
					disabled={isPending && "disabled"}
					onChange={(e) => {
						setName(e.target.value);
						setNameLS(e.target.value);
					}}
				/>
				<input
					type="email"
					placeholder="Email Address"
					required
					value={email}
					disabled={isPending && "disabled"}
					onChange={(e) => {
						setEmail(e.target.value);
						setEmailLS(e.target.value);
					}}
				/>
				<textarea
					placeholder="Message"
					required
					value={message}
					disabled={isPending && "disabled"}
					onChange={(e) => {
						setMessage(e.target.value);
						setMessageLS(e.target.value);
					}}
				/>
				<div>
					<input type="submit" value="Submit" />

					<div className="status">
						{isPending && <div className="loading"></div>}
						{error && <p className="error">{error}</p>}
						{sucess && <p className="sucess">Info Send</p>}
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
