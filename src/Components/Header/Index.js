import { useRef } from "react";

// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";
import { useDarkTheme } from "./../../CustomeHooks/useDarkTheme/useDarkTheme";
import useThrottle from "./../../CustomeHooks/useThrottle/useThrottle";

// Main Header Sass File
import "./Index.scss";

const Header = () => {
	const darkTheme = useDarkTheme();
	const { throttle } = useThrottle();

	// Fetch data
	const {
		data: {
			title = { before: "", word: "", after: "" },
			body = "",
			button = "",
			image = "",
			image_dark = "",
		},
	} = useAxios("./Apis/header.json", []);

	// Scroll To Services Section Ref
	const header = useRef();

	// Scroll To Services Section Function
	const exploreFn = throttle(() => {
		window.scrollTo({
			top: header.current.offsetHeight,
			behavior: "smooth",
		});
	}, 1000);

	return (
		<header className="main-header" ref={header}>
			<div className="container">
				<div className="header-inner">
					<section className="header-desc">
						<h1 className="header-title">
							{title.before} <span>{title.word}</span> {title.after}
						</h1>
						<p className="header-paragraph">{body}</p>
						<button className="header-btn" onClick={exploreFn}>
							{button}
						</button>
					</section>

					<section className="header-image">
						<img
							src={darkTheme ? image_dark : image}
							alt="header-Illustration"
							draggable="false"
						/>
					</section>
				</div>
			</div>
		</header>
	);
};

export default Header;
