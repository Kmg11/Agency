import { Link } from "react-router-dom";

// Import Custome Hooks
import { useDarkTheme } from "./../../../CustomeHooks/useDarkTheme/useDarkTheme";

// Main Services Container Sass File
import "./Body.scss";

// Services Container Component
const ServicesBody = ({ content }) => {
	const darkTheme = useDarkTheme();

	// Get Services List
	const servicesList = content.map((serv) => {
		return (
			<div key={serv.id} className="services-card">
				<Link
					to="/services"
					className="services-link"
					aria-label="Service Link"
				></Link>

				<h3 className="card-title">{serv.title}</h3>
				<div className="card-img">
					<img
						src={darkTheme ? serv.image_dark : serv.image}
						alt={serv.title}
						draggable="false"
					/>
				</div>
				<p className="card-paragraph">{serv.body}</p>
			</div>
		);
	});

	return <section className="services-container">{servicesList}</section>;
};

export default ServicesBody;
