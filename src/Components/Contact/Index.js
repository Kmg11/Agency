import axios from "axios";
import { useEffect, useState } from "react";

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
					<ContactInfo header={header} social={social} content={content} />
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

// Contact Info Component
const ContactInfo = (props) => {
	const { header, social, content } = props;

	return (
		<section className="contact-info">
			<ContactHeader header={header} social={social} />
			<ContactDetails content={content} />
		</section>
	);
};

// Contact Header Component
const ContactHeader = (props) => {
	const {
		header: { title, body },
		social,
	} = props;

	// Get Social Links List
	const socialList = social.map((item) => {
		return (
			<a key={item.id} href={item.link} target="_blank" rel="noreferrer">
				<i className={`icon ${item.icon}`}></i>
			</a>
		);
	});

	return (
		<header className="contact-header">
			<h2 className="contact-title">{title}</h2>
			<p className="contact-paragraph">{body}</p>
			<div className="social-links">{socialList}</div>
		</header>
	);
};

// Contact Details Component
const ContactDetails = (props) => {
	const { content: details } = props;

	// Get Details List 
	const detailsList = details.map((item) => {
		return (
			<div key={item.id}>
				<div className="left">
					<i className={`icon ${item.icon} fa-fw`}></i>
				</div>
				<div className="right">
					<h3 className="address-title">{item.title}</h3>
					<div className="address-details">
						<p>{item.text_1}</p>
						{item.text_2 !== "" && <p>{item.text_2}</p>}
						{item.text_3 !== "" && <p>{item.text_3}</p>}
					</div>
				</div>
			</div>
		);
	});

	return (
		<address className="contact-details">
			{detailsList}
		</address>
	);
};

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

export default Contact;
