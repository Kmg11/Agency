// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";

// Import Components
import ServicesContainer from "./Body/Body";
import ServicesHeader from "./Header/Header";

// Main Services Sass File
import "./Index.scss";

// Services Background
const servicesBg = {
	backgroundImage: "url(./../../Images/Services/background.svg)",
};

// Main Services Component
const Services = ({ services }) => {
	// Fetch data
	const {
		data: { header = {}, content = [] },
	} = useAxios("./Apis/services.json", []);

	return (
		<section className="services" style={servicesBg} ref={services}>
			<div className="container">
				<ServicesHeader header={header} />
				<ServicesContainer content={content} />
			</div>
		</section>
	);
};

export default Services;
