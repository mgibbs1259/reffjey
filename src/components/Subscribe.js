import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Button.css";
import "./Subscribe.css";

function encode(data) {
	return Object.keys(data)
	  .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
	  .join("&")
  }

export default function Subscribe() {
	const [state, setState] = useState({})

	const handleSubmit = e => {
		fetch("/", {
		  method: "POST",
		  headers: { "Content-Type": "application/x-www-form-urlencoded" },
		  body: encode({ "form-name": "contact", ...state })
		})
		  .then(() => alert("Thanks for Subscribing!"))
		  .catch(error => alert(error));
  
		e.preventDefault();
	  };

	const handleChange = e => setState({  ...state, [e.target.name]: e.target.value });

	return (
		<>
			<div className="subscribe-container">
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
								className="subscribe-input"
								onChange={handleChange}
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
