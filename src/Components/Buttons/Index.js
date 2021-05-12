import React from "react";

// Import Conponents
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import DarkMode from "./DarkMode/DarkMode";

// Main Buttons Sass File
import "./Index.scss";

const Buttons = () => {
	return (
		<div className="option-buttons">
			<ScrollToTop />
			<DarkMode />
		</div>
	);
};

export default Buttons;
