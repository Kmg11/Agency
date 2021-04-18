import "./Index.scss";
import HeaderImage from "./../../Images/Header/header-Illustration.png";

const Header = (props) => {
	return (
		<header className="main-header">
			<div className="container">
				<div className="header-inner">
					<section className="header-desc">
						<h1 className="header-title">
							Let’s <span>Build</span> Great Experiences Together
						</h1>
						<p className="header-paragraph">
							Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch
							Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.
							Zwölf Boxkämpfer jagen Viktor quer über
						</p>
						<button className="header-btn">Explore</button>
					</section>

					<section className="header-image">
						<img
							src={HeaderImage}
							alt="header-Illustration"
							draggable="false"
						/>
					</section>
				</div>
			</div>
		</header>
	);
};

export default Header;
