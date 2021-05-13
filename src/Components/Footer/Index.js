import React from "react";

// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";

// Import Components
import FooterFooter from "./Footer/Footer";
import FooterLinks from "./Links/Links";
import FooterHeader from "./Header/Header";

// Main Footer Sass File
import "./Index.scss";

// Main Footer Component
const Footer = () => {
	// Fetch data
	const {
		data: {
			header = {},
			about_us_links: about = [],
			contact_us_links: contact = [],
			videos_links: videos = [],
			copy_right: copyRight = [],
		},
	} = useAxios("./Apis/footer.json", []);

	return (
		<footer className="main-footer">
			<div className="container">
				<FooterHeader header={header} />
				<FooterLinks about={about} contact={contact} videos={videos} />
				<FooterFooter copyRight={copyRight} />
			</div>
		</footer>
	);
};

export default Footer;
