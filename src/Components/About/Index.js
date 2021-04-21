import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Index.scss";

const About = () => {
	const [header, setHeader] = useState([]);
	const [info, setInfo] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		axios.get("./Js/data.json").then(({ data }) => {
			const { header, about_container } = data.about;
			setHeader(header);
			setInfo(about_container);
		});
	};

	return (
		<section className="about">
			<div className="container">
				<AboutHeader data={header} />
				<AboutBody data={info} />
			</div>
		</section>
	);
};

const AboutHeader = (props) => {
	const { title, body } = props.data;

	return (
		<header className="about-header">
			<h2 className="about-title">{title}</h2>
			<p className="about-paragraph">{body}</p>
		</header>
	);
};

const AboutBody = (props) => {
	const [readMore, setReadMore] = useState(false);

	const handleReading = (e) => {
		e.target.parentElement.style.opacity = "0";

		setTimeout(() => {
			setReadMore(!readMore);
			e.target.parentElement.style.opacity = "1";
		}, 300);
	};

	const {
		image,
		title,
		paragraph_1,
		paragraph_1_more,
		paragraph_2,
		paragraph_2_more,
	} = props.data;

	return (
		<section className="about-body">
			<div className="about-image">
				<img src={image} alt="About" />
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

export default About;
