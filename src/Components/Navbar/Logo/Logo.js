import { NavLink } from "react-router-dom";

// Main Navbar Logo Sass File
import "./Logo.scss";

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

export default NavbarLogo;
