import React from "react";

import whiteLogo from "../../Assets/whiteLogo.png";
import footerBtn1 from "../../Assets/footer-btn1.png";
import footerBtn2 from "../../Assets/footer-btn2.png";
import socialIcon1 from "../../Assets/social-icon1.png";
import socialIcon2 from "../../Assets/social-icon2.png";
import socialIcon3 from "../../Assets/social-icon3.png";
import "./styles.css";

export default function Footer() {
	return (
		<React.Fragment>
			<div className="footer-container">
				<div className="absolute-container">
					<div className="footer-left-container">
						<img
							src={whiteLogo}
							alt=""
							height={50}
							width={150}
							style={{ marginBottom: "15px" }}
						/>
						<p className="address">
							Address : Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. Depok,
							Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281.
						</p>
						<p className="phone">+62 812 234 6789</p>
						<p className="phone">buangin@services.id</p>
					</div>
					<div className="footer-middle-container">
						<div className="footer-col">
							<p className="footer-head">Company</p>
							<p className="footer-links">About</p>
							<p className="footer-links">Careers</p>
							<p className="footer-links">Mobile</p>
						</div>
						<div className="footer-col">
							<p className="footer-head">Contact</p>
							<p className="footer-links">FAQ/Help</p>
							<p className="footer-links">Press</p>
							<p className="footer-links">Affiliates</p>
						</div>
						<div className="footer-col">
							<p className="footer-head">More</p>
							<p className="footer-links">AirlineFees</p>
							<p className="footer-links">Airline</p>
							<p className="footer-links">Low Fare Tips</p>
						</div>
					</div>
					<div className="footer-right-container">
						<p className="footer-head">Discover our app</p>
						<div className="footer-row">
							<img src={footerBtn1} alt="" height={50} width={150} />
							<img src={footerBtn2} alt="" height={50} width={150} />
						</div>
						<div className="footer-row">
							<img src={socialIcon1} alt="" height={50} width={50} />
							<img src={socialIcon2} alt="" height={50} width={50} />
							<img src={socialIcon3} alt="" height={50} width={50} />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
