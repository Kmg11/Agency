import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Index.scss";

const servicesBg = {
	backgroundImage: "url(./../../Images/Services/background.svg)",
};

const Services = (props) => {
	const [header, setHeader] = useState([]);
	const [services, setServices] = useState([]);

	useEffect(() => {
		axios.get("./Js/data.json").then(({ data }) => {
			const { header, services_container } = data.services;
			setHeader(header);
			setServices(services_container);
		});
	}, []);

	return (
		<section className="services" style={servicesBg}>
			<div className="container">
				<ServicesHeader data={header} />

				<ServicesContainer data={services} />
			</div>
		</section>
	);
};

const ServicesHeader = (props) => {
	return (
		<header className="services-header">
			<h2 className="services-title">{props.data.title}</h2>
			<p className="services-paragraph">{props.data.body}</p>
		</header>
	);
};

const ServicesContainer = (props) => {
	const { data } = props;
	const servicesList = data.map((serv) => {
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
