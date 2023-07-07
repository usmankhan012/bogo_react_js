import React from 'react'

function AboutUs() {
    return (
        <>
            <div className="about_banner_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 about-left-box">
                            <div className="about_left_section overflow-hidden">
                            {/* <h2>fdjhj</h2> */}
                                <p >
                                    The BOGO App is an online marketplace that helps business owners
                                    boost foot traffic through our Dynamic Campaign Management system of
                                    Buy One Get One offers, while helping consumers save money across
                                    every facet of their lifestyle.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_right_section">
                                <div className="about_right_inner_section">
                                {/* <h1>nfdjdn</h1> */}
                                    <img src="/images/Iphone.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="merchant_main_section about_merchant_sectiton">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5>
                                We are proud to be based in Dubai Internet City, as a member of the
                                <img
                                    src="/images/in5-logo-small 1.png"
                                    alt=""
                                    srcset=""
                                    className="img-fluid"
                                />
                                Incubator.
                            </h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-5">
                            <div className="merchant_inner_section">
                                <img
                                    src="/images/Onboarding.png"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                            <div className="about_inner_section">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="about_outer_section" >
                                            <h4>For merchants</h4>
                                            <p>
                                                Increase foot traffic and sustainably grow your profitability
                                                with The BOGO App’s Dynamic Campaign Management system
                                            </p>
                                            <a href="/website/pages/business"
                                            >BOGO For Business
                                                <img
                                                    src="/website/images/arrow_forward_24px.png"
                                                    alt=""
                                                    className="img-fluid pl-2"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about_outer_section" >
                                            <h4>For Influencers</h4>
                                            <p>
                                                Create engaging and high-quality content for BOGO Merchants,
                                                to help them increase their online following and reach new
                                                audience
                                            </p>
                                            <a href="/website/pages/brand_ambassadors"
                                            >BOGO Brand Ambassadors
                                                <img
                                                    src="/website/images/arrow_forward_24px.png"
                                                    alt=""
                                                    className="img-fluid pl-2"
                                                />
                                            </a>
                                        </div>
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

export default AboutUs
