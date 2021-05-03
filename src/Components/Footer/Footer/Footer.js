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

	return (
		<footer className="footer-footer">
			<Link to="/" className="logo">
				<img
					src="./Images/Main/logo.svg"
					alt="Logo"
					draggable="false"
					className="logo-image"
				/>
				<span className="logo-text">Agency</span>
			</Link>

			<p className="copy-right">{copyRight}</p>

			<div className="social-links">{socialList}</div>
		</footer>
	);
};

export default FooterFooter;
