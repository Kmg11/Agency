import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Main Footer Footer Sass File
import "./Footer.scss";

// Footer Footer Component
const FooterFooter = ({ copyRight }) => {
	// Logo Image & Text
	const [image, setImage] = useState([]);
	const [text, setText] = useState([]);

	useEffect(() => {
		// Fetch Logo Image & Text
		axios.get("./Apis/Logo.json").then(({ data }) => {
			const { image, text } = data;
			setImage(image);
			setText(text);
		});

		// Reset States When Component Unmounted
		return () => {
			setImage([]);
			setText([]);
		};
	}, []);

	// social
	const [social, setSocial] = useState([]);

	useEffect(() => {
		// Fetch social
		axios.get("./Apis/social.json").then(({ data }) => {
			setSocial(data);
		});

		// Reset States When Component Unmounted
		return () => {
			setSocial([]);
		};
	}, []);

	// Get Social List
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
		<footer className="footer-footer">
			<Link to="/" className="logo">
				{image && (
					<img
						src={image}
						alt="Logo"
						draggable="false"
						className="logo-image"
					/>
				)}

				{text && <span className="logo-text">{text}</span>}
			</Link>

			<p className="copy-right">{copyRight}</p>

			<div className="social-links">{socialList}</div>
		</footer>
	);
};

export default FooterFooter;
