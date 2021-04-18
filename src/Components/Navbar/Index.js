import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Index.scss";
import Logo from "./../../Images/Main/logo.png";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { navbarOpen: false };

		// Refs
		this.navbar = React.createRef();

		// Binding Functions
		this.openCloseNavbar = this.openCloseNavbar.bind(this);
		this.handleResize = this.handleResize.bind(this);
		this.closeNavbar = this.closeNavbar.bind(this);
	}

	// Handle [Open & Close] Navbar
	openCloseNavbar() {
		this.setState((state) => ({ navbarOpen: !this.state.navbarOpen }));
	}

	// Handle Resize Window
	handleResize() {
		window.addEventListener("resize", () => {
			if (this.state.navbarOpen) {
				this.setState((state) => ({ navbarOpen: false }));
			}
		});
	}

	// Handle Closing Navbar When Click Anywhere
	closeNavbar() {
		document.addEventListener("click", (e) => {
			if (this.state.navbarOpen) {
				if (e.target !== this.navbar.current) {
					this.setState((state) => ({ navbarOpen: false }));
				}
			}
		});
	}

	// Stop Propagation For Navbar To Handle closeNavbar Function
	handleNavbarClicking(e) {
		e.stopPropagation();
	}

	// Trigger Functions
	componentDidMount() {
		this.handleResize();
		this.closeNavbar();
	}

	render() {
		return (
			<nav
				className={this.state.navbarOpen ? "navbar open" : "navbar"}
				ref={this.navbar}
				onClick={this.handleNavbarClicking}
			>
				<div className="container">
					<div className="navbar-inner">
						<NavbarLogo />
						<NavbarResponsiveBtn openCloseNavbar={this.openCloseNavbar} />
						<NavbarList />
					</div>
				</div>
			</nav>
		);
	}
}

// Navbar Logo Component
const NavbarLogo = () => {
	return (
		<NavLink exact to="/" className="logo">
			<img src={Logo} alt="Logo" draggable="false" className="logo-image" />
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
