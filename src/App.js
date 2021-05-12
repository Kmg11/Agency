import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Custome Hooks
import useLocalStorage from "./CustomeHooks/useLocalStorage/useLocalStorage";
import useDarkMode from "./CustomeHooks/useDarkMode//useDarkMode";

// Import Components
import Navbar from "./Components/Navbar/Index";
import Index from "./Components/Index/Index";
import Services from "./Components/Services/Index";
import Portfolio from "./Components/Portfolio/Index";
import Team from "./Components/Team/Index";
import Contact from "./Components/Contact/Index";
import Buttons from "./Components/Buttons/Index";

function App() {
	const [localStorage] = useLocalStorage("dark-mode", false);
	const { enableDarkMode, disableDarkMode } = useDarkMode();

	// Enable Or Disable Dark Mode Depend On Local Storage
	useEffect(() => {
		if (localStorage) {
			enableDarkMode();
		} else {
			disableDarkMode();
		}
	}, [localStorage, enableDarkMode, disableDarkMode]);

	return (
		<Router>
			<Navbar />
			<Buttons />
			<Route exact path="/" component={Index} />
			<Route path="/services" component={Services} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/team" component={Team} />
			<Route path="/contact" component={Contact} />
		</Router>
	);
}

export default App;
