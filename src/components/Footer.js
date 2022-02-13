import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

export default function Footer() {
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
						action="/"
					>
						<input
							type="hidden"
							name="form-name"
							value="contact"
						/>
						<p>
							<label>
								<input
									type="email"
									name="email"
									placeholder="email address"
									className="footer-input"
								/>
							</label>
							<Button buttonStyle="btn--outline">
								subscribe
							</Button>
						</p>
					</form>
				</div>
			</section>
			<section className="social-media">
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
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to="/" className="social-logo">
							reffjey
						</Link>
					</div>
					<div className="website-rights">
						REFFJEY © {new Date().getFullYear()}
					</div>
				</div>
			</section>
		</div>
	);
}
