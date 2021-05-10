import axios from "axios";
import { useEffect, useState } from "react";

// Import Components
import TeamHeader from "./Header/Header";
import TeamBody from "./Body/Body";

// Main Team Sass File
import "./Index.scss";

const Team = () => {
	const [header, setHeader] = useState([]);
	const [content, setContent] = useState([]);

	useEffect(() => {
		// Fetch Data
		axios.get("./Apis/team.json").then(({ data }) => {
			const { header, content } = data;
			setHeader(header);
			setContent(content);
		});

		// Reset States When Component Unmounted
		return () => {
			setHeader([]);
			setContent([]);
		};
	}, []);

	return (
		<section className="team">
			<TeamHeader header={header} />
			<TeamBody content={content} />
		</section>
	);
};

export default Team;
