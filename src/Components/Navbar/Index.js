import React, { useState, useEffect, useRef } from "react";

// Import Components
import NavbarLogo from "./Logo/Logo";
import NavbarResponsiveBtn from "./Button/Button";
import NavbarList from "./List/List";

// Main Navbar Sass File
import "./Index.scss";

// Mani Navbar Component
const Navbar = () => {
	// States
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [navbarScroll, setNavbarScroll] = useState(false);

	// Refs
	const navbar = useRef();

	// Handle Closing Navbar When Click Anywhere
	useEffect(() => {
		document.addEventListener("click", function eventFn(e) {
			if (navbarOpen) {
				if (e.target !== navbar.current) {
					setNavbarOpen(false);
					document.removeEventListener("click", eventFn);
				}
			}
		});
	}, [navbarOpen]);

	// Handle Close Navbar When Press ESC Key
	useEffect(() => {
		window.addEventListener("keyup", function eventFn(e) {
			if (navbarOpen) {
				if (e.key === "Escape" && e.code === "Escape") {
					setNavbarOpen(false);
					window.removeEventListener("keyup", eventFn);
				}
			}
		});

		return () => {};
	}, [navbarOpen]);

	// Handle Close Navbar When Resize Window
	useEffect(() => {
		window.addEventListener("resize", function eventFn() {
			if (navbarOpen) {
				setNavbarOpen(false);
				window.removeEventListener("resize", eventFn);
			}
		});
	}, [navbarOpen]);

	// Handle Scrolling Function
	useEffect(() => {
		window.addEventListener("scroll", function eventFn() {
			if (window.pageYOffset > 50 && !navbarScroll) {
				setNavbarScroll(true);
				window.removeEventListener("scroll", eventFn);
			} else if (window.pageYOffset < 50 && navbarScroll) {
				setNavbarScroll(false);
				window.removeEventListener("scroll", eventFn);
			}
		});
	}, [navbarScroll]);

	return (
		<nav
			className={`navbar
				${navbarOpen ? " open" : ""}
				${navbarScroll ? " scroll" : ""}
			`}
			ref={navbar}
			onClick={(e) => e.stopPropagation()}
		>
			<div className="container">
				<div className="navbar-inner">
					<NavbarLogo />
					<NavbarResponsiveBtn setNavbarOpen={setNavbarOpen} />
					<NavbarList setNavbarOpen={setNavbarOpen} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
