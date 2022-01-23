import React from "react";
import MainContainer from "../MainContainer";
import Footer from "../Footer";

export default function Tour() {
	return (
		<>
			<MainContainer
				title="No Tour Dates At This Time"
				src="/images/100x.jpg"
				className="main-primary-background-image"
			/>
			<Footer />
		</>
	);
}
