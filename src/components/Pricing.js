import React from 'react'

function Pricing() {
    return (
        <>

            <div className="main-hero-section">
                <div className="container">
                    <div className="inner-hero-section">
                        <h2 >Our Membership Options</h2>
                    </div>
                </div>
            </div>

            <div className="membership-option-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="membership-text">
                                <h5>
                                    A Basic User Account is always FREE. Download the app and try out
                                    our platform by signing up as a user today!
                                </h5>
                                <span>
                                    Basic Users can redeem one voucher of their choosing, per week, and
                                    are limited to only one voucher per BOGO Merchant. For full access
                                    to all vouchers on the platform, please subscribe to a Premium User
                                    Account or purchase a Premium Voucher Credit (or bundle).
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="membarship-plan-box">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                        <div className="user-payment-methode basic-user">
                                            <div className="plan_img_box">
                                                <img src="/images/Group 3369.png" alt="" />
                                                <h4>Basic User</h4>
                                            </div>
                                            <ul>
                                                <li>FREE forever with limited redemption</li>
                                                <li className="choose-price-voucher-text">
                                                    1 voucher per week, 1 voucher per merchant
                                                </li>
                                            </ul>
                                            <a href="" className="second-link">Choose this plan</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                        <div className="user-payment-methode premium-user" >
                                            <div className="plan_img_box">
                                                <img src="/images/Group 3370.png" alt="" />
                                                <h4>Premium User</h4>
                                            </div>
                                            <ul>
                                                <li>25 AED per month, or 250 AED per year</li>
                                                <li className="choose-price-text">
                                                    No limitations, can redeem every voucher contained on the
                                                    platform
                                                </li>
                                            </ul>
                                            <a href="" className="second-link">Choose this plan</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                        <div
                                            className="user-payment-methode pay-per-use"
                                           
                                        >
                                            <div className="plan_img_box">
                                                <img src="/images/Group 3370.png" alt="" />
                                                <h4>Pay-per-use</h4>
                                            </div>
                                            <ul>
                                                <li>10 AED each, or 40 AED for a 5-pack bundle</li>
                                                <li>
                                                    Premium voucher credits can be used for every voucher
                                                    contained on the platform and they never expire
                                                </li>
                                            </ul>
                                            <a href="">Choose this plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid become_main_section">
                <div className="become-row">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="bacome_left_section">
                                <div className="page">
                                    <div className="video" data-video-id="CoL8Gtvxfl0">
                                        <div className="">
                                            <div className="video-placeholder">
                                                <video width="320" height="240" controls>
                                                    <source
                                                        src="/images/Merchants (1).mp4"
                                                        type="video/mp4"
                                                    />
                                                </video>
                                                <img
                                                    src="/images/bussiness-icon/bogo-video.jpg"
                                                    alt=""
                                                    className="img-fluid video-layer"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bacome_right_section">
                                <h2>Become a BOGO Brand Ambassador</h2>
                                <ul>
                                    <li>
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i> Increase your
                                        brand partnerships
                                    </li>
                                    <li>
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i> Monetize your
                                        social media accounts
                                    </li>
                                    <li>
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i> Gain access
                                        to exclusive offers and giveaways
                                    </li>
                                    <li>
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i> Complimentary
                                        BOGO Premium subscription
                                    </li>
                                </ul>
                            </div>
                            <div className="bacome_right_outer_section">
                                <p>
                                    <a href="/website/pages/brand_ambassadors"
                                    >Join Influencer Program
                                        <i className="fa fa-arrow-right pl-2" aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="marchent-fluid-section">
                <div className="merchant_main_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="merchant_inner_section home-merchant-inncer-sec">
                                    <img
                                        src="/images/Onboarding.png"
                                        alt=""
                                        className="img-fluid"
                                    />
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
                                        <a href="/website/pages/business"
                                        >BOGO For Business
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

export default Pricing
