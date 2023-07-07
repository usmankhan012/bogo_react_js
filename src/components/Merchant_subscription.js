import React from 'react'

function Merchant_subscription() {
    return (
        <>
            {/* <%- include('partials/header1.ejs') %> */}



            {/* <!-- Header Start --> */}

            <div className="merchant-subscription-header">
                <div className="container">
                    <div className="merchant-subscription-heading">
                        <h1>Choose Your Plan</h1>
                    </div>
                </div>
            </div>

            {/* <!-- Header Ends --> */}

            {/* <!-- Choose Plan Section Start --> */}
            <div className="choose-plan-section">

                <div className="container">

                    {/* <!-- plan Type --> */}
                    <div className="plan_type_box">
                        {/* <!-- silver box --> */}
                        <div className="silver_user_box" >
                            <div className="silver-dimand-img-box">
                                <img src="/images/dimand-silver.png" alt="" className="img-fluid" />
                            </div>
                            <h6>Silver User</h6>
                            <span>100 AED per month, or 1,000 AED per year </span>
                        </div>

                        {/* <!-- gold box --> */}
                        <div className="gold_user_box" >
                            <div className="gold-dimand-img-box">
                                <img src="/images/diamond 2 (1).png" alt="" className="img-fluid" />
                            </div>
                            <h6>Gold User</h6>
                            <span>150 AED per month, or 1,500 AED per year </span>
                        </div>
                    </div>

                    <div className="payment-haeding">
                        <h1 data-aos="slide-up">Payment Method</h1>
                    </div>

                    {/* <!-- Payment Form --> */}

                    <div className="payment-form-box">
                        <form action="" method="post">
                            <div className="row payment-input-box name-row">
                                <div className="col-sm-5">
                                    <div className="input-box">
                                        <label for="inputname">Billing Cycle</label>
                                        <input
                                            type="text"
                                            name="business_name"
                                            id="buss_name"
                                            className="form-control"
                                            placeholder="Monthly"
                                        />
                                        <label for="" className="next-bills">
                                            <span>Next billing cycle</span>
                                            <span>Monthly from 24/11/2021</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-2 offset-sm-0"></div>
                                <div className="col-sm-5">
                                    <div className="input-box">
                                        <label for="inputname">Cardholder name</label>
                                        <input
                                            type="text"
                                            name="business_name"
                                            id="buss_name"
                                            className="form-control"
                                            placeholder="Jane Aubrey Doe"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row payment-input-box card-row">
                                <div className="col-sm-5">
                                    <div className="input-box card-input-box">
                                        <label for="inputname">Card number</label>
                                        <input
                                            type="number"
                                            name="card-number"
                                            id=""
                                            className="form-control card_number"
                                            placeholder="4410 2919 2929 XXXX"
                                        />
                                        <img src="/website/images/visa-icon.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-sm-2 offset-md-0"></div>
                                <div className="col-sm-5">
                                    <div className="input-box">
                                        <label for="inputname">Promo Code</label>
                                        <input
                                            type="text"
                                            name="business_name"
                                            id="buss_name"
                                            className="form-control"
                                            placeholder="Enter Promotional Code"
                                        />
                                        <span className="promo-code-redeem"> Redeem </span>
                                    </div>
                                </div>
                            </div>

                            <div className="row payment-input-box date-row">
                                <div className="col-sm-5">
                                    <div className="input-box card-date-validation">
                                        <div className="expiry-date">
                                            <div className="expiry-date-box">
                                                <label for="inputname">Expiry date</label>

                                                <input
                                                    type="month"
                                                    name="expiry_date"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="MM/YYYY"
                                                />
                                            </div>
                                        </div>

                                        <div className="card-cvv">
                                            <div className="cvv-date-box">
                                                <label for="inputname">cvv</label>
                                                <input
                                                    type="number"
                                                    name="card-cvv"
                                                    id=""
                                                    className="form-control card_number"
                                                    placeholder="365"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 offset-md-0"></div>
                                <div className="col-sm-5">
                                    <div className="payment-amount-box">
                                        <h6>To pay now</h6>
                                        <span id="pay-amount">AED 150</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5 btn-row">
                                <div className="col-12 tab-content">
                                    <div className="next-btn-box tab-pane active" >
                                        <button type="button" className="btn btn-primary btnNext">
                                            Select
                                        </button>
                                        <a href="" className="btnNext btnNextdiv mt-3"> Skip For Now </a>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


            {/* <%- include('partials/footer.ejs') %> */}

        </>
    )
}

export default Merchant_subscription
