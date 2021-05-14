import React, { useState } from "react";

// Import Custom Hook
import {
	useDarkTheme,
	useToggleDarkTheme,
} from "../../../CustomeHooks/useDarkTheme/useDarkTheme";

// Main Dark Theme Sass File
import "./DarkTheme.scss";

const DarkTheme = () => {
	const darkTheme = useDarkTheme();
	const toggleDarkTheme = useToggleDarkTheme();
	const [animate, setAnimate] = useState(false);

	// Change Theme Function
	const changeTheme = () => {
		// Toggle Dark Theme
		toggleDarkTheme();

		// Handle Change Button Icon
		setAnimate(true);
		setTimeout(() => {
			setAnimate(false);
		}, 310);
	};

	return (
		<button
			className="dark-theme-btn"
			aria-label="Dark Theme Button"
			onClick={changeTheme}
		>
			<i
				className={`icon fas ${darkTheme ? "fa-sun" : "fa-moon"} ${
					animate ? "animate" : ""
				}`}
			></i>
		</button>
	);
};

export default DarkTheme;
