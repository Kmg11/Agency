import React, { useState, useEffect, useRef } from "react";

// Main Portfolio Nav Sass File
import "./Nav.scss";

// Portfolio Nav Component
const PortfolioNav = ({ nav, changeType }) => {
	// States
	const [lineStyle, setLineStyle] = useState({ left: "", width: "" });
	const [activeItem, setActiveItem] = useState(1);

	// Refs
	const selected = useRef(0);

	// Handle Line Function When Click
	const handleLine = (index, e) => {
		const elementStyle = getComputedStyle(e.target);

		setLineStyle({
			left: e.target.offsetLeft + 0.5 * parseFloat(elementStyle.paddingLeft),
			width: e.target.offsetWidth - parseFloat(elementStyle.paddingLeft),
		});

		setActiveItem(index);

		changeType(e.target.textContent);
	};

	// Handle Selected Item
	useEffect(() => {
		const handleSelected = () => {
			const elementStyle = getComputedStyle(selected.current);

			setLineStyle({
				left:
					selected.current.offsetLeft +
					0.5 * parseFloat(elementStyle.paddingLeft),
				width:
					selected.current.offsetWidth - parseFloat(elementStyle.paddingLeft),
			});

			changeType(selected.current.textContent);
		};

		setTimeout(() => {
			handleSelected();
		}, 200);

		// Handle Selected Item [ Responsive ]
		window.addEventListener("resize", () => {
			handleSelected();
		});
	}, [changeType]);

	// Get Nav List
	const navList = nav.map((item, index) => {
		return (
			<li
				key={index}
				className={`${
					activeItem === index + 1 ? "portfolio-item active" : "portfolio-item"
				}`}
				onClick={(e) => handleLine(index + 1, e)}
				ref={activeItem === index + 1 ? selected : null}
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
