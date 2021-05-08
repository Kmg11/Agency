import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Main Navbar List Sass File
import "./List.scss";

// Navbar List Component
const NavbarList = (props) => {
	const { closeNavbar } = props;

	const [links, setLinks] = useState([]);
	const [button, setButton] = useState({});

	useEffect(() => {
		// Fetch Data
		axios.get("./Apis/navbar.json").then(({ data }) => {
			const { links, button } = data;
			setLinks(links);
			setButton(button);
		});
	}, []);

	const linksList = links.map((link) => {
		return (
			<li key={link.id} className="navbar-item">
				<NavLink exact to={link.link} className="navbar-link" onClick={closeNavbar}>
					{link.text}
				</NavLink>
			</li>
		);
	});

	return (
		<ul className="navbar-list">
			{linksList}
			<NavbarBtn button={button} />
		</ul>
	);
};

// Navbar Btn Component
const NavbarBtn = (props) => {
	const {
		button: { icon, text },
	} = props;

	return (
		<li className="navbar-item navbar-btn">
			<NavLink to="/quote" className="navbar-link">
				<i className={`navbar-btn-icon ${icon}`}></i>
				<span className="navbar-btn-text">{text}</span>
			</NavLink>
		</li>
	);
};

export default NavbarList;
