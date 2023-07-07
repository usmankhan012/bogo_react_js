import React from 'react'

function Choose_Your_Plan() {
  return (
    <>
      {/* <html lang="en">
  <head>
    <title>Choose your plan</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/owl.carousel.css" />
    <link rel="stylesheet" href="css/owl.theme.default.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/responsive.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>

  <body> */}
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#88c641"}}>
      <div className="container">
        <a className="navbar-brand text-white" href="index.html" ><img src="images/Bogo-White 2.png" alt=""/></a>
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
              <button type="button" className="btn btn-primary me-3 text-white" style={{backgroundColor:"#1478a9"}}>
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
  
    <div className="choose_main_section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="choose_inner_section">
              <h1>Choose Your Plan</h1>
              <strong>Our Plans</strong>
              <div className="row">
                <div className="col-md-6">
                  <div className="choose_inner_left_section">
                    <img
                      src="/images/diamond 2.png"
                      className="choose_fast_images"
                      alt=""
                    />
                    <h4>Silver User</h4>
                    <p>100 AED per month, or 1,000 AED per year</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="choose_inner_left_section"
                    style={{border: "2px solid #1478a9"}}
                  >
                    <img
                      src="/images/diamond 2 (1).png"
                      className="choose_two_images"
                      alt=""
                    />
                    <h4>Silver User</h4>
                    <p>100 AED per month, or 1,000 AED per year</p>
                  </div>
                </div>
              </div>
              <div className="row lastclassName">
                <form>
                  <div className="form-group">
                    <label for="exampletext">Billing Cycle</label>
                    <select id="inputState" className="form-control">
                      <option selected>Monthly</option>
                      <option>year</option>
                      <option>day</option>
                    </select>
                    <div className="row">
                      <div className="col-6">
                        <p>Next billing cycle</p>
                      </div>
                      <div className="col-6" style={{textAlign: "end;"}}>
                        <p>Monthly from 24/11/2021</p>
                      </div>
                    </div>
                    <label for="exampleFormControlInput1">Card number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="4410 2919 2929 XXXX"
                    />
                    <label for="exampleFormControlInput1"
                      >Jane Aubrey Doe</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="4410 2919 2929 XXXX"
                    />
                    <div className="row">
                      <div className="col">
                        <label for="exampleFormControlInput1"
                          >Expiry date</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="MM / YYYY"
                        />
                      </div>
                      <div className="col">
                        <label for="exampleFormControlInput1">CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="342"
                        />
                      </div>
                    </div>
                    <label for="exampleFormControlInput1">Promo Code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Promotional Code"
                    />
                  </div>
                </form>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="chooose_last_inner_section">
                    <p>To pay now</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="chooose_last_inner_section">
                    <p style={{textAlign:" end", color: "#1478a9"}}>AED 150</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="choose_last_button">
                    <button className="btn">Select</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              <h5>Say hi or ask a question</h5>
              <button
                type="button"
                className="btn btn-primary me-3 text-white"
                style={{backgroundColor:" #1478a9"}}
              >
                Sign up for free
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
  {/* </div> */}
    {/* <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/custom.js"></script>
  */}
    </>
  )
}

export default Choose_Your_Plan
