import React from 'react'
import { Link } from 'react-router-dom'
// import './App.css';

function Footer() {
    return (
        <>
            <div className="footer_main_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-3">
                            <div className="footer_inner_section">
                                <h4>The Company</h4>
                                <ul>
                                    <li><Link to="/aboutUs">About Us</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="/Bogo_directory">Merchant Directory</Link></li>
                                    <li><Link to="/brand_ambassadors">Brand Ambassador Program</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="footer_inner_section">
                                <h4>The App</h4>
                                <ul>
                                    <li className="footer-app-icon">
                                        <Link to="#">Customers</Link>
                                    </li>
                                    <li className="footer-app-icon">
                                        <Link to="/Business">Businesses</Link>
                                    </li>
                                    <li className="footer-app-icon">
                                        <Link to="/brand_ambassadors">For Influencers</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="footer_inner_section">
                                <ul>
                                    <li className="follow-us">
                                        <a href="#">Follow Us</a>
                                        <span>
                                            <a href="#"
                                            ><i className="fa-brands fa-facebook"></i></a>
                                            <a href="#"
                                            ><i className="fa-brands fa-square-instagram"></i></a>
                                            <a href="#"
                                            ><i className="fa-brands fa-linkedin"></i></a>

                                        </span>
                                    </li>
                                    <li><Link to="/TermsConditions">Terms & Conditions</Link></li>
                                    <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>

                                    <li className="footer-playstrore-icon">
                                        <a href="https://play.google.com/store/apps/details?id=com.bogoapp.bogoapp"
                                        ><img src="/images/Google-Play-Button_resize.png" alt=""
                                            /></a>
                                        <a href="https://apps.apple.com/us/app/bogo/id1541500003"
                                        ><img src="/images/App-Store-Button_resize.png" alt=""
                                            /></a>
                                    </li>
                                </ul>
                                {/* <!-- <div className="row">
                                    <div className="playstore-icon">
                                        <a href="https://play.google.com/store/apps/details?id=com.bogoapp.bogoapp"
                                        ><img src="images/Google-Play-Button_resize.png" alt=""
                                            /></a>
                                        <a href="https://apps.apple.com/us/app/bogo/id1541500003"
                                        ><img src="images/App-Store-Button_resize.png" alt=""
                                            /></a>
                                    </div>
                                </div> --> */}
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="footer_inner_section get-in-touch">
                                <h5 className="pb-3">Get in touch</h5>
                                <button
                                    type="button"

                                    className="btn btn-primary me-3 text-white"
                                    style={{backgroundColor: "#1478a9"}}
                                >
                                    <Link to="/Contact">Contact Us </Link><i className="fa fa-arrow-right" aria-hidden="true"></i>

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-row-2">
                        <div className="col-md-6">
                            <p className="footer_bottom">Copyright 2023 - The Bogo App FZ-LLC</p>
                        </div>
                        <div className="col-md-6 footer-logo">
                            <img src="/images/Bogo-Black 2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
