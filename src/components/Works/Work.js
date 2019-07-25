// import React from "react";
import React, { Component } from "react";
import "./works.scss";
import { TimelineMax, Power2 } from "gsap";

export default class Work extends Component {
	// const { ID, title, role, image, description } = props.workData;
	constructor(props) {
		super(props);
		this.workTl = new TimelineMax({ paused: true });

		this.title = null;
		this.role = null;
		this.description = null;
		this.brief = null;
	}
	componentDidMount() {
		// this.descriptionText = new SplitType(this.description);
		this.workTl
			.from(this.title, 0.3, { y: "20px", opacity: 0, ease: Power2.easeIn })
			.from(this.role, 0.2, { y: "20px", opacity: 0, ease: Power2.easeIn })
			.from(this.brief, 0.2, { y: "20px", opacity: 0, ease: Power2.easeIn })
			.from(this.description, 0.2, {
				y: "20px",
				opacity: 0,
				ease: Power2.easeInOut
			});
		this.workTl.play();
	}
	componentWillMount() {
		this.workTl.reverse();
	}

	render() {
		return (
			<article>
				<h2 ref={h2 => (this.title = h2)}>{this.props.workData.title}</h2>
				<span className="role" ref={span => (this.role = span)}>
					{this.props.workData.role}
				</span>
				<h4 ref={h4 => (this.brief = h4)}>Brief</h4>
				<p className="description" ref={p => (this.description = p)}>
					{this.props.workData.description}
				</p>
				<span className="links">
					{this.props.workData.links.map(link => {
						return (
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								key={link.url}
							>
								{link.title}
							</a>
						);
					})}
				</span>
			</article>
		);
	}
}
