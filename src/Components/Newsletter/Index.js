import { useState } from "react";

// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";

// Import Component
import Loading from "./../Loading/Index";
import Error from "./../Error/Index";

// Main Newsletter Sass File
import "./Index.scss";

const Newsletter = () => {
	const [email, setEmail] = useState("");

	// Fetch data
	const {
		data: { title = "", body = "" },
		success,
		isPending,
		error,
	} = useAxios("./Apis/newsletter.json", []);

	return (
		<section className="newsletter">
			{isPending && <Loading />}

			{success && (
				<div className="container">
					<header className="newsletter-header">
						<h2 className="newsletter-title">{title}</h2>
						<p className="newsletter-paragraph">{body}</p>
					</header>
					<form className="newsletter-form">
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<input type="submit" value="JOIN" />
					</form>
				</div>
			)}

			{error && <Error message={error.message} name="Newsletter" />}
		</section>
	);
};

export default Newsletter;
