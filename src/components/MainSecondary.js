import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import "./Main.css";
import CardImageItem from "./CardImageItem";
import "./Cards.css";

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
			<div className="cards">
				<div className="cards__container">
					<div className="cards__wrapper">
						<ul className="cards__items">
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
								<CardImageItem
									src="/images/the-beautiful-sound-of-anything-album-cover.jpg"
									href="https://open.spotify.com/album/5LiS0sYeOXXOZAbYj47WwJ?si=ZowSx70SQsS603imJl_G0Q"
								/>
							</motion.div>
							<li className="cards__item">
								<div className="cards__item__box">
									<AnimateTrackTitle
										delay={2}
										value={"can't let go anymore"}
										className=".cards__item__info"
									></AnimateTrackTitle>
									<AnimateTrackTitle
										delay={3}
										value={
											"floating to the surface"
										}
										className=".cards__item__info"
									></AnimateTrackTitle>
									<AnimateTrackTitle
										delay={4}
										value={"everything in light"}
										className=".cards__item__info"
									></AnimateTrackTitle>
									<AnimateTrackTitle
										delay={5}
										value={
											"the beautiful sound of anything"
										}
										className=".cards__item__info"
									></AnimateTrackTitle>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
