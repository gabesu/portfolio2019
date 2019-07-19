import React from "react";
import "./hero.scss";
import "./Sketch";
import Sketch from "./Sketch";

const Hero = () => {
	return (
		<header className="header">
			<section>
				<p className="name">Mmëdiong Gabriel Esu</p>
				<h1>CREATIVE DESIGNER & DEVELOPER</h1>
				<a href="#" className="button">
					Selected Works
				</a>
			</section>
			<Sketch />
		</header>
	);
};
export default Hero;
