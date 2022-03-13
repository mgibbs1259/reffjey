import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function encode(data) {
	return Object.keys(data)
		.map(
			(key) =>
				encodeURIComponent(key) +
				"=" +
				encodeURIComponent(data[key])
		)
		.join("&");
}

export default function Footer() {
	const [state, setState] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...state }),
		})
			.then(() => alert("Thanks for Subscribing!"))
			.catch((error) => alert(error));
	};

	const handleChange = (e) =>
		setState({ ...state, [e.target.name]: e.target.value });

	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					sign up for email updates
				</p>
				<div className="input-areas">
					<form
						name="contact"
						method="POST"
						data-netlify="true"
						action={useLocation().pathname}
						onSubmit={handleSubmit}
					>
						<input
							type="hidden"
							name="form-name"
							value="contact"
							onChange={handleChange}
						/>
						<p>
							<label>
								<input
									type="email"
									name="email"
									placeholder="email address"
									className="footer-input"
									onChange={handleChange}
								/>
							</label>
							<Button buttonStyle="btn--outline">
								subscribe
							</Button>
						</p>
					</form>
				</div>
			</section>
			<section className="content">
				<div className="social-media-wrap">
					<div className="social-icons">
						<a
							href="https://www.instagram.com/reffjey"
							className="social-icon-link instagram"
						>
							<i className="fab fa-instagram fa-2x" />
						</a>
						<a
							href="https://twitter.com/reffjey"
							className="social-icon-link twitter"
						>
							<i className="fab fa-twitter fa-2x" />
						</a>
						<a
							href="https://www.youtube.com/channel/UCZ-oMH9SdzlQeChmNSzeyUw"
							className="social-icon-link youtube"
						>
							<i className="fab fa-youtube fa-2x" />
						</a>
						<a
							href="https://music.apple.com/us/artist/reffjey/1525737519"
							className="social-icon-link sound-cloud"
						>
							<i className="fab fa-apple fa-2x" />
						</a>
						<a
							href="https://soundcloud.com/reffjey"
							className="social-icon-link apple-music"
						>
							<i className="fab fa-soundcloud fa-2x" />
						</a>
						<a
							href="https://open.spotify.com/artist/1amTGexKswbu26LrYlfoGj?si=Nj0K7F_VQ9WKcLvNXsANkA"
							className="social-icon-link spotify"
						>
							<i className="fab fa-spotify fa-2x" />
						</a>
					</div>
				</div>
			</section>
			<section className="content">
				<div className="copyright-wrap">
					<div className="website-rights">
						REFFJEY © {new Date().getFullYear()}
					</div>
				</div>
				<div className="privacy-policy-wrap">
					<a
						href="https://rawcdn.githack.com/mgibbs1259/reffjey/1e3a09ebaff788040175e5fae710cd5b0f8c4499/public/privacy-policy.html"
						className="website-rights"
					>
						Privacy Policy
					</a>
				</div>
			</section>
		</div>
	);
}
