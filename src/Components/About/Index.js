import React from "react";

// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";

// Import Components
import AboutHeader from "./Header/Header";
import AboutBody from "./Body/Body";

// Main About Sass File
import "./Index.scss";

// Main About Component
const About = () => {
	// Fetch data
	const {
		data: { header = {}, content = {} },
	} = useAxios("./Apis/about.json", []);

	return (
		<section className="about">
			<div className="container">
				<AboutHeader header={header} />
				<AboutBody content={content} />
			</div>
		</section>
	);
};

export default About;
