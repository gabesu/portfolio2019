import React, { useEffect } from "react";
import "./cursor.scss";

const Cursor = () => {
	useEffect(() => {
		let myCursor = document.querySelector(".cursor");
		const CursorFollow = e => {
			myCursor.style.transform = `translate(${e.clientX -
				myCursor.clientWidth / 2}px, ${e.clientY +
				window.scrollY -
				myCursor.clientHeight / 2}px)`;
		};
		const sketchMove = e => {
			let leftEye = document.querySelector(".left-eye");
			let rightEye = document.querySelector(".right-eye");

			let windowWidth = document.documentElement.clientWidth;
			let windowHeight = document.documentElement.clientHeight;

			let calcX = (e.clientX / windowWidth) * 100;
			let calcY = (e.clientY / windowHeight) * 100;

			let leftXRange = (60 / 100) * calcX - 25;
			let leftYRange = (20 / 100) * calcY - 15;

			let rightXRange = (75 / 100) * calcX - 25;
			let rightYRange = (15 / 100) * calcY - 15;

			leftEye.style.transform = `translate(${leftXRange}px, ${leftYRange}px)`;
			rightEye.style.transform = `translate(${rightXRange}px, ${rightYRange}px)`;
		};

		document.addEventListener("mousemove", e => CursorFollow(e));
		document.addEventListener("mousemove", e => sketchMove(e));
		// Calculate custom cursor position on scroll/wheel
		document.addEventListener("wheel", e => {
			CursorFollow(e);
			let scrollDistance = e.deltaY; // Change in scroll

			let cursorTranslate = myCursor.style.transform; // Get curso translate properties
			let resY = cursorTranslate.split("px")[1];
			let resX = cursorTranslate.split(", ");
			let translateX = resX[0].split("translate(")[1].split("px")[0]; // Split to get X translate property
			let translateY = resY.split(", ")[1]; // Split to get Y translate property

			// Subtract scroll distance to translate Y property to get new cursor position after scroll
			myCursor.style.transform = `translate(${translateX}px, ${translateY -
				scrollDistance}px)`;
		});
	});
	return (
		<svg fill="#ffffff" className="cursor" width="40px" height="40px">
			<circle cx="20" cy="20" r="20" />
		</svg>
	);
};

export default Cursor;
