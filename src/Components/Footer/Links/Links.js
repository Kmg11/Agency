// Import Custome Hooks
import useAxios from "./../../../CustomeHooks/useAxios/useAxios";

// Main Footer Links Sass File
import "./Links.scss";

// Footer Links Component
const FooterLinks = ({ content: linksBlocks }) => {
	// Fetch data
	const { data: social = [] } = useAxios("./Apis/social.json", []);

	const footerBlocks = [
		...linksBlocks,
		{ id: 4, title: "Social Media", links: social },
	];

	const footerBlocksList = footerBlocks.map((block) => {
		return (
			<div key={block.id} className="links">
				<h3 className="links-title">{block.title}</h3>
				<ul className="links-list">
					{block.links.map((link) => {
						return (
							<li key={link.id} className="links-item">
								<a
									href={link.link}
									target="_blank"
									rel="noreferrer"
									className="links-link"
								>
									{link.name}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	});

	return <div className="footer-links">{footerBlocksList}</div>;
};

export default FooterLinks;
