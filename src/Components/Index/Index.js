import './Index.scss';

import Navbar from './../Navbar/Index';
import Header from './../Header/Index';
import Services from './../Services/Index';
import About from './../About/Index';
import Portfolio from './../Portfolio/Index';
import Team from './../Team/Index';
import Newsletter from './../Newsletter/Index';
import Contact from './../Contact/Index';
import Footer from './../Footer/Index';

const Index = (props) => {
	return (
		<div>
			<Navbar />
			<Header />
			<Services />
			<About />
			<Portfolio />
			<Team />
			<Newsletter />
			<Contact />
			<Footer />
		</div>
	)
}

export default Index;