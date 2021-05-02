import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

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

// Navbar Logo Component
const NavbarLogo = () => {
	return (
		<NavLink exact to="/" className="logo">
			<img
				src="./Images/Main/logo.svg"
				alt="Logo"
				draggable="false"
				className="logo-image"
			/>
			<span className="logo-text">Agency</span>
		</NavLink>
	);
};

// Navbar Responsiv Btn Component
const NavbarResponsiveBtn = (props) => {
	return (
		<button className="navbar-responsive-btn" onClick={props.openCloseNavbar}>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</button>
	);
};

// Navbar List Component
const NavbarList = () => {
	return (
		<ul className="navbar-list">
			<li className="navbar-item">
				<NavLink exact to="/" className="navbar-link">
					Home
				</NavLink>
			</li>
			<li className="navbar-item">
				<NavLink to="/services" className="navbar-link">
					Services
				</NavLink>
			</li>
			<li className="navbar-item">
				<NavLink to="/portfolio" className="navbar-link">
					Portfolio
				</NavLink>
			</li>
			<li className="navbar-item">
				<NavLink to="/team" className="navbar-link">
					Team
				</NavLink>
			</li>
			<li className="navbar-item">
				<NavLink to="/contact" className="navbar-link">
					Contact
				</NavLink>
			</li>

			<NavbarBtn />
		</ul>
	);
};

// Navbar Btn Component
const NavbarBtn = () => {
	return (
		<li className="navbar-item navbar-btn">
			<NavLink to="/quote" className="navbar-link">
				<i className="navbar-btn-icon fas fa-arrow-right"></i>
				<span className="navbar-btn-text">Get Quote</span>
			</NavLink>
		</li>
	);
};

export default Navbar;
