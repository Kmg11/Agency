import React from "react";
import { Link } from "react-router-dom";

// Import Main Not Found Sass File
import "./Index.scss";

function NotFound() {
	return (
		<div className="not-found">
			<h2>404</h2>
			<p>Sorry We Can't Find This Page</p>
			<Link to={`${process.env.PUBLIC_URL}/`}>Back To Home Page</Link>
		</div>
	);
}

export default NotFound;
