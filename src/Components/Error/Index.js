// Main Error Sass FIle
import "./Index.scss";

const Error = (props) => {
	return (
		<div className="error-message">
			<p>{props.message}</p>
			<p>{props.name} Not Loaded</p>
			<p>Please Refresh The Page</p>
		</div>
	);
};

export default Error;
