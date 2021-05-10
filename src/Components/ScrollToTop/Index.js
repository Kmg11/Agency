// Main Scroll To Top Button Sass File
import { useEffect, useState } from "react";
import "./Index.scss";

const ScrollToTop = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		// Show Button When Scroll
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 700) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	// Scroll To Top Function
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button aria-label="Scroll To Top"
			className={`scroll-to-top ${showButton ? "show" : ""}`}
			onClick={scrollToTop}
		>
			<i className="icon fas fa-angle-up"></i>
		</button>
	);
};

export default ScrollToTop;
