// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";

// Import Components
import TeamHeader from "./Header/Header";
import TeamBody from "./Body/Body";

// Main Team Sass File
import "./Index.scss";

const Team = () => {
	// Fetch data
	const {
		data: { header = {}, content = [] },
	} = useAxios("./Apis/team.json", []);

	return (
		<section className="team">
			<TeamHeader header={header} />
			<TeamBody content={content} />
		</section>
	);
};

export default Team;
