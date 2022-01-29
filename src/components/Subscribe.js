import React from "react";
import "./Button.css";
import "./Subscribe.css";

export default function Subscribe(props) {
	return (
		<>
			<div className="subscribe-container">
				<form data-netlify="true" netlify-honeypot="bot-field">
					<input
						className="subscribe-input"
						placeholder="email address"
						name="email"
						type="email"
						required
					/>
					<div className="subscribe-button-container">
						<button className="btn btn--outline subscribe-button">
							submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
