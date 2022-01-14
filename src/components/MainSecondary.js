import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import "./Main.css";

function AnimateTrackTitle({ delay, value }) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ delay: delay, duration: 3 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
		>
			<h3>{value}</h3>
		</motion.div>
	);
}

export default function MainSecondary() {
	return (
		<div className="main-secondary-section-container">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 4 }}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
			>
				<h1>the beautiful sound of anything</h1>
			</motion.div>
			<AnimateTrackTitle
				delay={2}
				value={"can't let go anymore"}
			></AnimateTrackTitle>
			<AnimateTrackTitle
				delay={3}
				value={"floating to the surface"}
			></AnimateTrackTitle>
			<AnimateTrackTitle
				delay={4}
				value={"everything in light"}
			></AnimateTrackTitle>
			<AnimateTrackTitle
				delay={5}
				value={"the beautiful sound of anything"}
			></AnimateTrackTitle>
		</div>
	);
}
