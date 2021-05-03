import { Link } from 'react-router-dom'

// Main Services Container Sass File
import './Container.scss';

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

export default ServicesContainer;
