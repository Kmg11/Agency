import React, { useState, useEffect } from "react";
import axios from "axios";

// Import Custome Hooks
import useDarkMode from "./../../CustomeHooks/useDarkMode/useDarkMode";

// Import Components
import ServicesContainer from "./Body/Body";
import ServicesHeader from "./Header/Header";

// Main Services Sass File
import "./Index.scss";

// Services Background
const servicesBg = {
	backgroundImage: "url(./../../Images/Services/background.svg)",
};

// Services Background Dark
const servicesBgDark = {
	backgroundImage: "url(./../../Images/Services/background-dark.svg)",
};

// Main Services Component
const Services = ({ services }) => {
	const { localStorage } = useDarkMode();
	const [header, setHeader] = useState([]);
	const [content, setContent] = useState([]);

	// Initialize
	useEffect(() => {
		// Fetch Data From Api
		axios.get("./Apis/services.json").then(({ data }) => {
			const { header, content } = data;
			setHeader(header);
			setContent(content);
		});

		// Reset States When Component Unmounted
		return () => {
			setHeader([]);
			setContent([]);
		};
	}, []);

	return (
		<section
			className="services"
			style={localStorage ? servicesBgDark : servicesBg}
			ref={services}
		>
			<div className="container">
				<ServicesHeader header={header} />
				<ServicesContainer content={content} />
			</div>
		</section>
	);
};

export default Services;
