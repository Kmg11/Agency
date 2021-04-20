import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Index";
import Index from "./Components/Index/Index";
import Services from "./Components/Services/Index";
import Portfolio from "./Components/Portfolio/Index";
import Team from "./Components/Team/Index";
import Contact from "./Components/Contact/Index";

function App() {
	return (
		<Router>
			<Navbar />
			<Route exact path="/" component={Index} />
			<Route path="/services" component={Services} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/team" component={Team} />
			<Route path="/contact" component={Contact} />
		</Router>
	);
}

export default App;
