import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

export default function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<>
			<nav className="navbar">
				<Link
					to="/"
					className="navbar-logo"
					onClick={closeMobileMenu}
				>
					reffjey
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i
						className={click ? "fas fa-times" : "fas fa-bars"}
					/>
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link
							to="/music"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							music
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/tour"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							tour
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/merch"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							merch
						</Link>
					</li>
					<li>
						<Link
							to="/sign-up"
							className="nav-links-mobile"
							onClick={closeMobileMenu}
						>
							sign up
						</Link>
					</li>
				</ul>
				{button && (
					<Button buttonStyle="btn--outline">sign up</Button>
				)}
			</nav>
		</>
	);
}
