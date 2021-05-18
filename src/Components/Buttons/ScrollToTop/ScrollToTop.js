import { useEffect, useState } from "react";

// Import Custome Hooks
import useThrottle from "./../../../CustomeHooks/useThrottle/useThrottle";

// Main Scroll To Top Button Sass File
import "./ScrollToTop.scss";

const ScrollToTop = () => {
	const { throttle } = useThrottle();

	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		// Show Button When Scroll
		window.addEventListener("scroll", function eventFn() {
			if (window.pageYOffset > 700 && !showButton) {
				setShowButton(true);
				window.removeEventListener("scroll", eventFn);
			} else if (window.pageYOffset < 700 && showButton) {
				setShowButton(false);
				window.removeEventListener("scroll", eventFn);
			}
		});
	}, [showButton]);

	// Scroll To Top Function
	const scrollToTop = throttle(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, 1000);

	return (
		<button
			className={`scroll-to-top ${showButton ? "show" : ""}`}
			aria-label="Scroll To Top Button"
			onClick={scrollToTop}
		>
			<i className="icon fas fa-angle-up"></i>
		</button>
	);
};

export default ScrollToTop;
