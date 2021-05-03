// Main Services Header Sass File
import "./Header.scss";

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

export default ServicesHeader;
