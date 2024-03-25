import React from "react";

import aboutHeader from "../../Assets/about-header.png";
import aboutBody from "../../Assets/about-body.png";
import "./styles.css";
import Footer from "../../Components/Footer";

export default function About() {
	return (
		<React.Fragment>
			<div className="about-container">
				<div className="image-container">
					<img
						src={aboutHeader}
						alt=""
						style={{
							height: "80%",
							width: "100%",
							objectFit: "cover",
							borderRadius: "10px",
						}}
					/>
				</div>
				<div className="text-container">
					<h4
						style={{ fontWeight: "600" }}
						className="landing-page-text greeting-text">
						About Me
					</h4>
					<h1 className="landing-page-text big-text">
						Innovation Dedication and Sustainable Solution
					</h1>
					<p className="small-text">
						Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat
						id pharetra ultricies mauris. Eget augue at egestas et consequat
						quis ultricies. At vel aenean posuere neque a fermentum donec eros
						ut. Nullam mi egestas sed facilisis.
					</p>
					<button className="btn details-btn">View Details</button>
				</div>
			</div>
			<div className="about-body">
				<div className="text-container">
					<h4
						style={{ fontWeight: "600" }}
						className="landing-page-text greeting-text">
						About Me
					</h4>
					<h1 className="landing-page-text big-text">
						Innovation Dedication and Sustainable Solution
					</h1>
					<p className="small-text">
						Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat
						id pharetra ultricies mauris. Eget augue at egestas et consequat
						quis ultricies. At vel aenean posuere neque a fermentum donec eros
						ut. Nullam mi egestas sed facilisis.
					</p>
					<button className="btn details-btn">View Details</button>
				</div>
				<div className="image-container">
					<img
						src={aboutBody}
						alt=""
						style={{
							height: "80%",
							width: "100%",
							objectFit: "cover",
							borderRadius: "10px",
						}}
					/>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
}
