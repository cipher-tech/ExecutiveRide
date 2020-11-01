import React from 'react'
import Link from "next/link"
export const GenNavbar: React.FC = () => {
    return (
        <>
            <header className="background-white" >
                {/* <!--  Header  --> */}
                <div className="header-output">
                    <div className="header-output">
                        <div className="header-in">

                            {/* <!-- Up Head --> */}
                            <div className="up-head d-none d-lg-block background-grey-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-8 col-lg-12">
                                            <div className="row">
                                                <div className="col-md-4"><i className="fa fa-phone margin-right-10px"></i> 00222 123 333 019</div>
                                                <div className="col-md-4"><i className="fa fa-envelope-o margin-right-10px"></i> theexecutiveride@gmail.com</div>
                                                <div className="col-md-4"><i className="fa fa-map-marker margin-right-10px"></i> 1103 Ikeja, Lagos</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-none d-xl-block">
                                            <div className="row">
                                                <div className="col-lg-6 justify-content-center">
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
                                                        <li className="list-inline-item"><a className="twitter" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    </ul> */}
                                                    {/* <!-- // Social --> */}
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- // Up Head --> */}
                            <div className="container">
                                <div className="position-relative">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-3 col-md-12">
                                            <a id="logo" href="home-1.html" className="d-inline-block margin-tb-15px"><img src="assets/img/logo-1.png" alt="" /></a>
                                            <a className="mobile-toggle padding-15px background-second-color border-radius-3" href="#"><i className="fa fa-bars"></i></a>
                                        </div>
                                        <div className="col-lg-7 text-center col-md-12 position-inherit">
                                            <ul id="menu-main" className="nav-menu float-xl-center text-lg-center link-padding-tb-25px dropdown-dark">
                                                <li className="!has-dropdown">
                                                    <a href="/">Home</a>
                                                </li>
                                                <li className="!has-dropdown">
                                                    <a href="/aboutUs">About</a>
                                                </li>
                                                <li className="!has-dropdown">
                                                    <a href="/services">Services</a>
                                                </li>
                                                <li className="!has-dropdown">
                                                    <a href="/contactUs">Contact Us</a>
                                                </li>
                                            </ul>

                                        </div>
                                        <div className="col-lg-2 col-md-12  d-none d-lg-block">
                                            <a data-toggle="modal" data-target=".bd-example-modal-lg" href="#" className="btn btn-sm border-radius-30 margin-tb-20px text-white  background-main-color  box-shadow float-right padding-lr-20px margin-left-30px d-block">
                                                <i className="fa fa-user margin-right-10px"></i>  Sign In
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- // Header  --> */}
            </header >

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
                                                <label>First Name</label>
                                                <input type="text" className="form-control" id="inputName4" placeholder="First Name" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control" id="inputName4" placeholder="Last Name" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Phone Number</label>
                                                <input type="text" className="form-control" id="inputName4" placeholder="Phone Number" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Email</label>
                                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="Password" />
                                        </div>
                                        {/* <div className="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                                        </div> */}
                                        <a href="#" className="btn-sm btn-lg btn-block background-dark text-white text-center  text-uppercase rounded-0 padding-15px">SEND MESSAGE</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- // Get A Quote  --> */}
        </>

    )
}
