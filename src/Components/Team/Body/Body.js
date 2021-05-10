import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// Main Team Body Sass File
import "./Body.scss";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const TeamBody = ({ content: members }) => {
	const membersList = members.map((member) => {
		return (
			<SwiperSlide key={member.id}>
				<div className="team-member">
					<Link to="/team" className="member-link"></Link>

					<div className="member-image">
						<img src={member.image} alt={member.name} draggable="false" />
					</div>
					<p className="member-name">{member.name}</p>
					<p className="member-role">{member.role}</p>

					<div className="member-social-media">
						{member.social.map((link) => {
							return (
								<a
									key={link.id}
									href={link.link}
									target="_blank"
									rel="noreferrer"
									className="social-link"
									aria-label={link.name}
								>
									<i className={`icon ${link.icon}`}></i>
								</a>
							);
						})}
					</div>
				</div>
			</SwiperSlide>
		);
	});

	return (
		<section className="team-body">
			<Swiper
				slidesPerGroup={1}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				navigation
				breakpoints={{
					0: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 90,
					},
					900: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					1200: {
						slidesPerView: 4,
						spaceBetween: 50,
					},
					1400: {
						slidesPerView: 6,
						spaceBetween: 30,
					},
				}}
			>
				{membersList}
			</Swiper>
		</section>
	);
};

export default TeamBody;
