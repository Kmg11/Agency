import React, { useState } from "react";

// Import Custom Hook
import {
	useDarkTheme,
	useToggleDarkTheme,
} from "../../../CustomeHooks/useDarkTheme/useDarkTheme";
import useThrottle from "./../../../CustomeHooks/useThrottle/useThrottle";

// Main Dark Theme Sass File
import "./DarkTheme.scss";

const DarkTheme = () => {
	const darkTheme = useDarkTheme();
	const toggleDarkTheme = useToggleDarkTheme();
	const { throttle } = useThrottle();

	const [animate, setAnimate] = useState(false);

	// Change Theme Function
	const changeTheme = throttle(() => {
		// Toggle Dark Theme
		toggleDarkTheme();

		// Handle Change Button Icon
		setAnimate(true);

		setTimeout(() => {
			setAnimate(false);
		}, 310);
	}, 400);

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
