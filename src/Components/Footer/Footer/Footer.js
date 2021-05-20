import { Link } from "react-router-dom";

// Import Custome Hooks
import useAxios from "./../../../CustomeHooks/useAxios/useAxios";
import usePreventRouterLinks from "./../../../CustomeHooks/usePreventRouterLinks/usePreventRouterLinks";

// Main Footer Footer Sass File
import "./Footer.scss";

// Footer Footer Component
const FooterFooter = ({ copyRight }) => {
	// Custome Hooks
	const { preventRouterLinks } = usePreventRouterLinks("/");

	// Fetch Logo
	const {
		data: { image = "", text = "" },
	} = useAxios("./Apis/logo.json", []);

	// Fetch Social
	const { data: social = [] } = useAxios("./Apis/social.json", []);

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
			<Link to="/" onClick={preventRouterLinks} className="logo">
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
