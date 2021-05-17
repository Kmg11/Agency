import React, { useState, useEffect, useRef, useCallback } from "react";

// Import Custome Hooks
import useDebounce from "./../../../CustomeHooks/useDebounce/useDebounce";
import useThrottle from "./../../../CustomeHooks/useThrottle/useThrottle";

// Main Portfolio Nav Sass File
import "./Nav.scss";

// Portfolio Nav Component
const PortfolioNav = ({ nav, type, changeType }) => {
	// Custome Hooks
	const { debounce } = useDebounce();
	const { throttle } = useThrottle();

	// States
	const [lineStyle, setLineStyle] = useState({ left: 0, width: "80px" });
	const [activeItem, setActiveItem] = useState(0);
	const [componentMount, setComponentMount] = useState(false);

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
		const debounceHandleLine = debounce(
			() => handleLine(activeItem, selected.current),
			200
		);

		if (selected.current) {
			// Trigger Function For FIrst Time Component Mount
			if (!componentMount) {
				setComponentMount(true);
				handleLine(activeItem, selected.current);
			}

			// Handle Selected Item [ Responsive ]
			window.addEventListener("resize", debounceHandleLine);
		} else {
			changeType(type);
		}

		return () => {
			window.removeEventListener("resize", debounceHandleLine);
		};
	}, [debounce, componentMount, handleLine, activeItem, changeType, type]);

	// Handle Line For Clicking
	const handleLineClick = (index, target) => {
		// Throttle Handle Line
		const throttleHandleLine = throttle(handleLine, 500);

		if (type !== target.textContent) {
			throttleHandleLine(index, target);
		}
	};

	// Get Nav List
	const navList = nav.map((item, index) => {
		return (
			<li
				key={index}
				className={`${
					activeItem === index ? "portfolio-item active" : "portfolio-item"
				}`}
				onClick={(e) => handleLineClick(index, e.target)}
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
