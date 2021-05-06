import axios from "axios";
import { useEffect, useState } from "react";

// Import Components
import TeamHeader from "./Header/Header";
import TeamBody from "./Body/Body";

// Main Team Sass File
import "./Index.scss";

const Team = (props) => {
	const [header, setHeader] = useState([]);
	const [content, setContent] = useState([]);

	useEffect(() => {
		axios.get("./Apis/team.json").then(({ data }) => {
			const { header, content } = data;

			setHeader(header);
			setContent(content);
		});
	}, []);

	return (
		<section className="team">
			<TeamHeader header={header} />
			<TeamBody content={content} />
		</section>
	);
};

export default Team;
