import React from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

function App() {
	return (
		<div className="App">
			<Cursor />
			<Sidebar />
			<main>
				<Hero />
				<Works />
				<Footer />
			</main>
			<svg className="filter" xmlns="http://www.w3.org/2000/svg" version="1.1">
				<defs>
					<filter id="goo">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
							result="goo"
						/>
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>
		</div>
	);
}

export default App;
