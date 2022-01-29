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
						placeholder="email address"
					/>
				</form>
				<div className="subscribe-button-container">
					<button className="btn btn--outline subscribe-button">
						submit
					</button>
				</div>
			</div>
		</>
	);
}
