import { NavLink } from "react-router-dom";

// Import Custome Hooks
import useAxios from "./../../../CustomeHooks/useAxios/useAxios";

// Main Navbar List Sass File
import "./List.scss";

// Navbar List Component
const NavbarList = ({ setNavbarOpen }) => {
	// Fetch data
	const {
		data: { links = [], button = {} },
	} = useAxios("./Apis/navbar.json", []);

	const listItems = links.map((link) => {
		return (
			<li key={link.id} className="navbar-item">
				<NavLink
					exact
					to={link.link}
					className="navbar-link"
					onClick={() => setNavbarOpen(false)}
				>
					{link.text}
				</NavLink>
			</li>
		);
	});

	return (
		<ul className="navbar-list">
			{listItems}
			<NavbarBtn button={button} />
		</ul>
	);
};

// Navbar Btn Component
const NavbarBtn = ({ button: { icon, text } }) => {
	return (
		<li className="navbar-item navbar-btn">
			<NavLink to="/quote" className="navbar-link">
				<span className="navbar-btn-text">{text}</span>
			</NavLink>
		</li>
	);
};

export default NavbarList;
