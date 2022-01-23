import React from "react";
import MainPrimary from "../MainPrimary";
import Footer from "../Footer";

export default function Merch() {
	return (
		<>
			<MainPrimary
				title="No Merch At This Time"
				src="/images/100x.jpg"
				className="main-primary-background-image"
			/>
			<Footer />
		</>
	);
}
