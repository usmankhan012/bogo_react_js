import React from 'react'

function MerchantUser_list() {
    return (
        <>
            {/* <%- include('partials/header.ejs') %> */}

            {/* <!-- content start --> */}
            <div className="main-content">
                <section className="section">
                    <div className="section-body">
                        {/* <!--  Users Start--> */}

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div
                                        className="card-header"
                                        style={{height: "70px", backgroundColor:" #6fd943"}}
                                    >
                                        <div className="col-12">
                                            <h4 className="float-left">Merchant User</h4>
                                        </div>
                                    </div>
                                    {/* <!-- <div className="card-body mt-2">
              <form id="addsearch">
                <div className="row">
                  <select
                    className="form-control col-3 col-md-3 mx-3"x`
                    name="field"
                    id="field"
                  >
                    <option value="roll">Select Fields</option>
                    <option value="roll">User</option>

                  </select>
                  <select
                    className="form-control col-3 col-md-3 mx-3"
                    name="value"
                    id="value"
                  >
                    <option value="">Select Fields</option>
                    <option value="Merchant">Merchant</option>
                    <option value="Influencer">Influencer</option>

                  </select>
                 
                  <button
                    className="btn btn-sm btn-secondary float-right card-text-btn col-1 col-md-1 mx-3"
                    onclick="search()"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div> --> */}

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="table-responsive p-2">
                                                    <table id="example" className="table table-bordered table-md">
                                                        <thead className="t-head">
                                                            <tr className="text-center">
                                                                <th>S.NO</th>
                                                                <th>Name</th>
                                                                <th>Email</th>
                                                                <th>Status</th>
                                                                <th>Created At</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody className="text-center" >
                                                            {/* <% if(!users[0]) { %> */}
                                                            <tr>
                                                                <td colspan="100%">No Data</td>
                                                            </tr>
                                                            {/* <% } else {%> <% users.forEach(function(users,index){ %> */}
                                                            <tr>
                                                                {/* <td><%= index+1 %></td> */}
                                                                <td>
                                                                    {/* <%= users.first_name ? users.first_name  + " " + users.last_name : " "  %> */}
                                                                </td>
                                                                <td>
                                                                    {/* <%= users.email %> */}
                                                                </td>

                                                                <td>
                                                                    <button
                                                                        className="btn <%- users.approved ? 'bg-success' : 'bg-danger' %> text-white"
                                                                        data-toggle="modal"
                                                                        //   data-model="<%= JSON.stringify(users) %>"
                                                                        id="accept_btn"
                                                                        style={{cursor: "pointer"}}>
                                                                        {/* <%- users.approved ? 'Active' : 'Inactive' %> */}
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            {/* </tb> */}
                                                            {/* </td> */}
                                                            <td>
                                                                {/* <%= convertTimeStampToDate(users.created_at) %> */}
                                                            </td>
                                                            {/* </tr> */}
                                                            {/* <% }); %> <% } %> */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Users Ends --> */}
                    </div>
                </section>
                {/* <!-- Approved --> */}
                <div className="modal fade" id="action" >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form id="actionForm" className="mx-5">
                                {/* <!-- Modal Header --> */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Action</h4>
                                    <button type="button" className="close" data-dismiss="modal">
                                        &times;
                                    </button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <input
                                            name="approved"
                                            type="checkbox"
                                            id="approved"
                                            data-width="100%"
                                            data-toggle="toggle"
                                            data-on="Active"
                                            data-off="InActive"
                                            data-onstyle="success"
                                            data-offstyle="danger"
                                        />
                                    </div>
                                    <input name="id" type="hidden" id="actionid" />
                                </div>

                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        close
                                    </button>
                                    <button type="submit" className="btn btn-success">save</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* <!-- Modal --> */}


                </div>
            </div>

        </>
    )
}
export default MerchantUser_list
