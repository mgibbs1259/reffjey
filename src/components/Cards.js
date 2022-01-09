import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function Cards() {
	return (
		<div className="cards">
			<h1>Alive Again</h1>
			<div align="center">
				<iframe
					title="Reffjey Spotify"
					src="https://open.spotify.com/follow/1/?uri=spotify:artist:1amTGexKswbu26LrYlfoGj&size=detail&theme=light"
					width="225"
					height="56"
					scrolling="no"
					frameborder="0"
					allowtransparency="true"
				></iframe>
			</div>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="/images/reassembly.jpg"
							text="Reassembly"
							href="https://open.spotify.com/track/3ab4sjiVMKGeGYJOX2hWHV?si=9IrBMU81Qr2V0EKU9-tqLA"
						/>
						<CardItem
							src="/images/alive-again.jpg"
							text="Alive Again"
							href="https://open.spotify.com/track/0kLT6T90iwhL82NNfCJozb?si=oh0XKWNKRU6HaV_hiC8WKg"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="/images/say-it's-gonna-be.jpg"
							text="Say It's Gonna Be"
							href="https://open.spotify.com/track/2bZv9CY0k9SwribaemPB1I?si=FcUiw-DFSMueysDTTsFsRA"
						/>
						<CardItem
							src="/images/found-my-voice.jpg"
							text="Found My Voice"
							href="https://open.spotify.com/track/1N85M4ZqgRR94QZCSds6Nj?si=lVL9T306RnqvBGa8GCz37Q"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}
