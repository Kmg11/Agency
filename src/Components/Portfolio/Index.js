import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

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

		// Reset States When Component Unmounted
		return () => {
			setHeader([]);
			setNav([]);
			setProjects([]);
		};
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
const PortfolioBody = ({ nav, projects }) => {
	// Refs
	const projectsContainer = useRef();

	// Type State
	const [type, setType] = useState("All Work");

	// Chang Type Of Projects Viewed
	const changeType = (value) => {
		if (value !== type && projectsContainer) {
			projectsContainer.current.classList.add("change-type");

			setTimeout(() => {
				projectsContainer.current.classList.remove("change-type");
			}, 500);

			setTimeout(() => {
				setType(value);
			}, 300);
		}
	};

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
