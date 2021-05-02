import axios from "axios";
import React, { useState, useEffect } from "react";

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

// About Header Component
const AboutHeader = (props) => {
	const {
		header: { title, body },
	} = props;

	return (
		<header className="about-header">
			<h2 className="about-title">{title}</h2>
			<p className="about-paragraph">{body}</p>
		</header>
	);
};

// About Body Component
const AboutBody = (props) => {
	// Read More State
	const [readMore, setReadMore] = useState(false);

	// Handle Read More Function
	const handleReading = (e) => {
		e.target.parentElement.style.opacity = "0";

		setTimeout(() => {
			setReadMore(!readMore);
			e.target.parentElement.style.opacity = "1";
		}, 300);
	};

	const {
		content: {
			image,
			title,
			paragraph_1,
			paragraph_1_more,
			paragraph_2,
			paragraph_2_more,
		},
	} = props;

	return (
		<section className="about-body">
			<div className="about-image">
				<img src={image} alt="About" />
			</div>

			<div className="about-desc">
				<h3 className="desc-title">{title}</h3>

				<p className="desc-paragraph">
					{!readMore ? paragraph_1 : paragraph_1_more}
				</p>

				<p className="desc-paragraph">
					{!readMore ? paragraph_2 : paragraph_2_more}
				</p>

				<button className="desc-btn" onClick={handleReading}>
					{!readMore ? "Read More" : "Read Less"}
				</button>
			</div>
		</section>
	);
};

export default About;
