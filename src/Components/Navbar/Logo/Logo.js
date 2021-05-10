import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Main Navbar Logo Sass File
import "./Logo.scss";

// Navbar Logo Component
const NavbarLogo = () => {
	const [image, setImage] = useState([]);
	const [text, setText] = useState([]);

	useEffect(() => {
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

	return (
		<Link to="/" className="logo">
			{image && (
				<img src={image} alt="Logo" draggable="false" className="logo-image" />
			)}

			{text && <span className="logo-text">{text}</span>}
		</Link>
	);
};

export default NavbarLogo;
