import axios from "axios";
import React, { Component, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Index.scss";

const PortfolioBg = {
	backgroundImage: "url('./Images/Portfolio/background.svg')",
};

const Portfolio = () => {
	const [header, setHeader] = useState([]);
	const [nav, setNav] = useState([]);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		axios.get("./Js/data.json").then(({ data }) => {
			const { header, nav, projects } = data.portfolio;
			setHeader(header);
			setNav(nav);
			setProjects(projects);
		});
	}, []);

	return (
		<section className="portfolio" style={PortfolioBg}>
			<div className="container">
				<PortfolioHeader data={header} />
				<PortfolioBody nav={nav} projects={projects} />
			</div>
		</section>
	);
};

const PortfolioHeader = (props) => {
	const { title, body } = props.data;

	return (
		<header className="portfolio-header">
			<h2 className="portfolio-title">{title}</h2>
			<p className="portfolio-paragraph">{body}</p>
		</header>
	);
};

const PortfolioBody = (props) => {
	const { nav, projects } = props;

	const [type, setType] = useState("All Work");

	const changeType = (value) => {
		setType(value);
	};

	return (
		<section className="portfolio-body">
			<PortfolioNav data={nav} changeType={changeType} />
			<PortfolioProjects data={projects} type={type} />
		</section>
	);
};

class PortfolioNav extends Component {
	constructor(props) {
		super(props);

		// Refs
		this.selected = React.createRef();

		// Bind
		this.handleLineResponsive = this.handleLineResponsive.bind(this);
		this.handleSelected = this.handleSelected.bind(this);

		this.state = {
			lineStyle: { left: "", width: "" },
			activeItem: 1,
		};
	}

	// Handle Started Functions
	componentDidMount() {
		// setTimeout For Avoid null In this.selected
		setTimeout(() => {
			this.handleSelected();
		}, 200);
		this.handleLineResponsive();
	}

	// Handle Line Function When Click
	handleLine(index, e) {
		const elementStyle = getComputedStyle(e.target);

		this.setState({
			lineStyle: {
				left: e.target.offsetLeft + 0.5 * parseFloat(elementStyle.paddingLeft),
				width: e.target.offsetWidth - parseFloat(elementStyle.paddingLeft),
			},
			activeItem: index,
		});

		this.props.changeType(e.target.textContent);
	}

	// Handle Selected Item
	handleSelected() {
		const elementStyle = getComputedStyle(this.selected.current);

		this.setState({
			lineStyle: {
				left:
					this.selected.current.offsetLeft +
					0.5 * parseFloat(elementStyle.paddingLeft),
				width:
					this.selected.current.offsetWidth -
					parseFloat(elementStyle.paddingLeft),
			},
		});

		this.props.changeType(this.selected.current.textContent);
	}

	// Handle Selected Item [ Responsive ]
	handleLineResponsive() {
		window.addEventListener("resize", () => {
			this.handleSelected();
		});
	}

	render() {
		const nav = this.props.data;
		const navList = nav.map((item, index) => {
			return (
				<li
					key={index}
					className={`${
						this.state.activeItem === index + 1
							? "portfolio-item active"
							: "portfolio-item"
					}`}
					onClick={(e) => this.handleLine(index + 1, e)}
					ref={this.state.activeItem === index + 1 ? this.selected : null}
				>
					{item}
				</li>
			);
		});

		return (
			<div className="portfolio-nav">
				<ul className="portfolio-list">{navList}</ul>

				<div className="list-line" style={this.state.lineStyle}></div>
			</div>
		);
	}
}

const PortfolioProjects = (props) => {
	const { data: projects, type } = props;

	const defaultNumber = 9;
	const [numberOfProjects, setNumberOfProjects] = useState(defaultNumber);

	const viewAllProjects = () => {
		if (numberOfProjects !== projects.length) {
			setNumberOfProjects(projects.length);
		} else {
			setNumberOfProjects(defaultNumber);
		}
	};

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
