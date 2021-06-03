// import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Custome Hooks
import { DarkThemeProvider } from "./CustomeHooks/useDarkTheme/useDarkTheme";

// Import Components
import Navbar from "./Components/Navbar/Index";
import Index from "./Components/Index/Index";
import Services from "./Components/Services/Index";
import Portfolio from "./Components/Portfolio/Index";
import Team from "./Components/Team/Index";
import Contact from "./Components/Contact/Index";
import Buttons from "./Components/Buttons/Index";
import NotFound from "./Components/NotFound/Index";

// Import App Main Sass File
import "./App.scss";

function App() {
	return (
		<DarkThemeProvider>
			<Router>
				<Navbar />
				<Buttons />

				<Switch>
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={Index} />
					<Route
						path={`${process.env.PUBLIC_URL}/services`}
						component={Services}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/portfolio`}
						component={Portfolio}
					/>
					<Route path={`${process.env.PUBLIC_URL}/team`} component={Team} />
					<Route
						path={`${process.env.PUBLIC_URL}/contact`}
						component={Contact}
					/>
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		</DarkThemeProvider>
	);
}

export default App;
