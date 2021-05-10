import { Link } from "react-router-dom";

// Main Services Container Sass File
import "./Body.scss";

// Services Container Component
const ServicesContainer = ({ content }) => {
	// Get Services List
	const servicesList = content.map((serv) => {
		return (
			<div key={serv.id} className="services-card">
				<Link to="/services" className="services-link"></Link>

				<h3 className="card-title">{serv.title}</h3>
				<div className="card-img">
					<img src={serv.image} alt={serv.title} draggable="false" />
				</div>
				<p className="card-paragraph">{serv.body}</p>
			</div>
		);
	});

	return <section className="services-container">{servicesList}</section>;
};

export default ServicesContainer;
