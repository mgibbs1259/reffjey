import React from "react";
import MainContainer from "../MainContainer";
import CurrentMusic from "../CurrentMusic";
import Footer from "../Footer";

export default function Home() {
	return (
		<>
			<MainContainer
				src="/images/the-beautiful-sound-of-anything-large.jpg"
				className="main-primary-background-image-animated"
			/>
			<CurrentMusic />
			<Footer />
		</>
	);
}
