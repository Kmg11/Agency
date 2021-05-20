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
			content = [
				{
					id: 1,
					title: "About Us",
					links: [],
				},
				{
					id: 2,
					title: "Contact Us",
					links: [],
				},
				{
					id: 3,
					title: "Videos",
					links: [],
				},
			],
			copy_right: copyRight = [],
		},
	} = useAxios("./Apis/footer.json", []);

	return (
		<footer className="main-footer">
			<div className="container">
				<FooterHeader header={header} />
				<FooterLinks content={content} />
				<FooterFooter copyRight={copyRight} />
			</div>
		</footer>
	);
};

export default Footer;
