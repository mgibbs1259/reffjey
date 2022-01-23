import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./Cards.css";

function CardItem(props) {
	return (
		<>
			<li className="cards__item">
				<a href={props.href} className="cards__item__img__box">
					<img
						src={props.src}
						alt=""
						className="cards__item__img"
					/>
				</a>
			</li>
		</>
	);
}

export default function PastMusic() {
	return (
		<div className="cards">
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
				<h1>Singles and EPs</h1>
			</motion.div>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							href="https://open.spotify.com/album/5LiS0sYeOXXOZAbYj47WwJ?si=oJeGUITVSx-ftDj304Jgww"
							src="/images/the-beautiful-sound-of-anything-small.jpg"
						/>
						<CardItem
							href="https://open.spotify.com/album/6olAOVju1Q07eS4kT9m7af?si=kRNcWEgqSEW7j3mS1sQgnQ"
							src="/images/100x.jpg"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							href="https://open.spotify.com/album/63bhHGgeOROPbyNP1QJphD?si=xReVx3BDTbWhQZEPdkofDg"
							src="/images/laurels.jpg"
						/>
						<CardItem
							href="https://open.spotify.com/album/7ciqWbpuVRaSaGGqCFoJs0?si=kM1aKyRUQPSBqBQkXHEy7w"
							src="/images/stickerbrush-symphony.jpg"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							href="https://open.spotify.com/album/3DSZuzNGyjQjs5FcgsdKHj?si=rYTEaXVEQuio9881mKJOGw"
							src="/images/morning-song.jpg"
						/>
						<CardItem
							href="https://open.spotify.com/album/1myEMmo8lrNRn7gyKCb5YS?si=013gZe5CQIqJBlwOd3mE_g"
							src="/images/alive-again.jpg"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}
