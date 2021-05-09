// Main Scroll To Top Button Sass File
import { useEffect, useState } from "react";
import "./ScrollToTop.scss";

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
		<butto aria-label="Scroll To Top"n
			className={`scroll-to-top ${showButton ? "show" : ""}`}
			onClick={scrollToTop}
		>
			<i className="icon fas fa-angle-up"></i>
		</butto>
	);
};

export default ScrollToTop;
