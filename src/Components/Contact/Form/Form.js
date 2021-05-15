import { useState } from "react";

// Import Custome Hooks
import { useDarkTheme } from "./../../../CustomeHooks/useDarkTheme/useDarkTheme";
import useLocalStorage from "./../../../CustomeHooks/useLocalStorage/useLocalStorage";

// Main Contact Form Sass File
import "./Form.scss";

// Contact Form Component
const ContactForm = () => {
	const darkTheme = useDarkTheme();
	const [nameLS, setNameLS] = useLocalStorage("form-name", "");
	const [emailLS, setEmailLS] = useLocalStorage("form-email", "");
	const [messageLS, setMessageLS] = useLocalStorage("form-message", "");

	const [name, setName] = useState(nameLS);
	const [email, setEmail] = useState(emailLS);
	const [message, setMessage] = useState(messageLS);
	const [isPending, setIsPending] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPending(true);
		console.log(1);
		const messageDetails = { name, email, message };

		fetch("", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(messageDetails),
		}).then(() => {
			console.log("New Message Added");

			// Empty Local Storage After Send Data
			setNameLS("");
			setEmailLS("");
			setMessageLS("");
		});
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
