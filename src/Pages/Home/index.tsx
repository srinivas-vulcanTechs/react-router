import React from "react";

import "./styles.css";
import HomePagePerson from "../../Assets/HomePagePerson.png";
import heartIcon from "../../Assets/icon1.png";
import healthIcon from "../../Assets/icon2.png";
import deleteIcon from "../../Assets/icon3.png";
import wp1 from "../../Assets/wp-1.png";
import wp2 from "../../Assets/wp-2.png";
import wp3 from "../../Assets/wp-3.png";
import wp4 from "../../Assets/wp-4.png";
import wp5 from "../../Assets/wp-5.png";
import wp6 from "../../Assets/wp-6.png";
import homeImage1 from "../../Assets/greenLogo.png";
import homeImage2 from "../../Assets/home-image-2.png";
import homeImage3 from "../../Assets/home-image-3.png";
import mapImage from "../../Assets/Map.png";
import Footer from "../../Components/Footer";

export default function Home() {
	const featuresCount = [
		{
			number: "200+",
			desc: "Members",
		},
		{
			number: "20",
			desc: "Waste",
		},
		{
			number: "50",
			desc: "Products",
		},
		{
			number: "150",
			desc: "Courses",
		},
	];
	const categories = [
		{
			image: heartIcon,
			head: "Information and Education",
			desc: "Built Wicket longer admire do barton vanity itself do in it.",
		},
		{
			image: healthIcon,
			head: "Course and Training",
			desc: "Built Wicket longer admire do barton vanity itself do in it.",
		},
		{
			image: deleteIcon,
			head: "Waste Recycling",
			desc: "Built Wicket longer admire do barton vanity itself do in it.",
		},
	];
	const wasteProducts = [
		{
			image: wp1,
			head: "MagoKits Pack",
			desc: "Rp. 150.000",
		},
		{
			image: wp2,
			head: "Composing Tools",
			desc: "Rp. 150.000",
		},
		{
			image: wp3,
			head: "Composter Full Pack",
			desc: "Rp. 300.000",
		},
		{
			image: wp4,
			head: "Waste Sorters",
			desc: "Rp. 150.000",
		},
		{
			image: wp5,
			head: "BioGas Stove",
			desc: "Rp. 250.000",
		},
		{
			image: wp6,
			head: "Waste Bin 2in1",
			desc: "Rp. 150.000",
		},
	];
	const homeImages = [
		{ image: homeImage1 },
		{ image: homeImage2 },
		{ image: homeImage3 },
	];
	return (
		<React.Fragment>
			<div className="home-container">
				<div className="text-container">
					<h4
						style={{ fontWeight: "600" }}
						className="landing-page-text greeting-text">
						Hi, Folks !
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
						src={HomePagePerson}
						alt=""
						style={{ height: "80%", width: "100%", objectFit: "cover" }}
					/>
				</div>
			</div>
			<div className="features-count-row">
				{featuresCount.map((each, idx) => {
					return (
						<div key={idx} className="col">
							<p className="number">{each.number}</p>
							<p className="desc">{each.desc}</p>
						</div>
					);
				})}
			</div>
			<div className="categories-container">
				<div className="head-text">
					<p className="category">Category</p>
					<p className="offer-services">We Offer Best Services</p>
				</div>
				<div className="boxesWithBoxShadowContainer">
					{categories.map((each, idx) => {
						return (
							<div key={idx} className="col box">
								<img src={each.image} alt="" height={50} width={50} />
								<p className="categories-headings">{each.head}</p>
								<p className="categories-desc">{each.desc}</p>
							</div>
						);
					})}
				</div>
			</div>
			<div className="categories-container">
				<div className="head-text">
					<p className="category">Top Selling</p>
					<p className="offer-services">Waste Processing Products</p>
				</div>
				<div className="waste-products-container">
					{wasteProducts.map((each, idx) => {
						return (
							<div key={idx} className="product-card">
								<img src={each.image} alt="" height={250} width={250} />
								<div className="card-footer">
									<p className="card-head">{each.head}</p>
									<p className="card-desc">{each.desc}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="testimonial-container">
				<div className="testimonial-text-container">
					<p className="testimonial-head">Testimonial</p>
					<p className="testimonial-desc">What people say about us.</p>
				</div>
				<div className="testimonial-card">
					<p style={{ marginBottom: "10%" }} className="testimonial-card-text">
						“On the Windows talking painted pasture yet its express parties use.
						Sure last upon he same as knew next. Of believed or diverted no.”
					</p>
					<p className="testimonial-card-head">Mike Taylor</p>
					<p className="testimonial-card-text">Lahore, Pakistan</p>
				</div>
			</div>
			<div className="home-images-container">
				{homeImages.map((each, idx) => {
					return (
						<img src={each.image} alt="" className="home-images" key={idx} />
					);
				})}
			</div>
			<div className="map-container">
				<img src={mapImage} alt="" className="map" />
				<div className="maps-text-container">
					<p className="maps-head">Maps</p>
					<p className="maps-thick-head">Find your nearest waste bank</p>
					<p className="maps-desc">
						Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat
						id pharetra ultricies mauris. Eget augue at egestas et consequat
						quis ultricies. At vel aenean posuere neque a fermentum donec eros
						ut. Nullam mi egestas sed facilisis.
					</p>
					<input
						type="text"
						placeholder="Search For the waste banks here..."
						className="search-waste"
					/>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
}
