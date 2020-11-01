// import Link from "next/link"
import Head from 'next/head'
import React from 'react'
import { Footer, GenNavbar } from '../components'

const ContactUs: React.FC = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta name="author" content="Nile-Theme" />
                <meta name="robots" content="index follow" />
                <meta name="googlebot" content="index follow" />
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
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
                            <h1>Contact Us</h1>
                            <ol className="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li className="active">Contact Us</li>
                            </ol>
                        </div>
                    </div>
                </div>


                <div className="padding-tb-100px">

                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 sm-mb-45px">
                                <p> 
                                    Leave us a message, we'll be happy to reply promtly
                                </p>
                                <h5>Phone :</h5>
                                <span className="d-block"><i className="fa fa-phone text-main-color margin-right-10px" aria-hidden="true"></i> +222 333 019</span>
                                <span className="d-block sm-mb-30px"><i className="fa fa-mobile text-main-color margin-right-10px" aria-hidden="true"></i> +222 333 019</span>
                                <h5 className="margin-top-20px">Address :</h5>
                                <span className="d-block sm-mb-30px"><i className="fa fa-map text-main-color margin-right-10px" aria-hidden="true"></i> Ikeja Lagos </span>
                                <h5 className="margin-top-20px">Email :</h5>
                                <span className="d-block sm-mb-30px"><i className="fa fa-envelope-open text-main-color margin-right-10px" aria-hidden="true"></i> theexecutiveride@gmail.com </span>
                            </div>

                            <div className="col-lg-6">
                                <div className="contact-modal">
                                    <div className="background-main-color">
                                        <div className="padding-30px">
                                            <h3 className="padding-bottom-15px">Message</h3>
                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label>Full Name</label>
                                                        <input type="text" className="form-control" id="inputName44" placeholder="Name" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label>Email</label>
                                                        <input type="email" className="form-control" id="inputEmail44" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Message</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea11" rows={3}></textarea>
                                                </div>
                                                <a href="#" className="btn-sm btn-lg btn-block background-dark text-white text-center  text-uppercase rounded-0 padding-15px">SEND MESSAGE</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
                <script src="assets/js/YouTubePopUp.jquery.js"></script>
                <script src="assets/js/owl.carousel.min.js"></script>
                <script src="assets/js/imagesloaded.min.js"></script>
                <script src="assets/js/custom.js"></script>
                <script src="assets/js/popper.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>

            </body>

        </>
    )
}

export default ContactUs