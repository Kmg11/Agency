import React, { useState, useEffect } from "react";
import axios from "axios";

// Import Components
import ServicesContainer from "./Body/Body";
import ServicesHeader from "./Header/Header";

// Main Services Sass File
import "./Index.scss";

// Services Background
const servicesBg = {
	backgroundImage: "url(./../../Images/Services/background.svg)",
};

// Main Services Component
const Services = ({ services }) => {
	// Data States
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
	}, []);

	return (
		<section className="services" ref={services} style={servicesBg}>
			<div className="container">
				<ServicesHeader header={header} />
				<ServicesContainer content={content} />
			</div>
		</section>
	);
};

export default Services;
