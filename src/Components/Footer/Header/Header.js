import { useState } from "react";

// Main Footer Header Sass File
import "./Header.scss";

// Footer Header Component
const FooterHeader = ({ header: { title } }) => {
	const [email, setEmail] = useState("");

	return (
		<header className="footer-header">
			<h2 className="footer-title">{title}</h2>

			<form className="newsletter-form">
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input type="submit" value="JOIN" />
			</form>
		</header>
	);
};

export default FooterHeader;
