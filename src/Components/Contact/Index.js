import axios from "axios";
import { useEffect, useState } from "react";

// Import Components
import ContactForm from "./Form/Form";
import ContactDetails from "./Details/Details";
import ContactHeader from "./Header/Header";

// Main Contact Sass File
import "./Index.scss";

// Main Contact Component
const Contact = () => {
	// Data States
	const [header, setHeader] = useState([]);
	const [social, setSocial] = useState([]);
	const [content, setContent] = useState([]);

	// Initialize
	useEffect(() => {
		// Fetch Data From Api
		axios.get("./Apis/contact.json").then(({ data }) => {
			const { header, social, content } = data;
			setHeader(header);
			setSocial(social);
			setContent(content);
		});
	}, []);

	return (
		<section className="contact">
			<div className="container">
				<div className="contact-inner">
					<section className="contact-info">
						<ContactHeader header={header} social={social} />
						<ContactDetails content={content} />
					</section>

					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
