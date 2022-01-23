import React from "react";
import MainPrimary from "../MainPrimary";
import CurrentMusic from "../CurrentMusic";
import Footer from "../Footer";

export default function Home() {
	return (
		<>
			<MainPrimary
				src="/images/the-beautiful-sound-of-anything-large.jpg"
				className="main-primary-background-image-animated"
			/>
			<CurrentMusic />
			<Footer />
		</>
	);
}
