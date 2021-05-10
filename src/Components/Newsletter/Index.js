import "./Index.scss";

const Newsletter = () => {
	return (
		<section className="newsletter">
			<div className="container">
				<header className="newsletter-header">
					<h2 className="newsletter-title">Subscribe To Our Newsletter</h2>
					<p className="newsletter-paragraph">
						Sign up for our newsletter to keep updated with the latest design
						and development trends. We promise we don’t spam.{" "}
					</p>
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
