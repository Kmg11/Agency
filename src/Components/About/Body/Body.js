import React, { useState } from "react";

// Import Custome Hooks
import { useDarkTheme } from "./../../../CustomeHooks/useDarkTheme/useDarkTheme";

// Main About Body Sass File
import "./Body.scss";

// About Body Component
const AboutBody = (props) => {
	const darkTheme = useDarkTheme();
	const [readMore, setReadMore] = useState(false);

	// Handle Read More Function
	const handleReading = (e) => {
		e.target.parentElement.style.opacity = "0";

		setTimeout(() => {
			setReadMore(!readMore);
			e.target.parentElement.style.opacity = "1";
		}, 300);
	};

	const {
		content: {
			image,
			image_dark,
			title,
			paragraph_1,
			paragraph_1_more,
			paragraph_2,
			paragraph_2_more,
		},
	} = props;

	return (
		<section className="about-body">
			<div className="about-image">
				<img
					src={darkTheme ? image_dark : image}
					alt="About"
					draggable="false"
				/>
			</div>

			<div className="about-desc">
				<h3 className="desc-title">{title}</h3>

				<p className="desc-paragraph">
					{!readMore ? paragraph_1 : paragraph_1_more}
				</p>

				<p className="desc-paragraph">
					{!readMore ? paragraph_2 : paragraph_2_more}
				</p>

				<button className="desc-btn" onClick={handleReading}>
					{!readMore ? "Read More" : "Read Less"}
				</button>
			</div>
		</section>
	);
};

export default AboutBody;
