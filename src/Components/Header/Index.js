// Main Header Sass File
import axios from "axios";
import { useEffect, useState } from "react";
import "./Index.scss";

const Header = ({ exploreFn }) => {
	// Header Data
	const [data, setdata] = useState({
		title: {
			before: "",
			word: "",
			after: "",
		},
	});

	useEffect(() => {
		// Fetch Header Data
		axios.get("./Apis/Header.json").then(({ data }) => {
			setdata(data);
		});
	}, []);

	const {
		title: { before, word, after },
		body,
		button,
		image,
	} = data;

	return (
		<header className="main-header">
			<div className="container">
				<div className="header-inner">
					<section className="header-desc">
						<h1 className="header-title">
							{before} <span>{word}</span> {after}
						</h1>
						<p className="header-paragraph">{body}</p>
						<button className="header-btn" onClick={exploreFn}>
							{button}
						</button>
					</section>

					<section className="header-image">
						<img src={image} alt="header-Illustration" draggable="false" />
					</section>
				</div>
			</div>
		</header>
	);
};

export default Header;
