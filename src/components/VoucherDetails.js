import React from 'react'

function VoucherDetails() {
    return (
        <>


            <div>
                <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#88c641"}}>
                    <div className="container">
                        <a className="navbar-brand text-white" href="index.html"><img src="/images/Bogo-White 2.png" alt="" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse merchant-nav-links" id="navbarSupportedContent">
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
                                    <li className="nav-item">
                                        <a className="nav-link" href="BOGO For Business .html">BOGO for Business</a>
                                    </li>
                                </li>
                                <div className="d-flex align-items-center navbuttons merchant-nav-buttons">
                                    <button type="button" className="btn btn-link px-3 me-2 text-white">
                                        Login
                                    </button>
                                    <button type="button" className="btn btn-primary me-3 text-white" style={{backgroundColor: "#1478a9"}}>
                                        Register
                                    </button>
                                </div>




                            </ul>
                        </div>
                    </div>
                </nav>




                <div className="Voucher_banner_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="voucher_inner_section">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="voucher_one_section">
                                                <img src="/images/images group.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="voucher_two_section">
                                                <h4>BUY</h4>
                                                <p>Sushi Platter</p>
                                                <h4>GET</h4>
                                                <p>Sushi Platter</p>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="voucher_three_section">
                                                <h4>VALIDITY</h4>
                                                <p>S M T W T F S</p>
                                                <h4>Est. Savings</h4>
                                                <p>AED 250</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn voucher_button">Voucher Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="create_campaign_section">
                    <div className="container">
                        <div className="row">
                            <div className="create_hedding_section">
                                <h3>CREATE NEW CAMPAIGN</h3>
                                <p>CHOOSE OFFER TYPE</p>
                            </div>
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                        <div className="create_inner_section">
                                            <p>BUY ONE <br />GET ONE</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                        <div className="create_inner_section">
                                            <p>BUY X <br /> GET Y</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                        <div className="create_inner_section">
                                            <p>BUY BUNDLE <br /> GET UNIT</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                            {/* <!-- Tab panes --> */}
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="col-12 create_last_section">
                                        <p>COMPARE OFFER TYPES</p>
                                    </div>
                                    <div className="create_form_section">
                                        <form>
                                            <div className="row">
                                                <div className="col-12">
                                                    <label for="inputname">What’s being offered ?</label>
                                                    <input type="text" className="form-control" placeholder="Example: Sushi Platter" />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputname">Estimated Savings?</label>
                                                    <input type="text" className="form-control" placeholder="AED" />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputname">Select Branch</label>
                                                    <input type="text" className="form-control" placeholder="All branches" />
                                                    <input type="text" className="form-control" placeholder="Dubai Marina" />
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <h6>Day of tha week</h6>
                                                <ul>
                                                    <li>
                                                        <p>All</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Sun</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Mon</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Tue</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Wed</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Thu</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Fri</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Sat</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="row">
                                        <div className="col-9">
                                            <div className="create_form_last_section">
                                                <p>Exclude weekends</p>
                                                <p>Exclude public holidays</p>
                                                <p>Exclude weekends</p>
                                                <span>Campaign modifications take 24 hours to take effect.</span>
                                                <p className="mt-3">Fine Print</p>
                                            </div>
                                        </div>
                                        <div className="col-3" style={{textAlign: "end;"}}>
                                            <div className="create_form_last_section">
                                                <label className="switch">
                                                    <input type="checkbox" checked />
                                                    <span className="slider round"></span>
                                                </label><br /><label className="switch">
                                                    <input type="checkbox" checked />
                                                    <span className="slider round"></span>
                                                </label><br /><label className="switch">
                                                    <input type="checkbox" checked />
                                                    <span className="slider round"></span>
                                                </label><br />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                                    placeholder="Add any specific exclusions or fine print that applies to this Buy One Get One campaign"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="create_form_last_button">
                                                <button className="btn">Review and Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-2" role="tabpanel">
                                    <div className="create_form_section">
                                        <div className="col-12 create_last_section">
                                            <p>COMPARE OFFER TYPES</p>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-12">
                                                    <label for="inputname">What should they buy?</label>
                                                    <input type="text" className="form-control" placeholder="Example: Sushi Platter" />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputname">What will they get ?</label>
                                                    <input type="text" className="form-control" placeholder="AED" />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputname">Estimated Savings?</label>
                                                    <input type="text" className="form-control" placeholder="AED" />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputname">Select Branch</label>
                                                    <input type="text" className="form-control" placeholder="All branches" />
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <ul>
                                                    <li>
                                                        <p>All</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Sun</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Mon</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Tue</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Wed</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Thu</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Fri</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Sat</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="row">
                                        <div className="col-9">
                                            <div className="create_form_last_section">
                                                <p>Exclude weekends</p>
                                                <p>Exclude public holidays</p>
                                                <p>Exclude weekends</p>
                                                <span>Campaign modifications take 24 hours to take effect.</span>
                                                <p className="mt-3">Fine Print</p>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="create_form_last_section">
                                                <label className="switch">
                                                    <input type="checkbox" checked />
                                                    <span className="slider round"></span>
                                                </label><br /><label className="switch">
                                                    <input type="checkbox" checked />
                                                    <span className="slider round"></span>
                                                </label><br /><label className="switch">
                                                    <input type="checkbox" checked />
                                                    <span className="slider round"></span>
                                                </label><br />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                                    placeholder="Add any specific exclusions or fine print that applies to this Buy One Get One campaign"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="create_form_last_button">
                                                <button className="btn">Review and Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <div className="col-12 create_last_section">
                                        <p>COMPARE OFFER TYPES</p>
                                    </div>
                                    <div className="create_form_section">
                                        <form>
                                            <div className="row">
                                                <div className="col-12">
                                                    <label for="inputname">What should they buy?</label>
                                                    <input type="text" className="form-control" placeholder="Example: Sushi Platter" />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputname">What will they get ?</label>
                                                    <input type="text" className="form-control" placeholder="AED" />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputname">Estimated Savings?</label>
                                                    <input type="text" className="form-control" placeholder="AED" />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputname">Select Branch</label>
                                                    <input type="text" className="form-control" placeholder="All branches" />
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <ul>
                                                    <li>
                                                        <p>All</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Sun</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Mon</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Tue</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Wed</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Thu</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Fri</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                    <li>
                                                        <p>Sat</p><input className="form-check-input position-static" type="checkbox"
                                                            id="blankCheckbox" value="option1" aria-label="..." />
                                                    </li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="row">
                                        <div className="col-9">
                                            <div className="create_form_last_section">
                                                <p>Exclude weekends</p>
                                                <p>Exclude public holidays</p>
                                                <p>Exclude weekends</p>
                                                <span>Campaign modifications take 24 hours to take effect.</span>
                                                <p className="mt-3">Fine Print</p>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="create_form_last_section">
                                                <label className="switch">
                                                    <input type="checkbox" checked />
                                                    <span className="slider round"></span>
                                                </label><br /><label className="switch">
                                                    <input type="checkbox" checked />
                                                    <span className="slider round"></span>
                                                </label><br /><label className="switch">
                                                    <input type="checkbox" checked />
                                                    <span className="slider round"></span>
                                                </label><br />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                                    placeholder="Add any specific exclusions or fine print that applies to this Buy One Get One campaign"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="create_form_last_button">
                                                <button className="btn">Review and Submit</button>
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
                                            <a href="#">Follow Us</a><a href="#"><i className="fa-brands  fa-facebook" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa-brands  fa-linkedin-square" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa-brands  fa-snapchat" aria-hidden="true"></i></a>
                                            <a href="#"><a href="#"><i className="fa-brands fa-tiktok"></i></a></a>
                                        </li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="banner_bottom_section">
                                                <img src="images/Google-Play-Button_resize.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="banner_bottom_section footer-apple_button">
                                                <img src="images/App-Store-Button_resize.png" alt="" />
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
            </div>



        </>
    )
}

export default VoucherDetails
