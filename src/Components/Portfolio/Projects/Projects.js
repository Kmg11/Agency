import { useState, Fragment } from "react";
import { Link } from "react-router-dom";

// Main Portfolio Projects Sass File
import "./Projects.scss";

// Portfolio Projects Component
const PortfolioProjects = ({ projects, type, projectsContainer }) => {
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
				<Link to="/portfolio" className="project-link"></Link>

				<figure>
					<div className="project-image">
						<img src={project.image} alt={project.caption} />
						<span className="type">{project.type}</span>
					</div>
					<figcaption>{project.caption}</figcaption>
				</figure>
			</div>
		) : null;
	});

	return (
		<Fragment>
			<div className="projects" ref={projectsContainer}>
				{projectsList}
			</div>
			<div className="portfolio-link">
				<Link to="/portfolio" onClick={viewAllProjects}>
					{numberOfProjects >= projects.length ? "View Less" : "View All"}
				</Link>
			</div>
		</Fragment>
	);
};

export default PortfolioProjects;
