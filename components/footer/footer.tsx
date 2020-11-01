import React from 'react'

export const Footer: React.FC = () => {
    return (
        <footer className="layout-dark">
            <div className="container padding-tb-100px">
                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="about-us sm-mb-45px">
                            <div className="logo-footer margin-bottom-35px">
                                <a href="#"><img src="assets/img/logo-1.png" alt="" /></a>
                            </div>
                            <div className="text margin-bottom-35px">
                                The Executive Ride Investo’ the great Empire for Wealth, Assets and Investment management. The specialty in
                                building of competent and influential investors all overthe world.
                                </div>
                            <a href="#" className="nile-bottom sm">Read More</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="nile-widget widget_nav_menu sm-mb-45px">
                            <h2 className="title">Our Services</h2>
                            <ul className="footer-menu">
                                <li><a href="#">Hire purchase investmentplan</a></li>
                                <li><a href="#">Capital growth investment </a></li>
                                <li><a href="#">Real estate, housing investment plan </a></li>
                                <li><a href="#">Luxury categories </a></li>
                                <li><a href="#">Buses categories</a></li>
                                <li><a href="#">Tricyles categories</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-6">
                        <div className="nile-widget widget_nav_menu sm-mb-45px">
                            <h2 className="title">Site Pages</h2>
                            <ul className="footer-menu">
                                <li><a href="#">Home </a></li>
                                <li><a href="#">About Us </a></li>
                                <li><a href="#">Services </a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Polices </a></li>
                                <li><a href="#">Contact Us </a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-6">
                        <div className="nile-widget">
                            <div className="margin-bottom-60px">
                                <h2 className="title">Location</h2>
                                <div className="contact-info opacity-9">
                                    <div className="icon margin-top-5px"><span className="icon_pin_alt"></span></div>
                                    <div className="text">
                                        <span className="title-in">Location :</span> <br />
                                        <span className="font-weight-500 text-uppercase">Ikeja Lagos</span>
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
            </div>
            <div className="copy-right">
                <div className="container padding-tb-50px">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="copy-right-text text-lg-left text-center sm-mb-15px"><a target="_blank" href="https://www.templateshub.net">The Executive Ride Investo’</a> </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <!--  Social --> */}
                            <ul className="social-media list-inline text-lg-right text-center margin-0px text-white">
                                <li className="list-inline-item"><a className="facebook" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li className="list-inline-item"><a className="youtube" href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                <li className="list-inline-item"><a className="linkedin" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li className="list-inline-item"><a className="google" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li className="list-inline-item"><a className="twitter" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li className="list-inline-item"><a className="rss" href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                            </ul>
                            {/* <!-- // Social --> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

// export const Footer
