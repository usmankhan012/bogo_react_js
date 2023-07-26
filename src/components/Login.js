import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="login_section">
                <div className="container">
                    <div className="user_login_box">
                        <div className="row">
                            <div className="col-md-6 user_img_row">
                                <img
                                    src="/images/merchant_reg_img.jpg"
                                    alt=""
                                    data-aos="zoom-in"
                                    className="aos-init aos-animate"
                                />
                            </div>
                            <div className="col-md-6">
                                {/* <!-- login group box --> */}
                                <div className="login-group-box">
                                    <h4>Login</h4>

                                    <form action="user_login" className="user_login_form">
                                        <div className="row">
                                            <div className="col-6">
                                                <input
                                                    type="text"
                                                    className="form-control user_login_email"
                                                    placeholder="Email address"
                                                />
                                            </div>
                                            <div className="col-6">
                                                <input
                                                    type="password"
                                                    className="form-control user_login_pass"
                                                    id="exampleFormControlInput1"
                                                    placeholder="password"
                                                />
                                                <i
                                                    toggle="#password-field"
                                                    className="fa-solid fa-eye eyes-toggle-login_password"
                                                ></i>
                                            </div>
                                            <div className="user_login_forget_pass">
                                                <Link to="/Forget_password" className="forgot-password"
                                                >Forgot password?</Link>
                                            </div>
                                            <div className="user_login_btn-box">
                                                <button className="user_login_btn btn">Login</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* <!-- register group box --> */}

                                <div className="register-group-box">
                                    <h4>Register</h4>
                                    <small>Are you a...</small>

                                    <div className="registation-option-row">
                                        <div className="registation-col">
                                            <div >
                                                <Link to="/App_userregister" className="customer_option option_regis"
                                                ><img
                                                        src="/images/customer-regis.png"
                                                        alt="customer_img"
                                                        className="aos-init aos-animate img-fluid"
                                                    /></Link>
                                            </div>
                                            <h6>Customer</h6>
                                        </div>

                                        <div className="registation-col">
                                            <div >
                                                <Link to="/Getregister" className="merchant_option option_regis"
                                                ><img
                                                        src="/images/merchangt_regis.png"
                                                        alt="customer_img"
                                                        className="aos-init aos-animate img-fluid"
                                                    /></Link>
                                            </div>
                                            <h6>Merchant</h6>
                                        </div>

                                        <div className="registation-col">
                                            <div >
                                                <a href="/pages/brand_ambassadors" className="Influencer_option option_regis"
                                                ><img
                                                        src="/images/influencer_regis.png"
                                                        alt="customer_img"
                                                        className="aos-init aos-animate img-fluid"
                                                    /></a>
                                            </div>
                                            <h6>Influencer</h6>
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

export default Login
