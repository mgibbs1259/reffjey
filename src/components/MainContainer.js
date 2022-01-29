import React from "react";
import "./MainContainer.css";

export default function MainContainer(props) {
	return (
		<div className="main-primary-section-container">
			<h1 style={{ color: "white" }}>{props.title}</h1>
			<img className={props.className} src={props.src} alt="" />
		</div>
	);
}
