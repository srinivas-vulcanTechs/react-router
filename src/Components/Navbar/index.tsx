import React from "react";
import greenLogo from "../../Assets/greenLogo.png";

import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<React.Fragment>
			<div className="navbar-container">
				<div className="inner-navbar">
					<div className="logo-container">
						<img src={greenLogo} alt="" height={50} width={200} />
					</div>
					<div className="links-container">
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? "active-link" : "link")}
							style={{ textDecoration: "none" }}>
							Home
						</NavLink>
						<NavLink
							to="/services"
							className={({ isActive }) => (isActive ? "active-link" : "link")}
							style={{ textDecoration: "none" }}>
							Services
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) => (isActive ? "active-link" : "link")}
							style={{ textDecoration: "none" }}>
							About
						</NavLink>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
