import React from 'react'

function Review3() {
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
</head>

<body> */}
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
            {/* <!-- *******Main section ************** --> */}
            <div className="hero-main-section">
                <div className="container">
                    <div className="top-heading">
                        <h2>Campaigns</h2>
                    </div>
                </div>
            </div>
            <div className="overview-main-section">
                <div className="container">
                    <div className="overview-inner-section overview-title">
                        <h6>Overview</h6>
                    </div>
                    <div className="row overview-section">
                        <div className="col-md-6">
                            <div className="overview-left-section">
                                <h5>6</h5>
                                <p>Total  Campaigns</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="overview-right-section">
                                <h5>45</h5>
                                <p>Vouchers Redeemed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--  --> */}
            <div className="review3-main-section">
                <div className="container">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Completed</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Draft</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="middle-info-section">
                <div className="container">
                    <div className="row info-main-section">
                        <div className="col-md-6">
                            <div className="middle-info-left-section">
                                <button type="button" className="btn btn-primary me-3 text-white review3-button" style={{backgroundColor:"#1478a9;"}}>
                                    Buy 1 Get 1
                                </button>
                                <h3>Buy 1: Sushi Platter</h3>
                                <h3>Get 1: Sushi Platter</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="middle-info-right-section">
                                <a href="">Manage</a>
                                <h6>Launched: Apr 23, 2021</h6>
                                <h4> <span>S M T W T</span> F S</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
            {/* <!-- <script src="js/testimonial.js"></script> --> */}

        </>
    )
}

export default Review3
