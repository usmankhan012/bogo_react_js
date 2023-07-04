import React from 'react'
// import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function HomePage() {

    return (
        <>
            <div className="banner_main_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="banner_left_section">
                                <h1>SAVE MONEY WITH <span>THE BOGO APP</span></h1>
                                <p>Exclusive Buy One Get One deals that fit every lifestyle!</p>
                            </div>
                            <div className="playstore-icon">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.bogoapp.bogoapp">
                                    <img
                                        src="/images/Google-Play-Button_resize.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                                <a href="https://apps.apple.com/us/app/bogo/id1541500003">
                                    <img
                                        src="/images/App-Store-Button_resize.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="banner_right_section">
                                <img
                                    src="/images/banner_right.png"
                                    alt=""
                                    className="img-fluid"
                                />
                                {/* <!-- <div className="row banner_row">
                                    <div className="col-6">
                                        <div className="banner_bottom_section">
                                            <img src="/website/images/Google-Play-Button_resize.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="banner_bottom_section">
                                            <img src="/website/images/App-Store-Button_resize.png" alt="" />
                                        </div>
                                    </div>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!---------------------------- browse section --------------------------> */}
            <div className="browse_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">

                            <div className="browse_inner_section" data-aos="fade-up">
                                <img
                                    src="/images/Rectangle 223.png"
                                    alt=""
                                    className="img-fluid"
                                />
                                <h1>Download the app</h1>
                                <p>
                                    Discover BOGO merchants offering<br />
                                    deals near you!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            {/*<h2>nj</h2>/*/}
                            <div className="browse_inner_section" data-aos="fade-down">
                                <img
                                    src="/images/Rectangle 224-1.png"
                                    alt=""
                                    className="img-fluid"
                                />
                                <h1>Browse merchants</h1>
                                <p>
                                    Going out to eat? Going to a spa? <br />
                                    Looking for something fun to do?
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="browse_inner_section" data-aos="fade-up">
                                <img
                                    src="/images/Rectangle 224.png"
                                    alt=""
                                    className="img-fluid"
                                />
                                <h1>Redeem & Save</h1>
                                <p>
                                    Present your BOGO voucher<br />
                                    when paying and instantly save!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="browse_bottom_section">
                        <OwlCarousel items={3}
                            className="owl-theme"
                            loop
                            dots={false}
                            autoPlay={true}
                            margin={8} >
                            <div className='item' ><img className="img " src={'/images/image5.png'} />
                                <p>Restaurants</p>
                            </div>
                            <div className='item'><img className="img" src={'/images/image6.png'} />
                                <p>Spas & Salons</p>
                            </div>
                            <div className='item'><img className="img" src={'/images/image7.png'} />
                                <p>Retail</p>
                            </div>

                            <div className='item'><img className="img" src={'/images/image8.png'} />
                                <p>Fitness</p>
                            </div>

                            <div className='item'><img className="img" src={'/images/image9.png'} />
                                <p>Entertainment</p>
                            </div>

                            <div className='item'><img className="img" src={'/images/image10.png'} />
                                <p>Hotels</p>
                            </div>
                            <div className='item'><img className="img" src={'/images/image11.png'} />
                                <p>Services</p>
                            </div>
                        </OwlCarousel>

                    </div>

                </div>
                <div className="merchant_main_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="merchant_inner_section home-merchant-inncer-sec">
                                    <img src="/images/Onboarding.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="merchant_inner_section merchent_right_text">
                                    <h1>Are you a merchant?</h1>
                                    <p>
                                        Increase foot traffic and sustainably grow your profitability with
                                        The BOGO App’s Dynamic Campaign Management system
                                    </p>
                                    <div className="arrow-box">
                                        <a href="/website/pages/business">BOGO For Business
                                            <i className="fa fa-arrow-right pl-2" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage
