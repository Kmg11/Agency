// Main Portfolio Header Sass File
import "./Header.scss";

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

export default PortfolioHeader;
