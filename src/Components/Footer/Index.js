import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Index.scss";

const Footer = (props) => {
	const [header, setHeader] = useState([]);
	const [about, setAbout] = useState([]);
	const [contact, setContact] = useState([]);
	const [videos, setVideos] = useState([]);
	const [social, setSocial] = useState([]);
	const [copyRight, setCopyRight] = useState("");

	useEffect(() => {
		axios.get("/Js/data.json").then(({ data }) => {
			const {
				header,
				about_us_links,
				contact_us_links,
				videos_links,
				social_media_links,
				copy_right
			} = data.footer;

			setHeader(header);
			setAbout(about_us_links);
			setContact(contact_us_links);
			setVideos(videos_links);
			setSocial(social_media_links);
			setCopyRight(copy_right);
		});
	}, []);

	return (
		<footer className="main-footer">
			<div className="container">
				<FooterHeader header={header} />
				<FooterLinks
					about={about}
					contact={contact}
					videos={videos}
					social={social}
				/>
				<FooterFooter social={social} copyRight={copyRight} />
			</div>
		</footer>
	);
};

const FooterHeader = (props) => {
	const {
		header: { title },
	} = props;

	return (
		<header className="footer-header">
			<h2 className="footer-title">{title}</h2>

			<form className="newsletter-form">
				<input type="text" placeholder="Email" />
				<input type="submit" value="JOIN" />
			</form>
		</header>
	);
};

const FooterLinks = (props) => {
	const { about, contact, videos, social } = props;

	const links = [
		{ id: 1, title: "About Us", links: about },
		{ id: 2, title: "Contact Us", links: contact },
		{ id: 3, title: "Videos", links: videos },
		{ id: 4, title: "Social Media", links: social },
	];

	const getItems = (index) => {
		const linksItems = links[index].links.map((item) => {
			return (
				<li key={item.id} className="links-item">
					<a
						href={item.link}
						target="_blank"
						rel="noreferrer"
						className="links-link"
					>
						{item.name}
					</a>
				</li>
			);
		});

		return linksItems;
	};

	const linksList = links.map((link, index) => {
		return (
			<div key={link.id} className="links">
				<h3 className="links-title">{link.title}</h3>
				<ul className="links-list">{getItems(index)}</ul>
			</div>
		);
	});

	return <div className="footer-links">{linksList}</div>;
};

const FooterFooter = (props) => {
	const { social, copyRight } = props;

	const socialList = social.map((item) => {
		return (
			<a key={item.id} href={item.link} target="_blank" rel="noreferrer">
				<i className={`icon ${item.icon}`}></i>
			</a>
		);
	});

	return (
		<footer className="footer-footer">
			<Link to="/" className="logo">
				<img
					src="./Images/Main/logo.svg"
					alt="Logo"
					draggable="false"
					className="logo-image"
				/>
				<span className="logo-text">Agency</span>
			</Link>

			<p className="copy-right">{copyRight}</p>

			<div className="social-links">{socialList}</div>
		</footer>
	);
};

export default Footer;
