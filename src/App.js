import React from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Works from "./components/Works";

function App() {
	return (
		<div className="App">
			<Sidebar />
			<main>
				<Hero />
				<Works />
			</main>
		</div>
	);
}

export default App;
