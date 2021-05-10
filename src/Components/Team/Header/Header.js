// Maon Team Header Sass File
import "./Header.scss";

const TeamHeader = ({ header: { title, body } }) => {
	return (
		<header className="team-header">
			<h2 className="team-title">{title}</h2>
			<p className="team-paragraph">{body}</p>
		</header>
	);
};

export default TeamHeader;
