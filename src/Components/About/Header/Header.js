// Main About Header Sass File
import "./Header.scss";

// About Header Component
const AboutHeader = (props) => {
	const {
		header: { title, body },
	} = props;

	return (
		<header className="about-header">
			<h2 className="about-title">{title}</h2>
			<p className="about-paragraph">{body}</p>
		</header>
	);
};

export default AboutHeader;
