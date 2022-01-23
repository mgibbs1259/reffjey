import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
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

export default function CurrentMusic() {
	return (
		<div className="cards">
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
							<a
								href="https://open.spotify.com/album/5LiS0sYeOXXOZAbYj47WwJ?si=ZowSx70SQsS603imJl_G0Q"
								className="cards__item__img__box"
							>
								<img
									src="/images/the-beautiful-sound-of-anything-album-cover.jpg"
									alt=""
									className="cards__item__img"
								/>
							</a>
						</motion.div>
						<div className="cards__item__text__box">
							<AnimateTrackTitle
								delay={2}
								value={"can't let go anymore"}
								className="cards__item__text"
							></AnimateTrackTitle>
							<AnimateTrackTitle
								delay={3}
								value={"floating to the surface"}
								className="cards__item__text"
							></AnimateTrackTitle>
							<AnimateTrackTitle
								delay={4}
								value={"everything in light"}
								className="cards__item__text"
							></AnimateTrackTitle>
							<AnimateTrackTitle
								delay={5}
								value={
									"the beautiful sound of anything"
								}
								className="cards__item__text"
							></AnimateTrackTitle>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}
