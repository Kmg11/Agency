import React, { useState } from "react";

// Import Custom Hook
import useLocalStorage from "./../../../CustomeHooks/useLocalStorage/useLocalStorage";
import useDarkMode from "./../../../CustomeHooks/useDarkMode/useDarkMode";

// Main Dark Mode Sass File
import "./DarkMode.scss";

const DarkMode = () => {
	const { enableDarkMode, disableDarkMode } = useDarkMode();
	const [localStorage] = useLocalStorage("dark-mode", false);
	const [darkMode, setDarkMode] = useState(localStorage);
	const [rotate, setRotate] = useState(false);

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
		setRotate(true);
		setTimeout(() => {
			setRotate(false);
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
					rotate ? "rotate" : ""
				}`}
			></i>
		</button>
	);
};

export default DarkMode;
