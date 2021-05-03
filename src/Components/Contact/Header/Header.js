// Main Contact Header Sass File
import "./Header.scss";

// Contact Header Component
const ContactHeader = (props) => {
	const {
		header: { title, body },
		social,
	} = props;

	// Get Social Links List
	const socialList = social.map((item) => {
		return (
			<a key={item.id} href={item.link} target="_blank" rel="noreferrer">
				<i className={`icon ${item.icon}`}></i>
			</a>
		);
	});

	return (
		<header className="contact-header">
			<h2 className="contact-title">{title}</h2>
			<p className="contact-paragraph">{body}</p>
			<div className="social-links">{socialList}</div>
		</header>
	);
};

export default ContactHeader;
