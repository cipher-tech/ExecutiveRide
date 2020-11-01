// import React from 'react'
import Head from 'next/head'
import { Helmet } from "react-helmet"

import { Footer, GenNavbar } from '../components'

const Services = () => {
	return (
		<>
			<head>
				<title>Services</title>
				<meta name="author" content="Nile-Theme" />
				<meta name="robots" content="index follow" />
				<meta name="googlebot" content="index follow" />
				<meta http-equiv="content-type" content="text/html; charset=utf-8" />
				<meta name="keywords" content="cargo, clean, contractor, corporate, freight, industry, localization, logistics, modern, shipment, transport, transportation, truck, trucking" />
				<meta name="description" content="Transportation and Logistics Responsive HTML5 Template" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* <!-- google fonts --> */}
				<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800%7CPoppins:300i,300,400,500,600,700,400i,500%7CDancing+Script:700%7CDancing+Script:700%7CGreat+Vibes:400%7CPoppins:400%7CDosis:800%7CRaleway:400,700,800&amp;subset=latin-ext" rel="stylesheet" />
				{/* <!-- animate --> */}
				<link rel="stylesheet" href="assets/css/animate.css" />
				{/* <!-- owl Carousel assets --> */}
				<link href="assets/css/owl.carousel.css" rel="stylesheet" />
				<link href="assets/css/owl.theme.css" rel="stylesheet" />
				{/* <!-- bootstrap --> */}
				<link rel="stylesheet" href="assets/css/bootstrap.min.css" />
				{/* <!-- hover anmation --> */}
				<link rel="stylesheet" href="assets/css/hover-min.css" />
				{/* <!-- flag icon --> */}
				<link rel="stylesheet" href="assets/css/flag-icon.min.css" />
				{/* <!-- main style --> */}
				<link rel="stylesheet" href="assets/css/style.css" />
				{/* <!-- elegant icon --> */}
				<link rel="stylesheet" href="assets/css/elegant_icon.css" />

				{/* <!-- jquery library  --> */}
				<script src="assets/js/jquery-3.2.1.min.js"></script>
				{/* <!-- fontawesome  --> */}
				<link rel="stylesheet" href="assets/fonts/font-awesome/css/font-awesome.min.css" />

			</head>

			<body>
				<GenNavbar />
				{/* <!-- Search  --> */}
				<div id="search">
					<button type="button" className="close">×</button>
					<form className="clearfix d-block">
						<input type="search" value="" placeholder="Search for . . . ." />
						<button type="submit" className="btn btn-primary">Search</button>
					</form>
				</div>
				{/* <!-- // Search  --> */}

				<div className="page-title">
					<div className="container">
						<div className="padding-tb-120px">
							<h1>Our Services</h1>
							<ol className="breadcrumb">
								<li><a href="/">Home</a></li>
								<li className="active">Services</li>
							</ol>
						</div>
					</div>
				</div>


				<div className="padding-tb-100px">
					<div className="container justify-content-center">
						<div className="row">

							<div className="col-lg-12">
								<div className="service-slider-img margin-bottom-30px">
									<ul className="slider-1">
										<li className="row justify-content-center"><img src="assets/img/service_3.jpg" alt="" /></li>
										<li className="row justify-content-center"><img src="assets/img/service_2.jpg" alt="" /></li>
										<li className="row justify-content-center"><img src="assets/img/service_1.jpg" alt="" /></li>
									</ul>
								</div>

								<p>The Executive Ride Investo’ has emerged with a great high-tech solutions to put to an end the issues that
									surrounds Investors and its investments especially in our Systems of specializations.
									The Executive Ride Investo’ the great Empire for Wealth, Assets and Investment management. The specialty in
									building of competent and influential investors all overthe world. Being fully equipped with unlimited capacities ,
									great modern skills , highly organized in the mode of operations with enough professional bodies (Man Power)
								</p>
								<div className="section padding-tb-100px section-ba-1">
									<div className="container">
										{/* <!-- Title --> */}
										<div className="section-title margin-bottom-40px">
											<div className="row justify-content-center">
												<div className="col-lg-7">
													<div className="icon text-main-color"><i className="fa fa-truck"></i></div>
													<div className="h2">Our Service</div>
													<div className="des">
														Here includes the services or the plans of the company.
                                </div>
												</div>
											</div>
										</div>
										{/* <!-- // End Title --> */}

										<div className="row justify-content-center">

											<div className="col-lg-3 col-md-6">
												<div className="service-icon-box">
													<div className="icon"><img src="assets/icons/service-dark-1.png" alt="" /></div>
													<a href="#" className="title h2">Capital Growth Investment.</a>
													{/* <div className="des">Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.</div> */}
												</div>
											</div>


											<div className="col-lg-3 col-md-6">
												<div className="service-icon-box">
													<div className="icon"><img src="assets/icons/service-dark-2.png" alt="" /></div>
													<a href="#" className="title h2">Hire Purchase Investment</a>
													{/* <div className="des">
                                    The Tariff gears ensuring that ourInvestors or potential Investor out there don’t loss there hard earned money for
                                    investing wrongly or going into partnership with the wrong people when it comes to investment.
                                </div> */}
												</div>
											</div>


											<div className="col-lg-3 col-md-6">
												<div className="service-icon-box">
													<div className="icon"><img src="assets/icons/service-dark-3.png" alt="" /></div>
													<a href="#" className="title h2">Real Estate</a>
													{/* <div className="des">Ut elit tellus, luctus nec magna mattis et,
                                pulvinar dapibus lorem leo ultricies et vitae enim.</div> */}
												</div>
											</div>
										</div>
									</div>
								</div>

								<h2>Futher More</h2>

								<p>It’s quite alarming the rate at which Investors are loosing their Hard-Earned money in the motion of doing
									investmentfor profits purposes , mostly young investors, even big investor has thus experienced great
									challenges facing investments. (Reasons) Most investors go into business they are ignorant of.
									The Executive ride welcomes you with MASSIVE SOLUTIONS in her wings forthe investors in our system.
								</p>


								{/* <div id="accordion" className="nile-accordion margin-top-30px sm-mb-45px">
									<div className="card">
										<div className="card-header" id="headingOne">
											<h5 className="mb-0">
												<button className="btn btn-block btn-link active" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="fa fa-info-circle"></i> Why us ?</button>
											</h5>
										</div>

										<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
											<div className="card-body">
												Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
										</div>
									</div>
									<div className="card">
										<div className="card-header" id="headingTwo">
											<h5 className="mb-0">
												<button className="btn btn-block btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="fa fa-truck"></i> Explore our Facilities</button>
											</h5>
										</div>
										<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
											<div className="card-body">
												Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
										</div>
									</div>
									<div className="card">
										<div className="card-header" id="headingThree">
											<h5 className="mb-0">
												<button className="btn btn-block btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="fa fa-plane"></i> Warehousing Solution</button>
											</h5>
										</div>
										<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
											<div className="card-body">
												Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
										</div>
									</div>
								</div> */}



							</div>

							<div className="col-lg-3">
							</div>

						</div>
					</div>
				</div>

				<Footer />

				<Helmet>
					<script src="assets/js/popper.min.js"></script>
					<script src="assets/js/YouTubePopUp.jquery.js"></script>
					<script src="assets/js/owl.carousel.min.js"></script>
					<script src="assets/js/imagesloaded.min.js"></script>
					<script src="assets/js/custom.js"></script>
					<script src="assets/js/bootstrap.min.js"></script>
				</Helmet>
			</body>
		</>
	)
}

export default Services
