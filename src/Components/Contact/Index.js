// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";

// Import Components
import ContactForm from "./Form/Form";
import ContactDetails from "./Details/Details";
import ContactHeader from "./Header/Header";
import Loading from "./../Loading/Index";
import Error from "./../Error/Index";

// Main Contact Sass File
import "./Index.scss";

// Main Contact Component
const Contact = () => {
	// Fetch data
	const {
		data: { header = {}, content = [] },
		success,
		isPending,
		error,
	} = useAxios("./Apis/contact.json", []);

	return (
		<section className="contact">
			{isPending && <Loading />}

			{success && (
				<div className="container">
					<div className="contact-inner">
						<section className="contact-info">
							<ContactHeader header={header} />
							<ContactDetails content={content} />
						</section>
						<ContactForm />
					</div>
				</div>
			)}

			{error && <Error message={error.message} name="Contact" />}
		</section>
	);
};

export default Contact;
