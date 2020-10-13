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
					<div className="container">
						<div className="row">

							<div className="col-lg-9">
								<div className="service-slider-img margin-bottom-30px">
									<ul className="slider-1">
										<li><img src="assets/img/service_1.jpg" alt="" /></li>
										<li><img src="assets/img/service_2.jpg" alt="" /></li>
										<li><img src="assets/img/service_3.jpg" alt="" /></li>
									</ul>
								</div>

								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

								<h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h2>

								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>


								<div id="accordion" className="nile-accordion margin-top-30px sm-mb-45px">
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
								</div>



							</div>

							<div className="col-lg-3">

								{/* <div className="background-main-color margin-bottom-40px">
									<div className="services-list">
										<ul>
											<li><a href="service-single.html">Air Freight</a></li>
											<li><a href="service-single.html">Ocean Freight</a></li>
											<li><a href="service-single.html">Packaging and Storage</a></li>
											<li className="active"><a href="service-single.html">Cargo Transportation </a></li>
											<li><a href="service-single.html">Fast Delivery</a></li>
											<li><a href="service-single.html">Railroad Transportation</a></li>
										</ul>
									</div>
								</div> */}




								<div className="background-white margin-bottom-40px">
									<div className="nile-widget contact-widget">
										<div className="padding-30px">
											<div className="margin-bottom-60px">
												<h2 className="title">Location</h2>
												<div className="contact-info opacity-9">
													<div className="icon margin-top-5px"><span className="icon_pin_alt"></span></div>
													<div className="text">
														<span className="title-in">Location :</span> <br />
														<span className="font-weight-500 text-uppercase">US - Los Angeles</span>
													</div>
												</div>
											</div>
											<div className="call_center">
												<h2 className="title">Call Center</h2>
												<div className="contact-info opacity-9">
													<div className="icon  margin-top-5px"><span className="icon_phone"></span></div>
													<div className="text">
														<span className="title-in">Call Us :</span><br />
														<span className="font-weight-500 text-uppercase">00222123333019</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="contact-modal">
									<div className="background-grey-4 text-white">
										<div className="padding-30px">
											<h3 className="padding-bottom-15px">Get A Free Quote</h3>
											<form>
												<div className="form-row">
													<div className="form-group col-md-12">
														<label>Full Name</label>
														<input type="text" className="form-control" id="inputName44" placeholder="Name" />
													</div>
													<div className="form-group col-md-12">
														<label>Email</label>
														<input type="email" className="form-control" id="inputEmail44" placeholder="Email" />
													</div>
												</div>
												<div className="form-group">
													<label>Message</label>
													<textarea className="form-control" id="exampleFormControlTextarea11" rows={3}></textarea>
												</div>
												<a href="#" className="btn-sm btn-lg btn-block background-main-color text-white text-center  text-uppercase rounded-0 padding-15px">SEND MESSAGE</a>
											</form>
										</div>
									</div>
								</div>

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
