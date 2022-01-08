import React from "react";
import "./Button.css";
import "./Subscribe.css";

export default function Subscribe(props) {
	return (
		<>
			<div className="subscribe-container">
				<form>
					<input
						className="subscribe-input"
						name="email"
						type="email"
						placeholder="Email Address"
					/>
				</form>
				<div className="subscribe-button-container">
					<button className="btn btn--outline subscribe-button">
						Subscribe
					</button>
				</div>
			</div>
		</>
	);
}
