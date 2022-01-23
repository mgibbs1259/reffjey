import React from "react";
import MainPrimary from "../MainPrimary";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import "./SignUp.css";

export default function SignUp() {
	return (
		<>
			<MainPrimary
				title="Sign Up for Email Updates"
				src="/images/untitled.jpg"
				className="main-primary-background-image"
			/>
			<Subscribe />
			<Footer />
		</>
	);
}
