import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Main Services Sass File
import "./Index.scss";

// Services Background
const servicesBg = {
	backgroundImage: "url(./../../Images/Services/background.svg)",
};

// Main Services Component
const Services = () => {
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
		<section className="services" style={servicesBg}>
			<div className="container">
				<ServicesHeader header={header} />
				<ServicesContainer content={content} />
			</div>
		</section>
	);
};

// Services Header Component
const ServicesHeader = (props) => {
	const {
		header: { title, body },
	} = props;

	return (
		<header className="services-header">
			<h2 className="services-title">{title}</h2>
			<p className="services-paragraph">{body}</p>
		</header>
	);
};

// Services Container Component
const ServicesContainer = (props) => {
	const { content } = props;

	// Get Services List
	const servicesList = content.map((serv) => {
		return (
			<div key={serv.id} className="services-card">
				<Link to="/services" className="services-link">
					<h3 className="card-title">{serv.title}</h3>
					<div className="card-img">
						<img src={serv.image} alt={serv.title} draggable="false" />
					</div>
					<p className="card-paragraph">{serv.body}</p>
				</Link>
			</div>
		);
	});

	return <section className="services-container">{servicesList}</section>;
};

export default Services;
