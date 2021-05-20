import { Link } from "react-router-dom";

// Import Custome Hooks
import useAxios from "./../../../CustomeHooks/useAxios/useAxios";
import usePreventRouterLinks from "./../../../CustomeHooks/usePreventRouterLinks/usePreventRouterLinks";

// Main Navbar Logo Sass File
import "./Logo.scss";

// Navbar Logo Component
const NavbarLogo = () => {
	// Custome Hooks
	const { preventRouterLinks } = usePreventRouterLinks("/");

	// Fetch data
	const {
		data: { image = "", text = "" },
	} = useAxios("./Apis/logo.json", []);

	return (
		<Link to="/" onClick={preventRouterLinks} className="logo">
			{image && (
				<img src={image} alt="Logo" draggable="false" className="logo-image" />
			)}

			{text && <span className="logo-text">{text}</span>}
		</Link>
	);
};

export default NavbarLogo;
