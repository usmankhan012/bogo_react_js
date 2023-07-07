import React from 'react'
// import './App.css';


function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#88c641" }}>
                <div className="container">
                    <a className="navbar-brand text-white" href="/website/pages/index"
                    ><img src="/images/Bogo-White 2.png" alt="" /></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul
                            className="navbar-nav mr-auto w-100 justify-content-end align-items-center"
                        >
                            {/* <!-- <li className="nav-item active">
                                <a className="nav-link" href="/website/index">How it Works </a>
                            </li> --> */}
                            <li className="nav-item">
                                <a className="nav-link" href="/website/pages/pricing">Pricing</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/components/AboutUs">About Us</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/website/pages/brand_ambassadors"
                                >Brand Ambassadors</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/website/pages/business"
                                >BOGO for Business</a>
                            </li>

                            <li className="nav-item">
                                <a href="/website/user/login" className="nav-link">Login</a>
                            </li>
                            <li>
                                <div className="d-flex navbuttons">
                                    {/* <!-- <button
                                        className="popup_button_two_section popup_button_one"
                                        onclick="showPopup('popup1')"
                                    >
                                        Login
                                    </button> --> */}
                                    <a href="/website/user/login">
                                        <button type="button" className="btn btn-primary">
                                            Register
                                        </button>
                                    </a>
                                    <div id="popup1" className="popup">
                                        <div className="login-container">
                                            <h2>Login</h2>
                                            <form id="loginform">
                                                <label for="email">Email:</label>
                                                <input type="email" id="email" name="email" />
                                                <label for="password">Password:</label>
                                                <input type="password" id="password" name="password" />
                                                <a href="/website/user/forget_password"
                                                    className="forgot-password"
                                                >Forgot password?</a>
                                                <button type="submit">Login</button>
                                            </form>
                                        </div>
                                        <span className="close-btn" onclick="hidePopup('popup1')">X</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Nave Bar  --> */}

            {/* <!-- Login Popup Modal --> */}
            <div
                className="modal fade"
                id="loginModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="addformLogin">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email address"
                                    className="form-control"
                                />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control"
                                />

                                <a href="/website/user/forget_password" className="forgot-password"
                                >Forgot password?</a>
                                <button type="submit" className="btn">Login</button>

                                <div className="create_new_account_box">
                                    <p className="New_create_accout">
                                        Don’t have an account?
                                        <a href="" data-toggle="modal" data-target="#exampleModal"
                                        >Register</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Login Popup Modal --> */}

            {/* <!-- register Modal --> */}
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="addformRegister">
                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    placeholder="First Name:"
                                    className="form-control"
                                />
                                <input
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    placeholder="Last Name:"
                                    className="form-control"
                                />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email:"
                                    className="form-control"
                                />
                                <input
                                    type="password"
                                    id="create_password"
                                    name="create_password"
                                    placeholder="Password:"
                                    className="form-control"
                                />
                                <input
                                    type="password"
                                    id="repeat_password"
                                    name="repeat_password"
                                    placeholder="Repeat Password:"
                                    className="form-control"
                                />
                                <input
                                    type="tel"
                                    id="mobile_number"
                                    name="mobile_number"
                                    placeholder="Phone Number:"
                                    className="form-control"
                                />
                                <button type="submit" className="btn">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- register Modal --> */}

            {/* <!-- OTP Modal --> */}
            <div
                className="modal fade"
                id="otpModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="otpModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="otpModalLabel">OTP</h5>
                        </div>
                        <div className="modal-body">
                            <form id="addOtp" className="modal_one_modal">
                                <div className="modal_otp_outer_section" id="otpEmail"></div>
                                <div className="row">
                                    <div id="showEmail" style={{ textAlign: "center" }}></div>
                                    <div className="col-12">
                                        <input
                                            type="number"
                                            id="otp"
                                            name="otp"
                                            placeholder="otp:"
                                            style={{ width: " 100% !important" }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button
                                            type="button"
                                            className="btn-close btn-secondary"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            Close
                                        </button>
                                    </div>
                                    <div className="col" style={{ textAlign: "end" }}>
                                        <button type="submit" className="btn btn-primary">
                                            Verify OTP
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- OTP Modal --> */}
        </>
    )
}

export default Header
