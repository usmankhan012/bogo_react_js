import React from 'react'

function DeshboardSlider_Merchant_list() {
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
              style={{height: "70px", backgroundColor:" #6fd943"}}
            >
              <div className="col-12">
                <h4 className="float-left">Deshboard Slider</h4>
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
                      data-bs-original-title="Add DeshboardSlider"
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
                          <th>Thumbnail</th>
                          <th>Title</th>
                          <th>created at</th> 
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <% if(!deshboardSlider[0]) { %> */}
                        <tr>
                          <td colspan="100%" className="text-center">
                            No deshboardSlider
                          </td>
                        </tr>
                        {/* <% } else {%> <% deshboardSlider.forEach(function(deshboardSlider,index){ %> */}
                        <tr>
                          <td>
                            <video
                              width="220"
                              height="120"
                              controls
                              src="/uploads/DeshboardSlider_Merchant/<%= deshboardSlider.video %>"
                            ></video>
                          </td>
                            <td>
                                <img
                                src="/uploads/DeshboardSlider_Merchant/<%= deshboardSlider.thumbnail %>"
                                alt=""
                                width="220"
                                height="120"
                                />
                            </td>
                            {/* <td><%= deshboardSlider.title %></td> */}
                          {/* <td><%= deshboardSlider.created_at %></td> */}
                          <td>
                            <i
                              className="btn btn-danger btn-lg fas fa-trash-alt"
                              onclick="deletedeshboardSlider('<%= deshboardSlider._id %>');"
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
                <div className="mb-3 d-grid gap-2 col-12 mx-auto">
                    <label for="video" className="form-label"><b>Video</b></label>
                    <input
                    type="file"
                    name="video"
                    id="video"
                    className="form-control"
                    placeholder="Video"
                    />
                </div>
                 {/* <!-- thumbnail --> */}
                    <div className="mb-3 d-grid gap-2 col-12 mx-auto">
                        <label for="thumbnail" className="form-label"><b>Thumbnail</b></label>
                        <input
                        type="file"
                        name="thumbnail"
                        id="thumbnail"
                        className="form-control"
                        placeholder="Thumbnail"
                        />
                    </div>
                    {/* <!-- title  --> */}
                    <div className="mb-3 d-grid gap-2 col-12 mx-auto">
                        <label for="title" className="form-label"><b>Title</b></label>
                        <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        placeholder="Title"
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

{/* <%- include('partials/footer.ejs') %>

<script>
  var addsliderform = $("#addnewslider");

  addsliderform.on("submit", addslidersubmitHandler);

  function addslidersubmitHandler(e) {
    e.preventDefault();

    let video = $("#video").val();
    let thumbnail = $("#thumbnail").val();

    if (video == "") {
      renderToast({ message: "Please select video", icon: "error" });
      return false;
    } else if (thumbnail == "") {
      renderToast({ message: "Please select thumbnail", icon: "error" });
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
      url: "/admin/deshboardSlider_Merchant/add",
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

  function deletedeshboardSlider(id) {
    if (confirm("Do you really want to delete this deshboardSlider")) {
      // DO POST
      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/admin/deshboardSlider_Merchant/delete",
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

export default DeshboardSlider_Merchant_list
