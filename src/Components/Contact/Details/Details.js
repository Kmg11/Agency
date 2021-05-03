// Main Contact Details Sass File
import "./Details.scss";

// Contact Details Component
const ContactDetails = (props) => {
	const { content: details } = props;

	// Get Details List
	const detailsList = details.map((item) => {
		return (
			<div key={item.id}>
				<div className="left">
					<i className={`icon ${item.icon} fa-fw`}></i>
				</div>
				<div className="right">
					<h3 className="address-title">{item.title}</h3>
					<div className="address-details">
						<p>{item.text_1}</p>
						{item.text_2 !== "" && <p>{item.text_2}</p>}
						{item.text_3 !== "" && <p>{item.text_3}</p>}
					</div>
				</div>
			</div>
		);
	});

	return <address className="contact-details">{detailsList}</address>;
};

export default ContactDetails;
