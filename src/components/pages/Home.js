import React from "react";
import MainPrimary from "../MainPrimary";
import MainSecondary from "../MainSecondary";
import Footer from "../Footer";

export default function Home() {
	return (
		<>
			<MainPrimary
				src="/images/the-beautiful-sound-of-anything.jpg"
				className="main-primary-background-image-animated"
			/>
			<MainSecondary />
			<Footer />
		</>
	);
}
