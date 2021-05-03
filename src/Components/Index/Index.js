import { Fragment } from 'react'

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
		<Fragment>
			<Header />
			<Services />
			<About />
			<Portfolio />
			<Team />
			<Newsletter />
			<Contact />
			<Footer />
		</Fragment>
	)
}

export default Index;