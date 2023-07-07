import React from 'react'

function Forget_password_otp_verification() {
    return (
        <>

            <div className="forgot_passward">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="text-center">
                                        <h3><i className="fa fa-lock "></i></h3>
                                        <h2 className="text-center">OTP-Verification</h2>
                                        <div className="panel-body">
                                            <form id="register-form" role="form" autocomplete="off" className="form" method="post">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"></span>
                                                        <input type="number" id="password" placeholder="New OTP" />
                                                        <span className="input-group-addon"></span>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="OTP-Verification" type="submit" />
                                                </div>
                                                <input type="hidden" className="hide" name="token" id="token" value="" />
                                            </form>
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

export default Forget_password_otp_verification
