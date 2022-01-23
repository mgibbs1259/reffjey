import React from "react";
import MainContainer from "../MainContainer";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import "./SignUp.css";

export default function SignUp() {
	return (
		<>
			<MainContainer
				title="Sign Up for Email Updates"
				src="/images/untitled.jpg"
				className="main-primary-background-image"
			/>
			<Subscribe />
			<Footer />
		</>
	);
}
