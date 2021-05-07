import axios from "axios";
import React, { useState, useEffect } from "react";

// Import Components
import FooterFooter from "./Footer/Footer";
import FooterLinks from "./Links/Links";
import FooterHeader from "./Header/Header";

// Main Footer Sass File
import "./Index.scss";

// Main Footer Component
const Footer = () => {
	// Data States
	const [header, setHeader] = useState([]);
	const [about, setAbout] = useState([]);
	const [contact, setContact] = useState([]);
	const [videos, setVideos] = useState([]);
	const [copyRight, setCopyRight] = useState("");

	// Initialize
	useEffect(() => {
		// Fetch Data From Api
		axios.get("./Apis/footer.json").then(({ data }) => {
			const {
				header,
				about_us_links,
				contact_us_links,
				videos_links,
				copy_right,
			} = data;

			setHeader(header);
			setAbout(about_us_links);
			setContact(contact_us_links);
			setVideos(videos_links);
			setCopyRight(copy_right);
		});
	}, []);

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
