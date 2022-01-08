import React from "react";

export default function CardItem(props) {
	return (
		<>
			<li className="cards__item">
				<div className="cards__item__box">
					<img
						src={props.src}
						alt="Alive Again"
						className="cards__item__img"
					/>
					<div className="cards__item__info">
						<h5 className="cards__item__text">
							{props.text}
						</h5>
						<a
							href={props.href}
							className="cards__item__link"
						>
							<i
								className="fab fa-spotify fa-2x"
								style={{ color: "black" }}
							></i>
						</a>
					</div>
				</div>
			</li>
		</>
	);
}
