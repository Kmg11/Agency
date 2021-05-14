import React from "react";

// Import Conponents
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import DarkTheme from "./DarkTheme/DarkTheme";

// Main Buttons Sass File
import "./Index.scss";

const Buttons = () => {
	return (
		<div className="option-buttons">
			<ScrollToTop />
			<DarkTheme />
		</div>
	);
};

export default Buttons;
