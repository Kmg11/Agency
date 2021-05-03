// Main Contact Form Sass File
import "./Form.scss";

// Contact Form Component
const ContactForm = () => {
	return (
		<div className="send-message">
			<img
				className="background-image"
				src=".//Images/Contact/background.svg"
				alt="Background 2"
				draggable="false"
			/>

			<form className="contact-form">
				<label>Say Hi</label>
				<input type="text" placeholder="Full Name" />
				<input type="email" placeholder="Email Address" />
				<textarea placeholder="Message" />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default ContactForm;
