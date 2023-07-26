import React from 'react'

function WelcomeSlider_Merchant_list() {
    return (
        <>
            {/* <%- include('partials/header.ejs') %> */}

            <div className="main-content">
                <section className="section">
                    <div className="section-body">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div
                                        className="card-header"
                                        style={{ height: " 70px", backgroundColor: "#6fd943" }}
                                    >
                                        <div className="col-12">
                                            <h4 className="float-left">Welcome Slider</h4>
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
                                                        data-bs-original-title="Add deshboardSlider"
                                                    >
                                                        Add
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="table-responsive p-2">
                                                    <table className="table table-bordered table-md">
                                                        <thead>
                                                            <tr>
                                                                <th>Video</th>
                                                                <th>created at</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {/* <% if(!welcomeSlider[0]) { %> */}
                                                            <tr>
                                                                <td colspan="100%" className="text-center">
                                                                    No welcomeSlider
                                                                </td>
                                                            </tr>
                                                            {/* <% } else {%> <% welcomeSlider.forEach(function(welcomeSlider,index){ %> */}
                                                            <tr>
                                                                <td>
                                                                    <video
                                                                        width="220"
                                                                        height="120"
                                                                        controls
                                                                        src="/uploads/WelcomeSlider_Merchant/<%= welcomeSlider.video %>"
                                                                    ></video>
                                                                </td>
                                                                {/* <td><%= welcomeSlider.created_at %></td> */}
                                                                <td>
                                                                    <i
                                                                        className="btn btn-danger btn-lg fas fa-trash-alt"
                                                                        onclick="deletewelcomeSlider('<%= welcomeSlider._id %>');"
                                                                    ></i>
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
                                <h5 className="modal-title" id="exampleModalLabel">Add New</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="body">
                                <div className="modal-body">
                                    <form id="addnewslider" className="mx-5">
                                        <div className="mb-3">
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="video"
                                                name="video"
                                                accept="video/*"
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-info mt-3 pull-right">
                                            Add
                                        </button>
                                    </form>
                                </div>
                                <div className="col-md-12 modal-footer"></div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- modal  --> */}
                </div>
            </div>
            {/* 
<%- include('partials/footer.ejs') %>

<script>
  var addsliderform = $("#addnewslider");

  addsliderform.on("submit", addslidersubmitHandler);

  function addslidersubmitHandler(e) {
    e.preventDefault();

    let video = $("#video").val();

    if (video == "") {
      renderToast({ message: "Please select video", icon: "error" });
      return false;
    }


    // PREPARE FORM DATA
    var formData = new FormData(addsliderform[0]);

    // DO POST
    $.ajax({
      type: "POST",
      enctype: "multipart/form-data",
      processData: false,
      contentType: false,
      url: "/admin/WelcomeSlider_Merchant/add",
      data: formData,
    })
      .done((res) => {
        if (res.error == true) {
          renderToast({ message: res.message, icon: "error" });
        } else {
          renderToast({ message: res.message, icon: "success" });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      })
      .fail(function (xhr, status, error) {
        console.log(xhr.responseText);
      });
  }

  function deletewelcomeSlider(id) {
    if (confirm("Do you really want to delete this welcomeSlider")) {
      // DO POST
      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/admin/WelcomeSlider_Merchant/delete",
        data: JSON.stringify({
          id: id,
        }),
      })
        .done((res) => {
          if (res.error == true) {
            renderToast({ message: res.message, icon: "error" });
          } else {
            renderToast({ message: res.message, icon: "success" });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        })
        .fail(function (xhr, status, error) {
          console.log(xhr.responseText);
        });
    }
  }
</script> */}

        </>
    )
}

export default WelcomeSlider_Merchant_list
