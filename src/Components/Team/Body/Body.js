import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";

// Import Custome Hooks
import usePreventRouterLinks from "./../../../CustomeHooks/usePreventRouterLinks/usePreventRouterLinks";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// Main Team Body Sass File
import "./Body.scss";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const TeamBody = ({ content: members }) => {
	// Custome Hooks
	const { preventRouterLinks } = usePreventRouterLinks(
		`${process.env.PUBLIC_URL}/team`
	);

	const membersList = members.map((member) => {
		return (
			<SwiperSlide key={member.id}>
				<div className="team-member">
					<Link
						to={`${process.env.PUBLIC_URL}/team`}
						onClick={preventRouterLinks}
						className="member-link"
						aria-label="Team Member Link"
					></Link>

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
									aria-label="Social Media Link"
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
				slidesPerView={1}
				spaceBetween={10}
				slidesPerGroup={1}
				centeredSlides={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				navigation
				breakpoints={{
					0: {
						slidesPerView: 2,
						spaceBetween: 10,
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
						spaceBetween: 15,
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
