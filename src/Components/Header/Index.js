// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";
import { useDarkTheme } from "./../../CustomeHooks/useDarkTheme/useDarkTheme";

// Main Header Sass File
import "./Index.scss";

const Header = ({ exploreFn }) => {
	const darkTheme = useDarkTheme();

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

	const { before, word, after } = title;

	return (
		<header className="main-header">
			<div className="container">
				<div className="header-inner">
					<section className="header-desc">
						<h1 className="header-title">
							{before} <span>{word}</span> {after}
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
