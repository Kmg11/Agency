import axios from "axios";
import React, { useState, useEffect, useRef, useCallback, Fragment } from "react";
import { Link } from "react-router-dom";

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

// Portfolio Header Component
const PortfolioHeader = (props) => {
	const {
		header: { title, body },
	} = props;

	return (
		<header className="portfolio-header">
			<h2 className="portfolio-title">{title}</h2>
			<p className="portfolio-paragraph">{body}</p>
		</header>
	);
};

// Portfolio Body Component
const PortfolioBody = (props) => {
	const { nav, projects } = props;

	// Type State
	const [type, setType] = useState("All Work");

	// Chang Type Of Projects Viewed
	const changeType = useCallback((value) => {
		setType(value);
	}, []);

	return (
		<section className="portfolio-body">
			<PortfolioNav nav={nav} changeType={changeType} />
			<PortfolioProjects projects={projects} type={type} />
		</section>
	);
};

// Portfolio Nav Component
const PortfolioNav = (props) => {
	const { nav, changeType } = props;

	// States
	const [lineStyle, setLineStyle] = useState({ left: "", width: "" });
	const [activeItem, setActiveItem] = useState(1);

	// Refs
	const selected = useRef(0);

	// Handle Line Function When Click
	const handleLine = (index, e) => {
		const elementStyle = getComputedStyle(e.target);

		setLineStyle({
			left: e.target.offsetLeft + 0.5 * parseFloat(elementStyle.paddingLeft),
			width: e.target.offsetWidth - parseFloat(elementStyle.paddingLeft),
		});

		setActiveItem(index);

		changeType(e.target.textContent);
	};

	// Handle Selected Item
	useEffect(() => {
		const handleSelected = () => {
			const elementStyle = getComputedStyle(selected.current);

			setLineStyle({
				left:
					selected.current.offsetLeft +
					0.5 * parseFloat(elementStyle.paddingLeft),
				width:
					selected.current.offsetWidth - parseFloat(elementStyle.paddingLeft),
			});

			changeType(selected.current.textContent);
		};

		setTimeout(() => {
			handleSelected();
		}, 200)

		// Handle Selected Item [ Responsive ]
		window.addEventListener("resize", () => {
			handleSelected();
		});
	}, [changeType]);

	// Get Nav List
	const navList = nav.map((item, index) => {
		return (
			<li
				key={index}
				className={`${
					activeItem === index + 1 ? "portfolio-item active" : "portfolio-item"
				}`}
				onClick={(e) => handleLine(index + 1, e)}
				ref={activeItem === index + 1 ? selected : null}
			>
				{item}
			</li>
		);
	});

	return (
		<div className="portfolio-nav">
			<ul className="portfolio-list">{navList}</ul>
			<div className="list-line" style={lineStyle}></div>
		</div>
	);
};

// Portfolio Projects Component
const PortfolioProjects = (props) => {
	const { projects, type } = props;

	// Default Number Of Projects
	const defaultNumber = 9;

	// Number Of Projects State
	const [numberOfProjects, setNumberOfProjects] = useState(defaultNumber);

	const viewAllProjects = () => {
		if (numberOfProjects !== projects.length) {
			setNumberOfProjects(projects.length);
		} else {
			setNumberOfProjects(defaultNumber);
		}
	};

	// Get Projects List
	const projectsList = projects.map((project, index) => {
		return index < numberOfProjects ? (
			<div
				key={project.id}
				className={`${
					project.type === type || type === "All Work"
						? "project"
						: "project hidden"
				}`}
			>
				<Link to="/portfolio" className="project-link">
					<figure>
						<div className="project-image">
							<img src={project.image} alt={project.caption} />
							<span className="type">{project.type}</span>
						</div>
						<figcaption>{project.caption}</figcaption>
					</figure>
				</Link>
			</div>
		) : null;
	});

	return (
		<Fragment>
			<div className="projects">{projectsList}</div>
			<div className="portfolio-link">
				<Link to="/portfolio" onClick={viewAllProjects}>
					{numberOfProjects >= projects.length ? "View Less" : "View All"}
				</Link>
			</div>
		</Fragment>
	);
};

export default Portfolio;
