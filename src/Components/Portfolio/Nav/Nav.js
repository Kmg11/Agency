import React, { useState, useEffect, useRef, useCallback } from "react";

// Main Portfolio Nav Sass File
import "./Nav.scss";

// Portfolio Nav Component
const PortfolioNav = ({ nav, changeType }) => {
	// States
	const [lineStyle, setLineStyle] = useState({ left: "", width: "" });
	const [activeItem, setActiveItem] = useState(0);

	// Refs
	const selected = useRef(0);

	// Handle Line Function When Click
	const handleLine = useCallback(
		(index, target) => {
			const elementStyle = getComputedStyle(target);

			setLineStyle({
				left: target.offsetLeft + 0.5 * parseFloat(elementStyle.paddingLeft),
				width: target.offsetWidth - parseFloat(elementStyle.paddingLeft),
			});

			setActiveItem(index);

			changeType(target.textContent);
		},
		[changeType]
	);

	// Handle Selected Item
	useEffect(() => {
		const handleLineResize = () => handleLine(activeItem, selected.current);

		if (selected.current) {
			// Trigger Function
			handleLine(activeItem, selected.current);

			// Handle Selected Item [ Responsive ]
			window.addEventListener("resize", handleLineResize);
		} else {
			changeType("All Work");
		}

		return () => {
			window.removeEventListener("resize", handleLineResize);
		};
	}, [changeType, handleLine, activeItem]);

	// Get Nav List
	const navList = nav.map((item, index) => {
		return (
			<li
				key={index}
				className={`${
					activeItem === index + 1 ? "portfolio-item active" : "portfolio-item"
				}`}
				onClick={(e) => handleLine(index, e.target)}
				ref={activeItem === index ? selected : null}
			>
				{item}
			</li>
		);
	});

	return (
		<div className="portfolio-nav">
			<ul className="portfolio-list">{navList}</ul>
			<div className="list-line" style={lineStyle}></div>
		</div>
	);
};

export default PortfolioNav;
