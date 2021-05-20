import { useLocation } from "react-router-dom";

const usePreventRouterLinks = (path) => {
	const isPathMatched = useLocation().pathname === path;

	const preventRouterLinks = (e) => {
		if (isPathMatched) {
			e.preventDefault();
		}
	};

	return { preventRouterLinks, isPathMatched };
};

export default usePreventRouterLinks;
