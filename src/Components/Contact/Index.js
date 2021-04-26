import "./Index.scss";

const Contact = (props) => {
	return (
		<section className="contact">
			<div className="container">
				<div className="contact-inner">
					<ContactInfo />
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

const ContactInfo = () => {
	return (
		<section className="contact-info">
			<ContactHeader />
			<ContactDetails />
		</section>
	);
};

const ContactHeader = () => {
	return (
		<header className="contact-header">
			<h2 className="contact-title">Contact Us</h2>
			<p className="contact-paragraph">
				Have a project we can help with? Give us a call or reach out to us on
				social media
			</p>

			<div className="social-links">
				<a
					href="https://www.facebook.com/KirolosMahfouz/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon fab fa-instagram"></i>
				</a>
				<a
					href="https://www.instagram.com/kirolosmahfouz/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon fab fa-facebook-square"></i>
				</a>
				<a
					href="https://twitter.com/KirolosMahfouz1"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon fab fa-twitter"></i>
				</a>
			</div>
		</header>
	);
};

const ContactDetails = (props) => {
	return (
		<address className="contact-details">
			<div>
				<div className="left">
					<i className="icon fas fa-map-marker-alt fa-fw"></i>
				</div>
				<div className="right">
					<h3 className="address-title">Address</h3>
					<div className="address-details">
						<p>3556 Hartford Way Vlg, Mount</p>
						<p>Pleasant, SC,</p>
						<p>29466, Australia.</p>
					</div>
				</div>
			</div>

			<div>
				<div className="left">
					<i className="icon fas fa-mobile-alt fa-fw"></i>
				</div>
				<div className="right">
					<h3 className="address-title">Call for queries</h3>
					<div className="address-details">
						<p>
							<a href="tel:734-697-2907">734-697-2907</a>
						</p>
						<p>
							<a href="tel:843-971-1906">843-971-1906</a>
						</p>
					</div>
				</div>
			</div>

			<div>
				<div className="left">
					<i className="icon fas fa-envelope fa-fw"></i>
				</div>
				<div className="right">
					<h3 className="address-title">Email Us</h3>
					<div className="address-details">
						<p>
							<a href="mailto:hello@agency.com">hello@agency.com</a>
						</p>
					</div>
				</div>
			</div>
		</address>
	);
};

const ContactForm = () => {
	return (
		<div className="send-message">
			<img
				className="background-image"
				src=".//Images/Contact/background.svg"
				alt="Background 2"
				draggable="false"
			/>

			<form className="contact-form">
				<label>Say Hi</label>
				<input type="text" placeholder="Full Name" />
				<input type="email" placeholder="Email Address" />
				<textarea placeholder="Message" />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default Contact;
