import React from "react";
import "./Button.css";
import "./Subscribe.css";

export default function Subscribe() {
	return (
		<>
			<div className="subscribe-container">
				<form name="contact" method="post" action="/sign-up/">
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
								className="subscribe-input"
							/>
						</label>
					</p>
					<p className="subscribe-button-container">
						<button
							type="submit"
							className="btn btn--outline subscribe-button"
						>
							submit
						</button>
					</p>
				</form>
			</div>
		</>
	);
}
