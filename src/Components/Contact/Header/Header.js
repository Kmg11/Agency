// Main Contact Header Sass File
import axios from "axios";
import { useEffect, useState } from "react";
import "./Header.scss";

// Contact Header Component
const ContactHeader = ({ header: { title, body } }) => {
	const [social, setSocial] = useState([]);

	useEffect(() => {
		// Fetch Social Links
		axios.get("./Apis/social.json").then(({ data }) => {
			setSocial(data);
		});

		// Reset States When Component Unmounted
		return () => {
			setSocial([]);
		};
	}, []);

	// Get Social Links List
	const socialList = social.map((item) => {
		return (
			<a
				key={item.id}
				href={item.link}
				target="_blank"
				rel="noreferrer"
				aria-label={item.name}
			>
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

export default ContactHeader;
