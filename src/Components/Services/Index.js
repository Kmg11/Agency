// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";
import { useDarkTheme } from "./../../CustomeHooks/useDarkTheme/useDarkTheme";

// Import Components
import ServicesBody from "./Body/Body";
import ServicesHeader from "./Header/Header";

// Main Services Sass File
import "./Index.scss";

// Services Background
const servicesBg = {
	backgroundImage: "url(./../../Images/Services/background.svg)",
};

const servicesBgDark = {
	backgroundImage: "url(./../../Images/Services/background-dark.svg)",
};

// Main Services Component
const Services = () => {
	const darkTheme = useDarkTheme();

	// Fetch data
	const {
		data: { header = {}, content = [] },
	} = useAxios("./Apis/services.json", []);

	return (
		<section
			className="services"
			style={darkTheme ? servicesBgDark : servicesBg}
		>
			<div className="container">
				<ServicesHeader header={header} />
				<ServicesBody content={content} />
			</div>
		</section>
	);
};

export default Services;
