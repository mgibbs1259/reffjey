import React from "react";
import Subscribe from "../Subscribe";
import SecondaryFooter from "../SecondaryFooter";
import "./SignUp.css";

export default function SignUp() {
	return (
		<>
			<div className="sign-up-container">
				<h1>Sign Up for Email Updates</h1>
				<Subscribe />
			</div>
			<SecondaryFooter />
		</>
	);
}
