import React from 'react'
import Head from 'next/head'
import { Helmet } from "react-helmet"

import { Footer, GenNavbar, SubInfo } from '../components'

const aboutUs = () => {
    return (
        <>
            <Head>
                <title>Nile - Transportation and Logistics Responsive HTML5 Template</title>
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

            </Head>

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
                        <h1>About Us</h1>
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li className="active">About Us</li>
                        </ol>
                    </div>
                </div>
            </div>


            {/* <!--============= About Us =============--> */}
            <div className="nile-about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 sm-mb-45px">

                            <div className="section-title-right text-main-color clearfix">
                                <div className="icon"><img src="assets/icons/title-icon-1.png" alt="" /></div>
                                <h2 className="title-text">Who We Are ?</h2>
                            </div>
                            <div className="about-text margin-tb-25px">
                                <h4>Years of experience in LogAssets and Investment management.</h4>
                                The Executive Ride Investo’ the great Empire for Wealth, Assets and Investment management. The specialty in
                                building of competent and influential investors all overthe world. Being fully equipped with unlimited capacities ,
                                great modern skills , highly organized in the mode of operations with enough professional bodies(Man Power)
                                The Executive Ride Investo’ has emerged with a great high-tech solutions to put to an end the issues that
                                surrounds Investors and its investments especially in our Systems of specializations.
                                It’s quite alarming the rate at which Investors are loosing their Hard-Earned money in the motion of doing
                                investmentfor profits purposes , mostly young investors, even big investor has thus experienced great
                                challenges facing investments. (Reasons) Most investors go into business they are ignorant of.
                                The Executive ride welcomes you with MASSIVE SOLUTIONS in her wings forthe investors in our system.
                            </div>
                            <a href="#" className="nile-bottom sm">Read More</a>

                        </div>
                        <div className="col-lg-6">
                            <img src="assets/img/about-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--============= //About Us =============--> */}

            <SubInfo />

            {/* <div className="nile-about-section">
                <div className="container">
                    <div className="section-title margin-bottom-40px">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="icon text-main-color"><i className="fa fa-truck"></i></div>
                                <div className="h2">Our Service</div>
                                <div className="des">In quis luctus dolor. Sed ac libero arcu. Phasellus vulputate ultrices augue, eget feugiat lectus efficitur in. Nulla non pharetra justo. Nunc viverra consectetur bibendum. </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="service-icon-box">
                                <div className="icon"><img src="assets/icons/service-dark-1.png" alt="" /></div>
                                <a href="#" className="title h2">Cargo Transportation</a>
                                <div className="des">Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.</div>
                            </div>
                            <div className="service-icon-box">
                                <div className="icon"><img src="assets/icons/service-dark-2.png" alt="" /></div>
                                <a href="#" className="title h2">Air Freight</a>
                                <div className="des">Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center sm-mb-45px">
                                <img src="assets/img/about-2.jpg" alt="" className="border-radius-500" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-icon-box">
                                <div className="icon"><img src="assets/icons/service-dark-3.png" alt="" /></div>
                                <a href="#" className="title h2">Ocean Freight</a>
                                <div className="des">Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.</div>
                            </div>
                            <div className="service-icon-box">
                                <div className="icon"><img src="assets/icons/service-dark-4.png" alt="" /></div>
                                <a href="#" className="title h2">Packaging & Storage</a>
                                <div className="des">Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center margin-top-35px">
                        <a href="#" className="nile-bottom md">Show all <i className="fa fa-arrow-right"></i> </a>
                    </div>

                </div>
            </div> */}

            <Footer />

            <Helmet>
                <script src="assets/js/YouTubePopUp.jquery.js"></script>
                <script src="assets/js/owl.carousel.min.js"></script>
                <script src="assets/js/imagesloaded.min.js"></script>
                <script src="assets/js/custom.js"></script>
                <script src="assets/js/popper.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>
            </Helmet>

        </>
    )
}

export default aboutUs

