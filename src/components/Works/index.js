import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { TweenMax, Power2 } from "gsap";
import Work from "./Work";
import "./works.scss";
import data from "./data";
import image1 from "./../../assets/images/test-1.jpg";
import image2 from "./../../assets/images/test-2.jpg";
import image3 from "./../../assets/images/test-3.jpg";

const myImages = [image1, image2, image3];
const duration = 500;

const cb = () => {
	console.log("finished");
};
const animation = (target, dur) =>
	TweenMax.from(target, dur / 1000, {
		opacity: 0,
		width: "90%",
		ease: Power2.easeInOut,
		onComplete: cb
	});

export default class Works extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeWork: data[0],
			entered: true,
			image: myImages[0]
		};
	}
	componentDidMount() {
		console.log(this.state.activeWork.index);
	}
	nextWork = () => {
		const newIndex = this.state.activeWork.index + 1;
		if (newIndex < data.length) {
			this.setState({
				entered: false
			});
			setTimeout(() => {
				console.log("Timeeee");
				this.setState({
					activeWork: data[newIndex],
					image: myImages[newIndex],
					entered: true
				});
			}, duration + 15);
		} else {
			this.setState({
				entered: false
			});
			setTimeout(() => {
				this.setState({
					activeWork: data[0],
					image: myImages[0],
					entered: true
				});
			}, duration + 10);
		}
	};
	prevWork = () => {
		const newIndex = this.state.activeWork.index - 1;
		const lastIndex = data.length - 1;
		if (newIndex >= 0) {
			this.setState({
				entered: false
			});
			setTimeout(() => {
				console.log("Timeeee");
				this.setState({
					activeWork: data[newIndex],
					image: myImages[newIndex],
					entered: true
				});
			}, duration + 10);
		} else {
			this.setState({
				entered: false
			});
			setTimeout(() => {
				this.setState({
					activeWork: data[lastIndex],
					image: myImages[lastIndex],
					entered: true
				});
			}, duration + 10);
		}
	};
	render() {
		const { activeWork, image } = this.state;
		return (
			<section className="works">
				<h3>Selected Works</h3>
				<div className="work">
					<div className="work-image">
						<Transition
							in={this.state.entered}
							onEnter={node => {
								animation(node, duration);
							}}
							onExit={node => {
								animation(node, duration).reverse(0);
							}}
							mountOnEnter
							unmountOnExit
							timeout={duration}
						>
							<img src={image} alt="" />
						</Transition>
					</div>
					<Transition
						in={this.state.entered}
						// onEnter={node => {
						// 	animation(node, duration);
						// }}
						// onExit={node => {
						// 	animation(node, duration).reverse(0);
						// }}
						mountOnEnter
						unmountOnExit
						timeout={duration}
					>
						<Work workData={activeWork} />
					</Transition>
				</div>
				<div className="work-nav">
					<button onClick={() => this.prevWork()}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20 12H4"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M10 18L4 12L10 6"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>

					<button onClick={() => this.nextWork()}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 12H20"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M14 6L20 12L14 18"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</section>
		);
	}
}
