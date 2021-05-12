import React, { useState } from "react";

// Import Custom Hook
import useDarkMode from "./../../../CustomeHooks/useDarkMode/useDarkMode";

// Main Dark Mode Sass File
import "./DarkMode.scss";

const DarkMode = () => {
	const { enableDarkMode, disableDarkMode, localStorage } = useDarkMode();
	const [darkMode, setDarkMode] = useState(localStorage);
	const [animate, setAnimate] = useState(false);

	// Change Theme Function
	const changeTheme = (e) => {
		// Enable & Disable Dark Mode
		if (!darkMode) {
			enableDarkMode();
		} else {
			disableDarkMode();
		}

		// Change Button Icon
		setTimeout(() => {
			setDarkMode((mode) => !mode);
		}, 150);

		// Handle Change Button Icon
		setAnimate(true);
		setTimeout(() => {
			setAnimate(false);
		}, 310);
	};

	return (
		<button
			className="dark-mode-btn"
			aria-label="Dark Mode Button"
			onClick={changeTheme}
		>
			<i
				className={`icon fas ${darkMode ? "fa-sun" : "fa-moon"} ${
					animate ? "animate" : ""
				}`}
			></i>
		</button>
	);
};

export default DarkMode;
