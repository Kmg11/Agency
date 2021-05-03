// Main Footer Links Sass File
import "./Links.scss";

// Footer Links Component
const FooterLinks = (props) => {
	const { about, contact, videos, social } = props;

	// Collect Data & Add Title
	const links = [
		{ id: 1, title: "About Us", links: about },
		{ id: 2, title: "Contact Us", links: contact },
		{ id: 3, title: "Videos", links: videos },
		{ id: 4, title: "Social Media", links: social },
	];

	// Get Items List
	const getItems = (index) => {
		const linksItems = links[index].links.map((item) => {
			return (
				<li key={item.id} className="links-item">
					<a
						href={item.link}
						target="_blank"
						rel="noreferrer"
						className="links-link"
					>
						{item.name}
					</a>
				</li>
			);
		});

		return linksItems;
	};

	// Get Links List
	const linksList = links.map((link, index) => {
		return (
			<div key={link.id} className="links">
				<h3 className="links-title">{link.title}</h3>
				<ul className="links-list">{getItems(index)}</ul>
			</div>
		);
	});

	return <div className="footer-links">{linksList}</div>;
};

export default FooterLinks;
