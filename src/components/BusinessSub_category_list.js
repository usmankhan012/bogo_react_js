import React from 'react'

function BusinessSub_category_list() {
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
              style={{height: "70px", backgroundColor: "#6fd943"}}
            >
              <div className="col-12">
                <h4 className="float-left">Sub Category</h4>
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
                      data-bs-original-title="Add Sub Category"
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
                    <table id="example" className="table table-bordered table-md">
                      <thead>
                        <tr className="text-center">
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* <% if(!sub_category[0]) { %> */}
                        <tr>
                          <td colspan="100%">No Data</td>
                        </tr>
                        {/* <% } else {%> <% sub_category.forEach(function(sub_category){ %> */}
                        <tr className="text-center">
                          {/* <td><%= sub_category.name %></td> */}

                          <td>
                            <i
                              className="btn btn-danger btn-lg fas fa-trash-alt"
                              onclick="deletesub_category('<%= sub_category._id %>');"
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
          <h5 className="modal-title" id="exampleModalLabel">Add Sub Category</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="body">
          <div className="modal-body">
            <form
              id="addform"
              className="form-group font-weight-bold showcursor: true"
            >
                <input type="hidden" name="Business_Category_id" id="Business_Category_id" value="<%= Business_Category_id %>" />
              <div className="mb-3 d-grid gap-2 col-12 mx-auto">
                <label for="title" className="form-label">Name</label>
                <input
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <button
                type="submit"
                className="btn mt-3 pull-right"
                style={{backgroundColor: "#6fd943", color: "#fff"}}>
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
<%- include ('partials/footer.ejs') %>

<!-- Pagination is not working in this page -->
<script>
  $(document).ready(function () {
  $("#example").DataTable();
});
</script> */}
 {/* <!-- Pagination is not working in this page --> */}

{/* <script>
  function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
      indexed_array[n["name"]] = n["value"];
    });

    return indexed_array;
  }

  const form = $("#addform");

  form.on("submit", submitHandler);

  function submitHandler(e) {
    e.preventDefault();

    // PREPARE FORM DATA
    let formData = $("form");
    let data = {
      name: $("#name").val(),
        Business_Category_id: $("#Business_Category_id").val(),
    };
    console.log(data);

    // DO POST
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/admin/businessSub_category/add",
      data: JSON.stringify(data),
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
</script>
<script>
  function deletesub_category(id) {
    if (confirm("Do you really want to delete this record")) {
      // DO POST
      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/admin/businessSub_category/delete",
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
            }, 1000);
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

export default BusinessSub_category_list
