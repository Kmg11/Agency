// Main Navbar Responsive Button Sass File
import "./Button.scss";

// Navbar Responsiv Btn Component
const NavbarResponsiveBtn = ({ setNavbarOpen }) => {
	return (
		<button
			className="navbar-responsive-btn"
			onClick={() => setNavbarOpen((prevState) => !prevState)}
			aria-label="Menu"
		>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</button>
	);
};

export default NavbarResponsiveBtn;
