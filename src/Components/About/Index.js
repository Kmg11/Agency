import React from "react";

// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";

// Import Components
import AboutHeader from "./Header/Header";
import AboutBody from "./Body/Body";
import Loading from "./../Loading/Index";
import Error from "./../Error/Index";

// Main About Sass File
import "./Index.scss";

// Main About Component
const About = () => {
	// Fetch data
	const {
		data: { header = {}, content = {} },
		success,
		isPending,
		error,
	} = useAxios("./Apis/about.json", []);

	return (
		<section className="about">
			{isPending && <Loading />}

			{success && (
				<div className="container">
					<AboutHeader header={header} />
					<AboutBody content={content} />
				</div>
			)}

			{error && <Error message={error.message} name="About" />}
		</section>
	);
};

export default About;
