import React from "react";
import Footer from "../Footer";
import "./Merch.css";

export default function Merch() {
	return (
		<>
			<div className="merch-container">
				<video src="/videos/merch.mp4" autoPlay loop muted />
				<h1>Merch Coming Soon</h1>
			</div>
			<Footer />
		</>
	);
}
