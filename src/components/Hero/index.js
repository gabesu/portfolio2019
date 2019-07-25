import React from "react";
import "./hero.scss";
import "./Sketch";
import Sketch from "./Sketch";
import { TweenLite } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
const plugin = [ScrollToPlugin];

const handleClick = () => {
	TweenLite.to(document.documentElement, 0.5, { scrollTo: "#works" });
};

const Hero = () => {
	return (
		<header className="header">
			<section>
				<a href="./" className="logo-mobile">
					<svg
						width="25"
						height="24"
						viewBox="0 0 25 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12.0947 24C10.4636 24 8.87682 23.6807 7.38625 23.0569C5.94747 22.4514 4.65293 21.589 3.54333 20.4844C2.43373 19.3835 1.56084 18.0991 0.950559 16.6716C0.321785 15.1927 0 13.6183 0 12C0 10.3817 0.321785 8.80734 0.950559 7.32844C1.56084 5.90092 2.43003 4.61651 3.54333 3.5156C4.65293 2.41468 5.94747 1.54862 7.38625 0.943119C8.87682 0.319266 10.4636 0 12.0947 0C13.5224 0 14.9242 0.245872 16.252 0.730275C17.5391 1.19633 18.7301 1.87156 19.7879 2.74128C21.9183 4.4844 23.3941 6.91376 23.9415 9.58532L24.3077 11.3578L2.98853 11.2404C2.97004 11.4899 2.95894 11.7431 2.95894 12C2.95894 14.422 3.9095 16.6972 5.63308 18.411C7.35666 20.1248 9.65354 21.0642 12.0947 21.0642C13.87 21.0642 15.5936 20.5578 17.0731 19.6C17.8128 19.1229 18.4712 18.5468 19.0371 17.8936H11.9837C11.1663 17.8936 10.5042 17.2367 10.5042 16.4257C10.5042 15.6147 11.1663 14.9578 11.9837 14.9578H24.0451L23.0723 17.0422C22.1144 19.0899 20.5979 20.8257 18.6894 22.0587C16.7254 23.3284 14.447 24 12.0947 24ZM3.74676 8.30459L20.4796 8.39633C19.9063 7.08991 19.026 5.92294 17.9053 5.00183C16.2742 3.66972 14.2103 2.93578 12.0947 2.93578C9.65354 2.93578 7.36036 3.8789 5.63308 5.58899C4.83047 6.38899 4.198 7.30642 3.74676 8.30459Z"
							fill="white"
						/>
					</svg>
				</a>
				<p className="name">Mmëdiong Gabriel Esu</p>
				<h1>CREATIVE DESIGNER & DEVELOPER</h1>
				<button className="button" onClick={() => handleClick()}>
					Selected Works
				</button>
				<span className="links">
					<a
						href="https://codepen.io/GabEsu"
						target="_blank"
						rel="noopener noreferrer"
					>
						Codepen
					</a>
					<a
						href="https://dribbble.com/GabEsu"
						target="_blank"
						rel="noopener noreferrer"
					>
						Dribbble
					</a>
				</span>
			</section>
			<Sketch />
		</header>
	);
};
export default Hero;
