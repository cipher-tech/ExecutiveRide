// import Link from "next/link"
import Head from 'next/head'
import { Helmet } from "react-helmet"
import { Footer, SubInfo } from '../components'
const Home1 = () => {
    return (
        <>
            <Head>
                <title>THE EXECUTIVE RIDE INVESTO’LTD. </title>
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
                {/* <!-- fontawesome  --> */}
                <link rel="stylesheet" href="assets/fonts/font-awesome/css/font-awesome.min.css" />
                {/* <!-- REVOLUTION STYLE SHEETS --> */}
                <link rel="stylesheet" type="text/css" href="assets/rslider/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css" />
                <link rel="stylesheet" type="text/css" href="assets/rslider/fonts/font-awesome/css/font-awesome.css" />
                <link rel="stylesheet" type="text/css" href="assets/rslider/css/settings.css" />
                {/* <!-- jquery library  --> */}
                <script src="assets/js/nile-slider.js"></script>
                <script src="assets/js/jquery-3.2.1.min.js"></script>
                {/* <!-- REVOLUTION JS FILES --> */}
                <script src="assets/rslider/js/jquery.themepunch.tools.min.js"></script>
                <script src="assets/rslider/js/jquery.themepunch.revolution.min.js"></script>
                <script src="assets/js/owl.carousel.min.js"></script>
            </Head>

            <header>
                <div id="fixed-header-dark" className="header-output fixed-header">
                    <div className="header-output">
                        <div className="container header-in">

                            {/* <!-- Up Head --> */}
                            <div className="up-head d-none d-lg-block">
                                <div className="row justify-content-center">
                                    <div className="col-xl-9 col-lg-12">
                                        <div className="row">
                                            <div className="col-md-4"><i className="fa fa-phone margin-right-10px"></i> 00222 123 333 019</div>
                                            <div className="col-md-4"><i className="fa fa-envelope-o margin-right-10px"></i> theexecutiveride@gmail.com</div>
                                            <div className="col-md-4"><i className="fa fa-map-marker margin-right-10px"></i> 1103 Ikeja, Lagos</div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 d-none d-xl-block">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                {/* <!-- lang dropdown --> */}
                                                <div className="dropdown show">
                                                    <a className="dropdown-toggle text-white text-uppercase" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span className="flag-icon flag-icon-us margin-right-8px"></span> English
                                                    </a>

                                                    <div className="dropdown-menu text-small text-uppercase" aria-labelledby="dropdownMenuLink">
                                                        <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-es margin-right-8px"></span> Spanish</a>
                                                        <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-mr margin-right-8px"></span> Arabic</a>
                                                        <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-fr margin-right-8px"></span> French</a>
                                                        <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-de margin-right-8px"></span> German</a>
                                                    </div>
                                                </div>
                                                {/* <!-- // lang dropdown --> */}

                                            </div>

                                            {/* <div className="col-lg-6"> */}
                                                {/* <!--  Social --> */}
                                                {/* <ul className="social-media list-inline text-right margin-0px text-white">
                                                    <li className="list-inline-item"><a className="facebook" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a className="youtube" href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a className="linkedin" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a className="google" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a className="twitter" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a className="rss" href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                                                </ul> */}
                                                {/* <!-- // Social --> */}
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- // Up Head --> */}

                            <div className="position-relative">
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <a id="logo" href="home-1.html" className="d-inline-block margin-tb-15px"><img src="assets/img/logo-1.png" alt="" /></a>
                                        <a className="mobile-toggle padding-15px background-second-color border-radius-3" href="#"><i className="fa fa-bars"></i></a>
                                    </div>
                                    <div className="col-lg-7 col-md-12 position-inherit">
                                        <ul id="menu-main" className="nav-menu float-xl-right text-lg-center link-padding-tb-25px white-link dropdown-dark">
                                            <li className="!has-dropdown"><a href="#">Home</a>
                                            </li>
                                            <li className="!ahas-dropdown">
                                                {/* <Link > */}
                                                <a href="/aboutUs">About</a>
                                            </li>
                                            <li className="!ahas-dropdown">
                                                {/* <Link > */}
                                                <a href="/contactUs">Contact Us</a>
                                            </li>
                                            <li className="!has-dropdown"><a href="/services">Services</a>
                                               
                                            </li>
                                        </ul>



                                        

                                    </div>
                                    <div className="col-lg-2 col-md-12  d-none d-lg-block">
                                        <a data-toggle="modal" data-target=".bd-example-modal-lg" href="#" className="btn btn-sm border-radius-30 margin-tb-20px text-white  background-main-color  box-shadow float-right padding-lr-20px margin-left-30px d-block">
                                            <i className="fa fa-user margin-right-10px"></i>  Sign up
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- // Header  --> */}



            {/* <!-- Search  --> */}
            <div id="search">
                <button type="button" className="close">×</button>
                <form className="clearfix d-block">
                    <input type="search" defaultValue="" placeholder="Search for . . . ." />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
            {/* <!-- // Search  --> */}


            {/* <!-- Get A Quote  --> */}
            <div className="modal contact-modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content margin-top-150px background-main-color">
                        <div className="row no-gutters">
                            <div className="col-lg-5">
                                <img src="assets/img/contact-img.jpg" alt="" />
                            </div>
                            <div className="col-lg-7">
                                <div className="padding-30px">
                                    <h3 className="padding-bottom-15px">Sign Up</h3>
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Full Name</label>
                                                <input type="text" className="form-control" id="inputName4" placeholder="Name" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Email</label>
                                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                        </div>
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                                        </div>
                                        <a href="#" className="btn-sm btn-lg btn-block background-dark text-white text-center  text-uppercase rounded-0 padding-15px">SEND MESSAGE</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- // Get A Quote  --> */}

            <div id="rev_slider_3_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="nile-logistics-1" data-source="gallery" style={{ margin: "0px auto", background: "transparent", padding: "0px", marginTop: "0px", marginBottom: "0px" }}>
                {/* <!-- START REVOLUTION SLIDER 5.4.8 fullwidth mode --> */}
                <div id="rev_slider_3_1" className="rev_slider fullwidthabanner" style={{ display: "none" }} data-version="5.4.8">
                    <ul>
                        {/* <!-- SLIDE  --> */}
                        <li data-index="rs-3" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4=""
                            data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                            {/* <!-- MAIN IMAGE --> */}
                            <img src="assets/rslider/assets/5ec5e-slider-1.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                            {/* <!-- LAYERS --> */}

                            {/* <!-- LAYER NR. 1 --> */}
                            <div className="tp-caption   tp-resizeme" id="slide-3-layer-1" data-x="['left','left','left','center']" data-hoffset="['0','41','45','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-111','-143','-186','-36']" data-width="461" data-height="173" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":10,"speed":1140,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, minWidth: "461px", maxWidth: "461px", whiteSpace: "nowrap", fontSize: "50px", lineHeight: "59px", fontWeight: 400, color: "#ffffff", letterSpacing: "-4px", fontFamily: "Poppins" }}>
                                Making <br /> Investment
                        <br /> Fast & Safe </div>

                            {/* <!-- LAYER NR. 2 --> */}
                            <div className="tp-caption rev-btn " id="slide-3-layer-2" data-x="['left','left','left','center']" data-hoffset="['0','41','45','0']" data-y="['top','top','top','top']" data-voffset="['453','372','435','471']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":640,"speed":1120,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:transparent;bc:rgb(255,255,255);"}]' data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[12,12,12,12]"
                                data-paddingright="[35,35,35,35]" data-paddingbottom="[12,12,12,12]" data-paddingleft="[35,35,35,35]" style={{ zIndex: 6, whiteSpace: "nowrap", fontSize: "14px", lineHeight: "17px", fontWeight: 500, color: "rgba(255,255,255,1)", letterSpacing: "0px", fontFamily: "Poppins", backgroundColor: "rgb(229,57,53)", borderColor: "rgb(229,57,53)", borderStyle: "solid", borderWidth: "2px 2px 2px 2px", borderRadius: "30px 30px 30px 30px", outline: "none", boxShadow: "none", boxSizing: "border-box", "MozBoxSizing": "border-box", WebkitBoxSizing: "border-box", cursor: "pointer" }}>Contact Us </div>
                        </li>
                        {/* <!-- SLIDE  --> */}
                        <li data-index="rs-4" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1=""
                            data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                            {/* <!-- MAIN IMAGE --> */}
                            <img src="assets/rslider/assets/c92f5-slider-2.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                            {/* <!-- LAYERS --> */}

                            {/* <!-- LAYER NR. 3 --> */}
                            <div className="tp-caption   tp-resizeme" id="slide-4-layer-1" data-x="['left','left','left','center']" data-hoffset="['0','41','45','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-111','-143','-186','-36']" data-width="461" data-height="173" data-whitespace="nowrap" data-type="text"
                                data-responsive_offset="on" data-frames='[{"delay":10,"speed":1140,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-textAlign="['inherit','inherit','inherit','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                                style={{ zIndex: 5, minWidth: "461px", maxWidth: "461px", whiteSpace: "nowrap", fontSize: "50px", lineHeight: "59px", fontWeight: 400, color: "#ffffff", letterSpacing: "-4px", fontFamily: "Poppins" }}>
                                Making<br /> Transportation
                        <br /> Fast & Savw </div>

                            {/* <!-- LAYER NR. 4 --> */}
                            <div className="tp-caption rev-btn " id="slide-4-layer-2" data-x="['left','left','left','center']" data-hoffset="['0','41','45','0']" data-y="['top','top','top','top']" data-voffset="['453','372','435','471']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":640,"speed":1120,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:transparent;bc:rgb(255,255,255);"}]' data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[12,12,12,12]" data-paddingright="[35,35,35,35]" data-paddingbottom="[12,12,12,12]" data-paddingleft="[35,35,35,35]" style={{ zIndex: 6, whiteSpace: "nowrap", fontSize: "14px", lineHeight: "17px", fontWeight: 500, color: "rgba(255,255,255,1)", letterSpacing: "0px", fontFamily: "Poppins", backgroundColor: "rgb(229,57,53)", borderColor: "rgb(229,57,53)", borderStyle: "solid", borderWidth: "2px 2px 2px 2px", borderRadius: "30px 30px 30px 30px", outline: "none", boxShadow: "none", boxSizing: "border-box", "MozBoxSizing": "border-box", "WebkitBoxSizing": "border-box", cursor: "pointer" }}>Contact Us </div>
                        </li>
                    </ul>
                    <div className="tp-bannertimer tp-bottom" style={{ visibility: "hidden" }}></div>
                </div>
            </div>
            {/* <!-- END REVOLUTION SLIDER --> */}

            <div className="service-section-1 container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="service layout-1">
                            <div className="clearfix">
                                <div className="icon"><img src="assets/icons/service-light-1.png" alt="" /></div>
                                <a href="#" className="title">Hire Purchase Investment</a>
                            </div>
                            <div className="dis clearfix">
                                High defined investment program forthe area of transportation system.
                    </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service layout-1">
                            <div className="clearfix">
                                <div className="icon"><img src="assets/icons/service-light-2.png" alt="" /></div>
                                <a href="#" className="title">Capital Growth Investment </a>
                            </div>
                            <div className="dis clearfix">
                                Perfect platform for all investors all over the world
                    </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service layout-1">
                            <div className="clearfix">
                                <div className="icon"><img src="assets/icons/service-light-3.png" alt="" /></div>
                                <a href="#" className="title">Real Estate Investment Plan</a>
                            </div>
                            <div className="dis clearfix">
                                Chances are unless you are very lucky you will.
                    </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--============= About Us =============--> */}
            <div className="nile-about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="section-title-right text-main-color clearfix">
                                <div className="icon"><img src="assets/icons/title-icon-1.png" alt="" /></div>
                                <h2 className="title-text">Who We Are ?</h2>
                            </div>
                            <div className="about-text margin-tb-25px">
                                The Executive Ride Investo’ the great Empire for Wealth, Assets and Investment management. The specialty in
                                building of competent and influential investors all overthe world. Being fully equipped with unlimited capacities ,
                                great modern skills , highly organized in the mode of operations with enough professional bodies(Man Power).
                            </div>
                            <a href="#" className="nile-bottom sm">Read More</a>


                            <div id="accordion" className="nile-accordion margin-top-80px sm-mb-45px">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-block btn-link active" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="fa fa-info-circle"></i> Why us ?</button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            1.Makes your money work for you, saving you of the stress and time. <br />
                                            2.Provision of law enforcers over your investment. <br />
                                            3.100% Risk free[ALL RISKS ON THE COMPANY]
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="card">
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
                                </div> */}
                            </div>



                        </div>
                        <div className="col-lg-6">

                            <div className="row">
                                <div className="col-sm-6">
                                    <a href="#"><img src="assets/img/cart-2.jpg" alt="" /></a>
                                </div>
                                <div className="col-sm-6">
                                    <div className="cart-service background-main-color">
                                        <div className="icon"><img src="assets/icons/service-light-1.png" alt="" /></div>
                                        <h2>Hire Purchase Investment</h2>
                                        <hr />
                                        <div className="text">
                                            Provision and installation of intelligent devices in
                                            any of your choosen vehicles, for maximum securityover your investment.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="cart-service background-main-color">
                                        <div className="icon"><img src="assets/icons/service-light-2.png" alt="" /></div>
                                        <h2>Capital Growth Investment</h2>
                                        <hr />
                                        <div className="text">
                                            Compulsory [ROI] as choosen by the
                                            investor either weekly or monthly on the asign date for the investor.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#"><img src="assets/img/cart-1.jpg" alt="" /></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!--============= //About Us =============--> */}

            <SubInfo />

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


                        {/* <div className="col-lg-3 col-md-6">
                            <div className="service-icon-box">
                                <div className="icon"><img src="assets/icons/service-dark-4.png" alt="" /></div>
                                <a href="#" className="title h2">Packaging & Storage</a>
                                <div className="des">Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.</div>
                            </div>
                        </div> */}
                    </div>


                    <div className="text-center">
                        <a href="#" className="nile-bottom md">Show all <i className="fa fa-arrow-right"></i> </a>
                    </div>

                </div>
            </div>


            <div className="section padding-tb-100px section-ba-2">
                <div className="container">
                    {/* <!-- Title --> */}
                    <div className="section-title margin-bottom-40px">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="icon text-main-color"><i className="fa fa-money"></i></div>
                                <div className="h2">Hire Purchase Investment Plan</div>
                                <div className="des">
                                    Here includes the ctegories in the Hire Purchase Investment.

                                    The executive ride investo’ LTD price rate for each given vehicles includes the following logistics;
                                    -The clearance fee.
                                    - Registration fee.
                                    - AI device[ security] fee.
                                    - Management.
                                    Paymentfor any ofthe vehicles categories covers the above the fees.

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- // End Title --> */}

                    <div className="section-title margin-bottom-40px">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="icon text-main-color"><i className="fa fa-money"></i></div>
                                <div className="h2">THE LUXURY CATEGORY</div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {/* <!-- item --> */}
                        <div className="col-lg-3 col-md-6">
                            <div className="price-table">
                                <div className="title main-color"> First category</div>
                                <div className="price"><span>₦</span>5,000,000</div>
                                <div className="per-mile">Investment</div>
                                <ul className="elements">
                                    <li> Total Earning</li>
                                    <li>8,000,000 </li>
                                    <li>MONTHLY INSTALLMENT:</li>
                                    <li>₦ 500,000 </li>
                                    <li>Duration</li>
                                    <li>16 months</li>
                                </ul>
                                <div className="padding-25px">
                                    <a href="#" className="nile-bottom sm-block">Invest Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="price-table active">
                                <div className="title main-color"> Second category</div>
                                <div className="price"><span>₦</span>10,000,000</div>
                                <div className="per-mile">Investment</div>
                                <ul className="elements">
                                    <li> Total Earning</li>
                                    <li>15,000,000 </li>
                                    <li>MONTHLY INSTALLMENT:</li>
                                    <li>₦ 1,000,000 </li>
                                    <li>Duration</li>
                                    <li>16 months</li>
                                </ul>
                                <div className="padding-25px">
                                    <a href="#" className="nile-bottom sm-block">Invest Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="price-table">
                                <div className="title main-color"> Third category(Presidency)</div>
                                <div className="price"><span>₦</span>20,000,000</div>
                                <div className="per-mile">Investment</div>
                                <ul className="elements">
                                    <li> Total Earning</li>
                                    <li>36,800,000 </li>
                                    <li>MONTHLY INSTALLMENT:</li>
                                    <li>₦ 2,300,000 </li>
                                    <li>Duration</li>
                                    <li>16 months</li>
                                </ul>
                                <div className="padding-25px">
                                    <a href="#" className="nile-bottom sm-block">Invest Now</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- // end item --> */}

                    </div>

                    <div className="section-title margin-bottom-40px">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="icon text-main-color"><i className="fa fa-money"></i></div>
                                <div className="h2">BUSES CATEGORIES</div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {/* <!-- item --> */}
                        <div className="col-lg-3 col-md-6">
                            <div className="price-table">
                                <div className="title main-color"> First category</div>
                                <div className="price"><span>₦</span>1,000,000</div>
                                <div className="per-mile">Investment</div>
                                <ul className="elements">
                                    <li> Total Earning</li>
                                    <li>1,600,000 </li>
                                    {/* <li>MONTHLY INSTALLMENT:</li> */}
                                    {/* <li>₦ 500,000 </li>
                                    <li>Duration</li>
                                    <li>16 months</li> */}
                                </ul>
                                <div className="padding-25px">
                                    <a href="#" className="nile-bottom sm-block">Invest Now</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- // end item --> */}

                    </div>

                    <div className="section-title margin-bottom-40px">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="icon text-main-color"><i className="fa fa-money"></i></div>
                                <div className="h2">TRICYLES CATEGORIES</div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {/* <!-- item --> */}
                        <div className="col-lg-3 col-md-6">
                            <div className="price-table">
                                <div className="title main-color"> First category</div>
                                <div className="price"><span>₦</span>800,000</div>
                                <div className="per-mile">Investment</div>
                                <ul className="elements">
                                    <li> Total Earning</li>
                                    <li>1,600,000 </li>
                                    {/* <li>MONTHLY INSTALLMENT:</li> */}
                                    {/* <li>₦ 500,000 </li>
                                    <li>Duration</li>
                                    <li>16 months</li> */}
                                </ul>
                                <div className="padding-25px">
                                    <a href="#" className="nile-bottom sm-block">Invest Now</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- // end item --> */}

                    </div>

                </div>
            </div>
            <Footer/>
            <Helmet>
                {/* <!-- SLIDER REVOLUTION 5.0 EXTENSIONS --> */}
                <script src="assets/rslider/js/extensions/revolution.extension.actions.min.js"></script>
                <script src="assets/rslider/js/extensions/revolution.extension.carousel.min.js"></script>
                <script src="assets/rslider/js/extensions/revolution.extension.kenburn.min.js"></script>
                <script src="assets/rslider/js/extensions/revolution.extension.layeranimation.min.js"></script>
                <script src="assets/rslider/js/extensions/revolution.extension.migration.min.js"></script>
                <script src="assets/rslider/js/extensions/revolution.extension.navigation.min.js"></script>
                <script src="assets/rslider/js/extensions/revolution.extension.parallax.min.js"></script>
                <script src="assets/rslider/js/extensions/revolution.extension.slideanims.min.js"></script>
                <script src="assets/rslider/js/extensions/revolution.extension.video.min.js"></script>
                <script src="assets/js/YouTubePopUp.jquery.js"></script>
                <script src="assets/js/imagesloaded.min.js"></script>
                <script src="assets/js/custom.js"></script>
                <script src="assets/js/popper.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>
            </Helmet>

        </>
    )
}

export default Home1

