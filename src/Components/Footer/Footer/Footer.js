import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Main Footer Footer Sass File
import "./Footer.scss";

// Footer Footer Component
const FooterFooter = (props) => {
	const { social, copyRight } = props;

	// Get Social List
	const socialList = social.map((item) => {
		return (
			<a key={item.id} href={item.link} target="_blank" rel="noreferrer">
				<i className={`icon ${item.icon}`}></i>
			</a>
		);
	});

	const [image, setImage] = useState([]);
	const [text, setText] = useState([]);

	useEffect(() => {
		axios.get("./Apis/Logo.json").then(({ data }) => {
			const { image, text } = data;
			setImage(image);
			setText(text);
		});
	}, []);

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
