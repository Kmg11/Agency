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

	// Handle [Open & Close] Navbar
	const openCloseNavbar = () => {
		setNavbarOpen((prevValue) => !prevValue);
	};

	// Stop Propagation For Navbar To Handle closeNavbar Function
	const handleNavbarClicking = (e) => {
		e.stopPropagation();
	};

	// Handle Resize Window
	useEffect(() => {
		window.addEventListener("resize", () => {
			if (navbarOpen) {
				setNavbarOpen(false);
			}
		});
	}, [navbarOpen]);

	// Handle Closing Navbar When Click Anywhere
	useEffect(() => {
		document.addEventListener("click", (e) => {
			if (navbarOpen) {
				if (e.target !== navbar.current) {
					setNavbarOpen(false);
				}
			}
		});
	}, [navbarOpen]);

	// Handle Scrolling Function
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 50) {
				setNavbarScroll(true);
			} else {
				setNavbarScroll(false);
			}
		});
	}, [navbarScroll]);

	return (
		<nav
			className={`navbar${navbarOpen ? " open" : ""}${
				navbarScroll ? " scroll" : ""
			}`}
			ref={navbar}
			onClick={handleNavbarClicking}
		>
			<div className="container">
				<div className="navbar-inner">
					<NavbarLogo />
					<NavbarResponsiveBtn openCloseNavbar={openCloseNavbar} />
					<NavbarList />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
