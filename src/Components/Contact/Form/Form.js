import axios from "axios";
import { useEffect, useState } from "react";

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

	// Check Component Mounted
	const [mount, setMount] = useState(true);

	// Axios Cancel Token Source
	const [cancelTokenSource, setCancelTokenSource] = useState(
		axios.CancelToken.source()
	);

	/*
	 ** Page Refresh When Using json-server Because Api Is Placed In Public Folder
	 ** This Problem Happend Because React Save The File In Public Folder
	 ** Every File Saved In Public Folder Effect On The Hole Page
	 ** So The Refresh Happen
	 */

	let hideMessage;
	let throttleHideMessageTimeout = 3000;

	const throttleHandleSubmit = throttle(() => {
		// Reset States To Avoid Problems
		!isPending && setIsPending(true);
		sucess && setSucess(false);
		error && setError(null);

		// Clear Timeout When Click Again
		hideMessage && clearTimeout(hideMessage);

		axios
			.post(
				"http://localhost:3000/messages",
				{
					name,
					email,
					message,
				},
				{
					cancelToken: cancelTokenSource.token,
				}
			)
			.then(
				(response) => {
					if (mount) {
						// Set States Values
						setIsPending(false);
						setSucess(true);
						error && setError(null);

						// Clear Timeout When Click Again
						hideMessage && clearTimeout(hideMessage);

						// Hide Error Message After Timeout
						hideMessage = setTimeout(() => {
							setSucess(false);
						}, 1000);

						// Empty States After Send Data
						setName("");
						setEmail("");
						setMessage("");

						// Empty Local Storage After Send Data
						setNameLS("");
						setEmailLS("");
						setMessageLS("");
					}
				},
				(error) => {
					if (mount) {
						// Set States Values
						setIsPending(false);
						sucess && setSucess(false);
						setError(error.message);

						// Hide Error Message After Timeout
						hideMessage = setTimeout(() => {
							setError(null);
						}, throttleHideMessageTimeout);
					}
				}
			);
	}, throttleHideMessageTimeout);

	const handleSubmit = (e) => {
		e.preventDefault();
		throttleHandleSubmit();
	};

	useEffect(() => {
		return () => {
			// Cancel Request
			setMount(false);
			cancelTokenSource.cancel();
			setCancelTokenSource(null);
		};
	}, [cancelTokenSource]);

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
						{sucess && <p className="sucess">Message Send</p>}
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
