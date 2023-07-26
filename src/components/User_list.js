import React from 'react'

function User_list() {
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
                                        style={{ height: "70px", backgroundColor: "#6fd943" }}
                                    >
                                        <div className="col-12">
                                            <h4 className="float-left">Users</h4>
                                        </div>
                                    </div>
                                    <div className="card-body mt-2">
                                        <form id="addsearch">
                                            <div className="row">
                                                <select
                                                    className="form-control col-3 col-md-3 mx-3"
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
                                    </div>

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
                                                            {/* <% if(!recordData[0]) { %> */}
                                                            <tr>
                                                                <td colspan="100%">No Data</td>
                                                            </tr>
                                                            {/* <% } else {%> <% recordData.forEach(function(recordData,index){ %> */}
                                                            <tr>
                                                                {/* <td><%= index+1 %></td> */}
                                                                <td>
                                                                    {/* <%= recordData.name  %> */}
                                                                </td>
                                                                <td>
                                                                    {/* <%= recordData.email %> */}

                                                                </td>

                                                                <td>
                                                                    <button
                                                                        className="btn <%- recordData.approved ? 'bg-success' : 'bg-danger' %> text-white"
                                                                        data-toggle="modal"
                                                                        data-model="<%= JSON.stringify(recordData) %>"
                                                                        id="accept_btn"
                                                                        style={{ cursor: "pointer" }}
                                                                    >
                                                                        {/* <%- recordData.approved ? 'Active' : 'Inactive' %> */}
                                                                    </button>
                                                                </td>
                                                                {/* </td> */}
                                                                <td>
                                                                    {/* <%= convertTimeStampToDate(recordData.created_at) %> */}
                                                                </td>
                                                            </tr>
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
                <div className="modal fade" id="action">
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
                </div>
                {/* <!-- Modal --> */}
            </div>

            {/* <%
function convertTimeStampToDate(date){
   date = Number(date)
      var d = new Date(date),
         month = '' + (d.getMonth() + 1),
         day = '' + d.getDate(),
         year = d.getFullYear();

   if (month.length < 2)
   month = '0' + month;
   if (day.length < 2)
   day = '0' + day;
   var date = new Date();
   date.toLocaleDateString();

   return [day, month, year].join('-');
}
%> */}

            {/* <%- include ('partials/footer.ejs') %>

<script>
 $(document).ready(function () {
    $("#example").DataTable();
  });

  $(document).on("click", "#accept_btn", function (e) {
    let getData = $(e.target).attr("data-model");
    let finalData = JSON.parse(getData);
    $("#action").modal("show");
    var data = finalData;
    // console.log(data)

    $("#actionid").val(data._id);

    approved
      ? $("#approved").bootstrapToggle("on")
      : $("#approved").bootstrapToggle("off");
  });
</script>
<script>
  function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
      indexed_array[n["name"]] = n["value"];
    });

    return indexed_array;
  }

  var actionForm = $("#actionForm");
  actionForm.on("submit", addslidersubmitHandler);

  function addslidersubmitHandler(e) {
    e.preventDefault();

    // PREPARE FORM DATA
    var formData = getFormData(actionForm);
    formData.approved = $("#approved").is(":checked");
    console.log(formData);

    // DO POST
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/admin/users/approved",
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
</script>

<script>
  function search() {
    // var field = "roll"
    var field = document.getElementById("field").value;
    var value = document.getElementById("value").value;
    // return console.log(field, value);
    wwindow.location.href = "?field=" + field + "&value=" + value;
  }
</script> */}

        </>
    )
}

export default User_list
