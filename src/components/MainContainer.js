import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./MainContainer.css";

export default function MainContainer(props) {
	return (
		<div className="main-primary-section-container">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 2 }}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
			>
				<h1 style={{ color: "white" }}>{props.title}</h1>
			</motion.div>
			<img className={props.className} src={props.src} alt="" />
		</div>
	);
}
