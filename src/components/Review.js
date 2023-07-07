import React from 'react'

function Review() {
    return (
        <>
            {/* <html lang="en">

<head>
  <title>Review Campaign-1</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/owl.carousel.css">
  <link rel="stylesheet" href="css/owl.theme.default.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/responsive.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head> */}

            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#88c641"}}>
                <div className="container">
                    <a className="navbar-brand text-white" href="index.html" ><img src="images/Bogo-White 2.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto w-100 justify-content-end">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">How it Works </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="bogo4.html">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Brand Ambassadors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="BOGO For Business .html">BOGO for Business</a>
                            </li>
                            <div className="d-flex align-items-center nav-buttons new-nav-buttons">
                                <button type="button" className="btn btn-primary me-3 text-white" style={{backgroundColor:"#1478a9;"}}>
                                    Create new campaign
                                </button>
                                <button type="button" className="btn btn-link px-3 me-2 text-white">
                                    Logout
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <!-- **********Review campaign hero section******** --> */}
            <div className="review-heading-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="review-left-heading">
                                <div className="review-links">
                                    <a href="">Campaigns /</a>
                                    <a href=""> Create New /</a>
                                    <a href=""> Review</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="review-main-heading">
                                <h1>Review your campaign</h1>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="review-right-heading">
                                <img src="/images/play-button.png" alt="" />
                                <a href="">Watch tutorial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--*******Campaign main info section******* --> */}
            <div className="campaign-main-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="campaign-heading-section">
                                <h5>This is how your campaign will appear to customers</h5>
                            </div>
                            <div className="campaign-box">
                                <div className="campaign-shadow-box">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="campaign-logo">
                                                <img src="/images/Group1+.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="campaign-left-info">
                                                <h3>BUY</h3>
                                                <p>Sushi Platter</p>
                                                <h3>GET</h3>
                                                <p>Sushi Platter</p>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="campaign-right-info">
                                                <h3>VALIDITY</h3>
                                                <p>S M T W T F S</p>
                                                <h3>Est. Savings</h3>
                                                <p>AED 250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="voucher-code">
                                                <h4>VOUCHER CODE</h4>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="merchant-pin">
                                                <h4>MERCHANT PIN</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="validity">
                                                <h5>VALIDITY</h5>
                                                <ul>
                                                    <li><span>S  </span>    11:00 - 23:00</li>
                                                    <li><span>M  </span>    11:00 - 23:00</li>
                                                    <li><span>T  </span>    11:00 - 23:00</li>
                                                    <li><span>W  </span>    11:00 - 23:00</li>
                                                    <li><span>T  </span>    11:00 - 23:00</li>
                                                    <li>F     Not available</li>
                                                    <li>S     Not available</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="fine-print">
                                                <h5>FINE PRINT</h5>
                                                <p>This Buy 1 Get 1 Voucher excludes all Family-sized Platters.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="compaign-last">
                                    <p>By creating  a campaign , you  agree to BOGO’S
                                        Terms and Condition and Privacy Policy </p>
                                    <button type="button" className="btn btn-primary me-3 text-white compaign-button1 " style={{backgroundColor:"#1478a9;"}}>
                                        Publish Campaign
                                    </button>
                                    <button type="button" className="btn btn-link  compaign-button2">
                                        Save Draft
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}


            {/* <!-- *******Footer section************* --> */}

            <div className="footer_main_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer_inner_section">
                                <h4>The Company</h4>
                                <ul>
                                    <li><a href="../about.html">About Us</a></li>
                                    <li><a href="#">How it Works</a></li>
                                    <li><a href="../bogo4.html">Pricing</a></li>
                                    <li><a href="#">Merchant Directory</a></li>
                                    <li><a href="#">Brand Ambassador Program</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer_inner_section">
                                <h4>The App</h4>
                                <ul>
                                    <li><a href="#">Customers</a></li>
                                    <li><a href="../BOGO For Business .html">Businesses</a></li>
                                    <li><a href="#">For Influencers</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer_inner_section">
                                <ul>
                                    <li>
                                        <a href="#">Follow Us</a>
                                        <a href="#"
                                        ><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#"
                                        ><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
                                        <a href="#"
                                        ><i className="fa-brands fa-linkedin-square" aria-hidden="true"></i></a>
                                        <a href="#"
                                        ><i className="fa-brands fa-snapchat" aria-hidden="true"></i></a>
                                        <a href="#">
                                            <a href="#"><i className="fa-brands fa-tiktok"></i></a></a>
                                    </li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="banner_bottom_section">
                                            <img src="/images/Google-Play-Button_resize.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="banner_bottom_section footer-apple_button">
                                            <img src="/images/App-Store-Button_resize.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer_inner_section">
                                <h5 className="pb-3">Say hi or ask a question</h5>
                                <button
                                    type="button"
                                    className="btn btn-primary me-3 text-white"
                                    style={{backgroundColor: "#1478a9"}}
                                >
                                    Contact Us <i className="fa fa-arrow-right" aria-hidden="true"></i>

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-logo">
                        <div className="col-6">
                            <p className="footer_bottom">Copyright 2021 - The Bogo App Ltd.</p>
                        </div>
                        <div className="col-6" style={{textAlign: "end"}}>
                            <img src="/images/Bogo-Black 2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
{/* // </div> */}
    {/* <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/slick.min.js"></script>
  <script src="js/custom.js"></script> */}
    {/* <!-- <script src="js/testimonial.js"></script> --> */ }

    </>
  )
}

export default Review
