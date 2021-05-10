// Main Navbar Responsive Button Sass File
import "./Button.scss";

// Navbar Responsiv Btn Component
const NavbarResponsiveBtn = ({ openCloseNavbar }) => {
	return (
		<button
			className="navbar-responsive-btn"
			onClick={openCloseNavbar}
			aria-label="Menu"
		>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</button>
	);
};

export default NavbarResponsiveBtn;
