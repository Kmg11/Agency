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

	const throttleHandleSubmit = throttle(() => {
		setIsPending(true);

		axios
			.post("", {
				name,
				email,
				message,
			})
			.then(
				(response) => {
					console.log("New Message Added");

					// Empty Local Storage After Send Data
					setNameLS("");
					setEmailLS("");
					setMessageLS("");
				},
				(error) => {
					console.log(error);
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
					onChange={(e) => {
						setEmail(e.target.value);
						setEmailLS(e.target.value);
					}}
				/>
				<textarea
					placeholder="Message"
					required
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
						setMessageLS(e.target.value);
					}}
				/>
				<input
					type="submit"
					value={!isPending ? `Submit` : `Send Message...`}
				/>
			</form>
		</div>
	);
};

export default ContactForm;
