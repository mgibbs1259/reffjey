import React from "react";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import "../MainContainer.css";

export default function SignUp() {
	return (
		<>
			<div className="main-primary-section-container">
				<h1
					style={{
						color: "white",
						paddingTop: "10vh",
						fontSize: "80px",
					}}
				>
					reffjey
				</h1>
				<h1
					style={{
						color: "white",
						paddingTop: "85px",
						fontSize: "60px",
					}}
				>
					sign up for email updates
				</h1>
				<Subscribe />
				<img
					className="main-primary-background-image"
					src="/images/untitled.jpg"
					alt=""
				/>
			</div>
			<Footer />
		</>
	);
}
