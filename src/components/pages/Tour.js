import React from "react";
import MainPrimary from "../MainPrimary";
import Footer from "../Footer";

export default function Tour() {
	return (
		<>
			<MainPrimary
				title="No Tour Dates At This Time"
				src="/images/100x.jpg"
				className="main-primary-background-image"
			/>
			<Footer />
		</>
	);
}
