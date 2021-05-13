import { Link } from "react-router-dom";

// Import Custome Hooks
import useAxios from "./../../../CustomeHooks/useAxios/useAxios";

// Main Navbar Logo Sass File
import "./Logo.scss";

// Navbar Logo Component
const NavbarLogo = () => {
	// Fetch data
	const {
		data: { image = "", text = "" },
	} = useAxios("./Apis/logo.json", []);

	return (
		<Link to="/" className="logo">
			{image && (
				<img src={image} alt="Logo" draggable="false" className="logo-image" />
			)}

			{text && <span className="logo-text">{text}</span>}
		</Link>
	);
};

export default NavbarLogo;
