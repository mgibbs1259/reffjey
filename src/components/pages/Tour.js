import React from "react";
import MainContainer from "../MainContainer";
import Footer from "../Footer";

export default function Tour() {
	return (
		<>
			<MainContainer
				title="no tour dates at this time"
				src="/images/100x.jpg"
				className="main-primary-background-image"
			/>
			<Footer />
		</>
	);
}
