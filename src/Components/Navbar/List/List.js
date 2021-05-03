import { NavLink } from "react-router-dom";

// Main Navbar List Sass File
import "./List.scss";

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

export default NavbarList;
