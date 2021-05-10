import { Fragment, useRef } from "react";

import Header from "./../Header/Index";
import Services from "./../Services/Index";
import About from "./../About/Index";
import Portfolio from "./../Portfolio/Index";
import Team from "./../Team/Index";
import Newsletter from "./../Newsletter/Index";
import Contact from "./../Contact/Index";
import Footer from "./../Footer/Index";
import ScrollToTop from "../ScrollToTop/Index";

const Index = () => {
	const services = useRef();

	const exploreFn = () => {
		window.scrollTo({
			top: services.current.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		<Fragment>
			<Header exploreFn={exploreFn} />
			<Services services={services} />
			<About />
			<Portfolio />
			<Team />
			<Newsletter />
			<Contact />
			<Footer />
			<ScrollToTop />
		</Fragment>
	);
};

export default Index;
