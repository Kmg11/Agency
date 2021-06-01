/*
	This Custome Hook Useing For Prevent React Router To Reload The Same Component When User Is Already In The Page
*/

import { useLocation } from "react-router-dom";

// Send Path To Custome Hook When The Link Is Static
const usePreventRouterLinks = (path) => {
	// This Variable Use For Links With Single Status Like Services & Portfolio
	const isPathMatched = useLocation().pathname === path;

	// This Variable Use For Handle Current Location
	const location = useLocation().pathname;

	// Send Link To The Function When The Link Is Dynamic Like Navbar
	const preventRouterLinks = (e, link) => {
		if (location === link || isPathMatched) {
			e.preventDefault();
		}
	};

	// Send preventRouterLinks & isPathMatched
	return { preventRouterLinks, isPathMatched };
};

export default usePreventRouterLinks;
