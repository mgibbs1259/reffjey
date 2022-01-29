import React from "react";
import "./Button.css";
import "./Subscribe.css";

export default function Subscribe() {
	return (
		<>
			<div className="subscribe-container">
				<form
					name="contact"
					method="POST"
					data-netlify="true"
					netlify-honeypot="bot-field"
				>
					<p class="hidden">
						<label>
							Don’t fill this out if you’re human:{" "}
							<input name="bot-field" />
						</label>
					</p>
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
