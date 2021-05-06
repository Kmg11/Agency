// Maon Team Header Sass File
import "./Header.scss";

const TeamHeader = (props) => {
	const {
		header: { title, body },
	} = props;

	return (
		<header className="team-header">
			<h2 className="team-title">{title}</h2>
			<p className="team-paragraph">{body}</p>
		</header>
	);
};

export default TeamHeader;
