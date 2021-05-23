// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";

// Import Components
import TeamHeader from "./Header/Header";
import TeamBody from "./Body/Body";
import Loading from "./../Loading/Index";
import Error from "./../Error/Index";

// Main Team Sass File
import "./Index.scss";
import { Fragment } from "react";

const Team = () => {
	// Fetch data
	const {
		data: { header = {}, content = [] },
		success,
		isPending,
		error,
	} = useAxios("./Apis/team.json", []);

	return (
		<section className="team">
			{isPending && <Loading />}

			{success && (
				<Fragment>
					<TeamHeader header={header} />
					<TeamBody content={content} />
				</Fragment>
			)}

			{error && <Error message={error.message} name="Team" />}
		</section>
	);
};

export default Team;
