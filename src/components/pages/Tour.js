import React from "react";
import SecondaryFooter from "../SecondaryFooter";
import "./Tour.css";

export default function Tour() {
	return (
		<>
			<div className="tour-container">
				<video src="/videos/tour.mp4" autoPlay loop muted />
				<h1>Tour Dates Coming Soon</h1>
			</div>
			<SecondaryFooter />
		</>
	);
}
