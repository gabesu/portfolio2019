import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { TweenMax, Power2 } from "gsap";
import Work from "./Work";
import "./works.scss";
import data from "./data";
import image1 from "./../../assets/images/hfh-cover.png";
import image2 from "./../../assets/images/piggy.jpg";
// import image3 from "./../../assets/images/phone.gif";
import image3 from "./../../assets/images/eyes.mp4";

const myImages = [image1, image2, image3];
const duration = 500;

const animation = (target, dur) =>
	TweenMax.from(target, dur / 1000, {
		opacity: 0,
		width: "90%",
		ease: Power2.easeInOut
	});

export default class Works extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allWorks: data,
			activeWork: data[0],
			workCount: data.length,
			entered: false,
			image: myImages[0],
			isVideo: false
		};
		this.works = null;
	}
	componentDidMount() {
		myImages.forEach(image => {
			new Image().src = image;
		});
		const workObserver = new IntersectionObserver(
			(entries, workObserver) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						this.setState({
							entered: true
						});
					}
				});
			},
			{ threshold: 0.5 }
		);
		workObserver.observe(this.works);
	}
	checkVideo = image => {
		if (image.split(".")[2] === "mp4") {
			this.setState({
				isVideo: true,
				entered: true
			});
		} else {
			this.setState({
				isVideo: false,
				entered: true
			});
		}
		console.log(image.split(".")[2], this.state.isVideo);
	};
	nextWork = () => {
		const newIndex = this.state.activeWork.index + 1;
		if (newIndex < data.length) {
			this.setState({
				entered: false
			});
			setTimeout(() => {
				this.setState({
					activeWork: data[newIndex],
					image: myImages[newIndex]
				});
				console.log(this.state.image);
				// Check for video
				this.checkVideo(this.state.image);
			}, duration + 15);
		} else {
			this.setState({
				entered: false
			});
			setTimeout(() => {
				this.setState({
					activeWork: data[0],
					image: myImages[0]
				});
				this.checkVideo(this.state.image);
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
				this.setState({
					activeWork: data[newIndex],
					image: myImages[newIndex]
				});
				this.checkVideo(this.state.image);
			}, duration + 10);
		} else {
			this.setState({
				entered: false
			});
			setTimeout(() => {
				this.setState({
					activeWork: data[lastIndex],
					image: myImages[lastIndex]
				});
				this.checkVideo(this.state.image);
			}, duration + 10);
		}
	};
	render() {
		const {
			activeWork,
			image,
			workCount,
			allWorks,
			entered,
			isVideo
		} = this.state;
		return (
			<section
				className="works"
				id="works"
				ref={section => (this.works = section)}
			>
				<h3>Selected Works</h3>
				<div className="work-content">
					<span className="work-counter">
						<div
							className="count"
							style={{ transform: `translateY(${-activeWork.index * 18}px)` }}
						>
							{allWorks.map(work => {
								return <div key={work.index}>0{work.index + 1}</div>;
							})}
						</div>
						<div className="total">&nbsp;/ 0{workCount}</div>
					</span>
					<div className="work">
						<div className="work-image">
							<Transition
								in={entered}
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
								<React.Fragment>
									{!isVideo ? (
										<img src={image} alt="" />
									) : (
										isVideo && <video src={image} alt="" autoPlay loop />
									)}
								</React.Fragment>
							</Transition>
						</div>
						<Transition
							in={entered}
							mountOnEnter
							unmountOnExit
							timeout={duration}
						>
							<Work workData={activeWork} />
						</Transition>
					</div>
					<div className="work-nav">
						<button
							onClick={() => this.prevWork()}
							id="prev"
							aria-label="Previous Work"
						>
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
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10 18L4 12L10 6"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>

						<button
							onClick={() => this.nextWork()}
							id="next"
							aria-label="Next Work"
						>
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
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M14 6L20 12L14 18"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</section>
		);
	}
}
