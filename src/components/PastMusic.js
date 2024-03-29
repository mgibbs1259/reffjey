import React from "react";
import { motion } from "framer-motion";
import "./Cards.css";

function CardItem(props) {
	return (
		<>
			<li className="cards__item">
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 1 }}
					style={{
						background: "white",
						border: "white",
						width: "90%",
						paddingTop: "15px",
						paddingBottom: "15px",
					}}
				>
					<a href={props.href} className="cards__item__img__box">
						<img
							src={props.src}
							alt=""
							className="cards__item__img"
						/>
					</a>
				</motion.button>
			</li>
		</>
	);
}

export default function PastMusic() {
	return (
		<div className="cards">
			<h1>singles and EPs</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							href="https://open.spotify.com/album/1IUskJhiDaVZhACO8xSfgi?si=tOsu7RTRQwyHz1TWO-esyA"
							src="/images/malenia.jpg"
						/>
						<CardItem
							href="https://open.spotify.com/album/5LiS0sYeOXXOZAbYj47WwJ?si=oJeGUITVSx-ftDj304Jgww"
							src="/images/the-beautiful-sound-of-anything-small.jpg"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							href="https://open.spotify.com/album/6olAOVju1Q07eS4kT9m7af?si=kRNcWEgqSEW7j3mS1sQgnQ"
							src="/images/100x.jpg"
						/>
						<CardItem
							href="https://open.spotify.com/album/63bhHGgeOROPbyNP1QJphD?si=xReVx3BDTbWhQZEPdkofDg"
							src="/images/laurels.jpg"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							href="https://open.spotify.com/album/7ciqWbpuVRaSaGGqCFoJs0?si=kM1aKyRUQPSBqBQkXHEy7w"
							src="/images/stickerbrush-symphony.jpg"
						/>
						<CardItem
							href="https://open.spotify.com/album/3DSZuzNGyjQjs5FcgsdKHj?si=rYTEaXVEQuio9881mKJOGw"
							src="/images/morning-song.jpg"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							href="https://open.spotify.com/album/1myEMmo8lrNRn7gyKCb5YS?si=013gZe5CQIqJBlwOd3mE_g"
							src="/images/alive-again.jpg"
						/>
						<CardItem href="" src="" />
					</ul>
				</div>
			</div>
		</div>
	);
}
