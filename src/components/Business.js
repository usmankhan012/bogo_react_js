import React from 'react'
import { Link } from 'react-router-dom'

function Business() {
    return (
        <>
            {/* <%- include('partials/header.ejs') %> */}

            {/* <style>
   .brouchure-form button[type="submit"]{
                    margin - top: 0;
  } 
            </style> */}
            <div className="business_banner_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bussiness-header-section">
                                <h1>Bogo For Business</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="business_outer_section">
                                <img src="/images/Splash-BogoLogo-color.png" alt="" />
                                <ul>
                                    <li>
                                        <span>✓</span> No Contract Environment – switch your BOGO
                                        campaigns ON/OFF as you see fit
                                    </li>
                                    <li>
                                        <span>✓</span> Choose which days of the week you want to run Buy
                                        One Get One deals
                                    </li>
                                    <li>
                                        <span>✓</span> No Forced Deal Structure – offer what makes sense
                                        for your business
                                    </li>
                                    <li>
                                        <span>✓</span> Subscription-based service – pay us a small monthly
                                        fee, run unlimited BOGO campaigns, and pay nothing on each
                                        transaction
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="business_outer_last_section">
                                <h1>Other Incentive Apps</h1>
                                <ul>
                                    <li>✗ Lock you into lengthy contracts</li>
                                    <li>
                                        ✗ Force you to accept discount customers 7 days a week, from open
                                        to close, regardless of peak periods or busy seasons
                                    </li>
                                    <li>✗ Enforce strict rigidity and mandatory deal formats</li>
                                    <li>
                                        ✗ Charge excessive commission fees on all transactions through the
                                        platform
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid become_main_section" >
                <div className="row" >
                    <div className="col-md-6 p-0" >
                        <div className="bacome_left_section" >
                            {/* <!-- <img src="/website/images/Rectangle.png" alt="" /> --> */}
                            < div className="page" >
                                <div className="video" data-video-id="CoL8Gtvxfl0">
                                    <div className="" >
                                        <div className="video-placeholder" >
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
                    <div className="col-md-6" >
                        <div className="bacome_right_section merchant-partner"  >
                            <h2>Become a BOGO Merchant Partner</h2>
                            <p>
                                Use our Dynamic Campaign Management system to get more customers, with
                                Buy One Get One offers that align with your real-time inventory,
                                capacity, and business needs.
                            </p>
                            <Link to="/Getregister"
                            >Sign Up Now <i className="fa fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
            <div className="bogo_service_section" >
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-4" >
                            <div className="bogo_inner_section"  >
                                <img
                                    src="/images/undraw_Mobile_payments_re_7udl 1.png"
                                    alt=""
                                    className="img-fluid"
                                />
                                <p>Register your business as a BOGO Merchant Partner</p>
                            </div>
                        </div>
                        <div className="col-md-4" >
                            <div className="bogo_inner_section">
                                <img
                                    src="/images/undraw_Email_campaign_re_m6k5 1.png"
                                    alt=""
                                    className="img-fluid"
                                />
                                <p>Launch customizable Buy One Get One campaigns</p>
                            </div>
                        </div>
                        <div className="col-md-4" >
                            <div className="bogo_inner_section"  >
                                <img
                                    src="/images/undraw_prioritise_tgdh 1.png"
                                    className="img-fluid"
                                    alt=""
                                />
                                <p>Choose a deal format that works for your business</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-6 bogo-img-gallery" >
                            <div
                                className="bogo_inner_section right-position bogo-img-gallery"

                            >
                                <img
                                    src="/images/undraw_publish_post_vowb 1.png"
                                    alt=""
                                    className="img-fluid"
                                />
                                <p>Set your campaign availability and win new customers</p>
                            </div>
                        </div>
                        <div className="col-md-6 bogo-img-gallery">
                            <div className="bogo_inner_section bogo-img-gallery"  >
                                <img
                                    src="/images/undraw_Social_influencer_re_beim 1 (1).png"
                                    alt=""
                                    className="img-fluid"
                                />
                                <p>Boost your audience online with BOGO Brand Ambassadors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="request-brochure" >
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-6" >
                            <div className="brochure-left-section" >
                                <div className="brouchure-text-box" >
                                    <h4>Not ready to sign up just yet?</h4>
                                    <h6>Request a Brochure</h6>

                                    <form id="addformemail" className="brouchure-form">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="input-box full-name-box">
                                                    <label for="">Full Name</label>
                                                    <input type="text" name="name" id="" required="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row" >
                                            <div className="col-12" >
                                                <div className="input-box" >
                                                    <label for="inputcity">Email address</label>
                                                    <input type="email" name="email" id="" required="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row" >
                                            <div className="col-12" >
                                                <div className="robot-box" >
                                                    <span className="msg-error error" ></span>
                                                    <div
                                                        id="recaptcha"
                                                        className="g-recaptcha"
                                                        data-sitekey="6Ld0lZEUAAAAAJAK1wPWcVxwOlc1qgFcSIcU1das"
                                                        data-callback="aaa"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row" >
                                            <div className="col-12" >
                                                <button type="submit" className="btn brochure-btn">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 brochure-right" >
                            <div className="brochure-right-section" >
                                <div className="brouchure-img-box" >
                                    <img
                                        src="/images/Iphone.png"
                                        alt=""
                                        data-aos="fade-down"
                                        className="aos-init aos-animate img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- <div className="sign_brochure">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="sing_left_section" data-aos="slide-up">
                                <h1>Not ready to sign up just yet?</h1>
                                <h2><span>Request a Brochure</span> or ask us anything!</h2>
                                <a href="/website/contact"
                                >Contact Us <i className="fa fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sing_right_section">
                                <img
                                    src="images/Iphone.png"
                                    alt=""
                                   className="img-fluid"
                                    data-aos="slide-up"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> --> */}

            {/* < script src = "https://www.google.com/recaptcha/api.js" ></ > */}

            {/* <%- include('partials/footer.ejs') %> */}


            {/* <!-- Brochure form --> */}
            {/* <script>
                function getFormData($form) {
    var unindexed_array = $form.serializeArray();
                var indexed_array = { };
                $.map(unindexed_array, function (n, i) {
                    indexed_array[n["name"]] = n["value"];
    });
                return indexed_array;
  }

                var form = $("#addformemail");
                form.on("submit", editSubmitHandler);

                function editSubmitHandler(e) {
                    e.preventDefault();

                var formData = getFormData(form);

                // DO POST
                $.ajax({
                    type: "POST",
                contentType: "application/json",
                url: "/website/brochure/business/add",
                data: JSON.stringify(formData),
    })
      .done((res) => {
        if (res.error == true) {
                    renderToast({ message: res.message, icon: "error" });
        } else {
                    renderToast({ message: res.message, icon: "success" });
          setTimeout(() => {
                    window.location.reload();
          }, 1000);
        }
      })
                .fail(function (xhr, status, error) {
                    console.log(xhr.responseText);
      });
  }
            </script> */}
            {/* <!-- Brochure --> */}
        </>
    )
}

export default Business
