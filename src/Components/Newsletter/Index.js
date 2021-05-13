// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";

// Main Newsletter Sass File
import "./Index.scss";

const Newsletter = () => {
	// Fetch data
	const {
		data: { title = "", body = "" },
	} = useAxios("./Apis/newsletter.json", []);

	return (
		<section className="newsletter">
			<div className="container">
				<header className="newsletter-header">
					<h2 className="newsletter-title">{title}</h2>
					<p className="newsletter-paragraph">{body}</p>
				</header>
				<form className="newsletter-form">
					<input type="text" placeholder="Email" />
					<input type="submit" value="JOIN" />
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
