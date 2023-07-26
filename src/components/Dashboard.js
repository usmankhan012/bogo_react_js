import React from 'react'

function Dashboard() {
    return (
        <>
            {/* <%- include('partials/header.ejs') %> */}

            <div className="main-content">
                <section className="section">
                    <div className="section-body">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="card card-stats statistic-box mb-4">
                                    <div
                                        className="d-card-header d-card-header-dashboard card-header-warning card-header-icon position-relative border-0 text-center px-3 py-0" >
                                        <p
                                            className="card-category text-uppercase fs-10 font-weight-bold text-muted"
                                        ></p>
                                        <div
                                            className="card-icon d-flex align-items-center justify-content-center" >
                                            <i className="fas fa-calendar-check"></i>
                                        </div>
                                        Today Booking
                                        <p></p>
                                    </div>
                                    <div className="d-card-footer p-3 text-center">
                                        <div className="stats">
                                            <h3 className="card-title fs-18 font-weight-bold">0</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="card card-stats statistic-box mb-4">
                                    <div
                                        className="d-card-header d-card-header-dashboard card-header-warning card-header-icon position-relative border-0 text-center px-3 py-0"
                                    >
                                        {/* <!-- <div className="card-icon d-flex align-items-center justify-content-center">
                                                        <i className="material-icons">today</i>
                                                             </div> --> */}
                                        <p
                                            className="card-category text-uppercase fs-10 font-weight-bold text-muted"
                                        ></p>
                                        <div
                                            className="card-icon d-flex align-items-center justify-content-center" >
                                            <i className="fas fa-dollar-sign"></i>
                                        </div>
                                        Total Amount
                                        <p></p>
                                    </div>
                                    <div className="d-card-footer p-3 text-center">
                                        <div className="stats">
                                            <h3 className="card-title fs-18 font-weight-bold">36k</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="card card-stats statistic-box mb-4">
                                    <div
                                        className="d-card-header d-card-header-dashboard card-header-warning card-header-icon position-relative border-0 text-center px-3 py-0"
                                    >
                                        {/* <!-- <div className="card-icon d-flex align-items-center justify-content-center">
                                                  <i className="material-icons">today</i>
                                             </div> --> */}
                                        <p
                                            className="card-category text-uppercase fs-10 font-weight-bold text-muted"
                                        ></p>
                                        <div
                                            className="card-icon d-flex align-items-center justify-content-center"
                                        >
                                            <i className="fas fa-user-circle"></i>
                                        </div>
                                        Total Customer
                                        <p></p>
                                    </div>
                                    <div className="d-card-footer p-3 text-center">
                                        <div className="stats">
                                            <h3 className="card-title fs-18 font-weight-bold">12</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="card card-stats statistic-box mb-4">
                                    <div
                                        className="d-card-header d-card-header-dashboard card-header-warning card-header-icon position-relative border-0 text-center px-3 py-0"
                                    >
                                        <p
                                            className="card-category text-uppercase fs-10 font-weight-bold text-muted"
                                        ></p>
                                        <div
                                            className="card-icon d-flex align-items-center justify-content-center"
                                        >
                                            <i className="fas fa-calendar-minus"></i>
                                        </div>
                                        Today Booking
                                        <p></p>
                                    </div>
                                    <div className="d-card-footer p-3 text-center">
                                        <div className="stats">
                                            <h3 className="card-title fs-18 font-weight-bold">4</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h6>Total Booking History</h6>
                                    </div>
                                    <div className="card-body">
                                        <div
                                            className="resize-tigger"
                                            style={{ width: " 300px", height: "300px", margin: " 0 auto" }}
                                        >
                                            <canvas id="byChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h6>Total Reservation</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="resize-tigger">
                                            <div
                                                id="linechart"
                                                style={{ width: " 300px", height: "300px", margin: " 0 auto" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h6>Total Booking Amount vs Total Number of Booking</h6>
                                    </div>
                                    <div className="card-body">
                                        <div
                                            className="resize-tigger"
                                            style={{ width: " 300px", height: "300px", margin: " 0 auto" }}
                                        >
                                            <h6>Customer Reservation</h6>
                                            <div>
                                                <canvas id="coloumchart"></canvas>
                                            </div>
                                        </div>

                                        <div
                                            className="resize-tigger"
                                            style={{ width: " 300px", height: "300px", margin: " 0 auto" }}
                                        >
                                            <div>
                                                <canvas id="coloumchart2"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </div>

            {/* <%- include('partials/footer.ejs') %> */}

        </>
    )
}

export default Dashboard
