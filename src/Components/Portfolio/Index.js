import axios from "axios";
import React, { useState, useEffect, useCallback, useRef } from "react";

// Import Components
import PortfolioProjects from "./Projects/Projects";
import PortfolioNav from "./Nav/Nav";
import PortfolioHeader from "./Header/Header";

// Main About Sass File
import "./Index.scss";

// Portfolio Background
const PortfolioBg = {
	backgroundImage: "url('./Images/Portfolio/background.svg')",
};

// Main Portfolio Component
const Portfolio = () => {
	// Data States
	const [header, setHeader] = useState([]);
	const [nav, setNav] = useState([]);
	const [projects, setProjects] = useState([]);

	// Initialize
	useEffect(() => {
		// Fetch Data From Api
		axios.get("./Apis/portfolio.json").then(({ data }) => {
			const { header, nav, projects } = data;
			setHeader(header);
			setNav(nav);
			setProjects(projects);
		});
	}, []);

	return (
		<section className="portfolio" style={PortfolioBg}>
			<div className="container">
				<PortfolioHeader header={header} />
				<PortfolioBody nav={nav} projects={projects} />
			</div>
		</section>
	);
};

// Portfolio Body Component
const PortfolioBody = (props) => {
	const { nav, projects } = props;

	// Refs
	const projectsContainer = useRef();

	// Type State
	const [type, setType] = useState("All Work");

	// Chang Type Of Projects Viewed
	const changeType = useCallback(
		(value) => {
			if (value !== type) {
				projectsContainer.current.classList.add("change-type");

				setTimeout(() => {
					projectsContainer.current.classList.remove("change-type");
				}, 600);

				setTimeout(() => {
					setType(value);
				}, 200);
			}
		},
		[type]
	);

	return (
		<section className="portfolio-body">
			<PortfolioNav nav={nav} changeType={changeType} />
			<PortfolioProjects
				projects={projects}
				type={type}
				projectsContainer={projectsContainer}
			/>
		</section>
	);
};

export default Portfolio;
