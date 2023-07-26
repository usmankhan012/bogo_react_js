import React from 'react'

function Notification_list() {
  return (
    <>
     {/* <%- include ('partials/header.ejs') %> */}
<div className="main-content">
  <section className="section">
    <div className="section-body">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div
              className="card-header"
              style={{height:" 70px", backgroundColor: "#6fd943"}}
            >
              <div className="col-12">
                <h4 className="float-left">Notifications</h4>
                <div className="head-right-btn">
                  <button
                    className="btn btn-sm btn-secondary float-right card-text-btn"
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    <a
                      href="#"
                      data-ajax-popup="true"
                      data-size="md"
                      data-title="Invite New User"
                      data-toggle="tooltip"
                      title=""
                      data-bs-original-title="Add New Notification"
                    >
                      Add New 
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive p-2">
                    <table id="example"className="table table-bordered table-md">
                      <thead>
                        <tr className="text-center">
                          <th>Title</th>
                          <th>Url</th>
                          <th>Send Type</th>
                          <th>Send Time</th>
                          <th>Image</th>
                          <th>Created</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {/* <% if(!records[0]) { %> */}
                        <tr>
                          <td colspan="100%">No Data</td>
                        </tr>
                        {/* <% } else {%> <% records.forEach(function(record){ %> */}
                        <tr>
                          {/* <td><%= record.title %></td> */}
                          {/* <td><%= record.url %></td> */}
                          {/* <td><%= record.selectedOption %></td> */}
                          {/* <td><%= record.time %></td> */}
                          <td>
                            {/* <% if(record.image) { %> */}
                            <img
                              alt="file"
                              src="/uploads/notifications/<%= record.image %>"
                              className="rounded"
                              width="70"
                            />
                            {/* <% } %> */}
                          </td>
                          <td>
                            {/* <%= convertTimeStampToDate(record.created_at) %> */}
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
    </div>
  </section>

  <div className="modal" id="myModal">
    {/* <!-- modal  --> */}
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Add Notification</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="body">
          <div className="modal-body">
            <form className="form-horizontal form-material" id="submitForm">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <input type="hidden" name="role" id="role" value="user" />
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      className="form-control form-control-line"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Url</label>
                    <input
                      type="text"
                      name="url"
                      placeholder="URL"
                      className="form-control form-control-line"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Send Option</label>
                    <select
                      name="selectedOption"
                      className="form-control"
                      id="selectedOption"
                    >
                      <option value="now">Send Now</option>
                      <option value="schedule">Schedule</option>
                    </select>
                  </div>
                  <div className="col-md-6" style={{display: "none"}} id="timeDiv">
                    <label>Time</label>
                    <input
                      type="time"
                      name="time"
                      placeholder="Time"
                      className="form-control form-control-line"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-12">
                    <label>Description</label>
                    <textarea
                      className="form-control form-control-line"
                      id="description"
                      name="description"
                      placeholder="Description"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Image</label>
                    <input
                      type="file"
                      name="image"
                      placeholder="Image"
                      accept="image/*"
                      className="form-control form-control-line"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="submit"
                    name="submitaddnewuser"
                    className="btn mt-3 pull-right"
                    value="Submit"
                    style={{backgroundColor: "#6fd943", color: "#fff"}}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-12 modal-footer"></div>
        </div>
      </div>
    </div>
    {/* <!-- modal  --> */}
  </div>
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
%>

<%- include ('partials/footer.ejs') %>
<script>
  $(document).ready(function () {
    $('#example').DataTable();
  });
  
  $("#selectedOption").on("change", function (e) {
    if ($(this).val() == "schedule") {
      $("#timeDiv").css("display", "block");
    } else {
      $("#timeDiv").css("display", "none");
    }
  });
  var addform = $("#submitForm");
  addform.on("submit", submitFormHandler);

  function submitFormHandler(e) {
    e.preventDefault();
    if ($("#title").val() == "") {
      renderToast({ message: "Title is required", icon: "error" });
      return false;
    }
    if ($("#description").val() == "") {
      renderToast({ message: "Description is required", icon: "error" });
      return false;
    }

    // PREPARE FORM DATA
    var formData = new FormData(addform[0]);

    // DO POST
    $.ajax({
      type: "POST",
      cache: false,
      enctype: "multipart/form-data",
      processData: false,
      contentType: false,
      url: "/admin/notification/add",
      data: formData,
    })
      .done((res) => {
        console.log(res);
        if (res.error == true) {
          renderToast({ message: res.message, icon: "error" });
        } else {
          renderToast({ message: res.message, icon: "success" });
          setTimeout(() => {
            window.location.href = "/admin/notification/list";
          }, 2000);
        }
      })
      .fail(function (xhr, status, error) {
        console.log("failed");
        console.log(xhr);
        console.log(status);
        console.log(error);
      });
  }
</script> */}
 
    </>
  )
}

export default Notification_list
