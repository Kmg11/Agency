import axios from "axios";
import React, { useState, useEffect } from "react";

// Import Components
import AboutHeader from "./Header/Header";
import AboutBody from "./Body/Body";

// Main About Sass File
import "./Index.scss";

// Main About Component
const About = () => {
	// Data States
	const [header, setHeader] = useState([]);
	const [content, setContent] = useState([]);

	// Initialize
	useEffect(() => {
		// Fetch Data From Api
		axios.get("./Apis/about.json").then(({ data }) => {
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
		<section className="about">
			<div className="container">
				<AboutHeader header={header} />
				<AboutBody content={content} />
			</div>
		</section>
	);
};

export default About;
