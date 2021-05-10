// Main Footer Header Sass File
import "./Header.scss";

// Footer Header Component
const FooterHeader = ({ header: { title } }) => {
	return (
		<header className="footer-header">
			<h2 className="footer-title">{title}</h2>

			<form className="newsletter-form">
				<input type="text" placeholder="Email" />
				<input type="submit" value="JOIN" />
			</form>
		</header>
	);
};

export default FooterHeader;
