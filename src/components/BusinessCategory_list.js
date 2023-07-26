import React from 'react'

function BusinessCategory_list() {
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
                <h4 className="float-left">Category</h4>
                <div className="head-right-btn">
                  <button
                    className="btn btn-sm btn-secondary float-right card-text-btn"
                    type="submit"
                    data-toggle="modal"
                    data-target="#add"
                    aria-label="Close"
                  >
                    <a
                      href="#"
                      data-ajax-popup="true"
                      data-size="md"
                      data-title="Invite New User"
                      data-toggle="tooltip"
                      title=""
                      data-bs-original-title="Add Category"
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
                  <div className="table-responsive p-2 ">
                    <table
                      id="category-table"
                      className="table  table-striped table-bordered add-button"
                      style={{width:" 100%"}}
                      
                    >
                      <thead className="align-items-center">
                        <tr>
                          <th>icon</th>
                          <th>Name</th>
                          <th>Sub Category</th>
                          <th>Action</th>
                        </tr>
                        
                      </thead>
                      <tbody>
                        {/* <% for (let i = 0; i < category.length; i++) { %> */}
                          <tr>
                            <td>
                              <img
                                src="/uploads/Business_Category/<%= category[i].icon %>"
                                height="50px"
                                width="50px"
                              />
                            </td>
                            {/* <td><%= category[i].name %></td> */}
                            <td>

                              
                                <a href="/admin/businessSub_category/list?id=<%= category[i]._id %>">
                                  <i
                                    className="btn btn-success btn-lg fas fa-plus"
                                  ></i>
                                </a>


                            </td>
                            <td>
                              {/* <!-- edit button --> */}
                              <i
                              className="btn btn-info btn-lg fas fa-edit"
                                id="edit_btn"
                                data-toggle="modal"
                                data-model="<%= JSON.stringify(category[i]) %>"
                              ></i>

                               {/* <!-- delete button --> */}
                                {/* <!-- <i
                                  className="btn btn-danger btn-lg fas fa-trash-alt"
                                  onclick="deletefaq('<%= category[i]._id %>');"
                                ></i> --> */}
                              
                            </td>
                          </tr>
                        {/* <% } %> */}
                      </tbody>
                      <tfoot></tfoot>
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

  {/* <!-- Add Category Modal --> */}
  <div className="modal fade" id="add">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
          <h4 className="modal-title">Add Category</h4>
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
        </div>

        {/* <!-- Modal body --> */}
        <div className="modal-body">
          <form id="addform" className="mx-5">
            <div className="mb-3" id="previewicon" style={{display:" none"}}>
              <center>
                <img
                  src=""
                  id="display_preview_icon"
                  height="50px"
                  width="50px"
                />
              </center>
            </div>
            <div className="mb-3">
              <label>Category Name: </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Category Name"
              />
            </div>
            {/* <!-- image  --> */}
            <div className="mb-3">
              <label>Category Icon: </label>
              <input
                type="file"
                className="form-control"
                id="icon"
                name="icon"
                placeholder="Category Icon"
              />
            </div>
            <button type="submit" className="btn btn-info mt-3 pull-right">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Add Category Modal --> */}
  <div className="modal fade" id="edit">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
          <h4 className="modal-title">Edit Category</h4>
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
        </div>
        {/* <!-- Modal body --> */}
        <div className="modal-body">
          <form id="editform" className="mx-5">
            <input type="hidden" id="editid" name="editid" />

            <div className="mb-3">
              <label>Category Name: </label>
              <input
                type="text"
                className="form-control"
                id="editname"
                name="editname"
                placeholder="Category Name"
              />
            </div>
            <button type="submit" className="btn btn-info mt-3 pull-right">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <%- include('partials/footer.ejs') %>

<script>
  
  var addsliderform = $("#addform");

addsliderform.on("submit", addslidersubmitHandler);

function addslidersubmitHandler(e) {
  e.preventDefault();

  // PREPARE FORM DATA
  var formData = new FormData(addsliderform[0]);
  console.log( "Hello", formData);
  // DO POST
  $.ajax({
    type: "POST",
    enctype: "multipart/form-data",
    processData: false,
    contentType: false,
    url: "/admin/business_category/add",
    data: formData,
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





  $(document).on("click", "#edit_btn", function (e) {
    let getData = $(e.target).attr("data-model");
    let finalData = JSON.parse(getData);
    $("#edit").modal("show");
    var data = finalData;
    $("#editid").val(data._id);
    $("#editname").val(data.name);
  });

  var editform = $("#editform");
  editform.on("submit", editSubmitHandler);

  function editSubmitHandler(e) {
    e.preventDefault(); */}

    {/* // PREPARE FORM DATA
    var formData = getFormData(editform);
    console.log(formData);

    // DO POST
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/admin/business_category/edit",
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
  } */}

  {/* // $(document).on("click", "#delete_btn", function (e) { */}
  {/* //   if (confirm("Do you really want to delete this category")) { */}
  {/* //     var row = $(this).closest("tr");
  //     tableData = table.row(row).data();
  //     var id = tableData._id;
  //     $.ajax({ */}
  {/* //       type: "POST",
  //       contentType: "application/json",
  //       url: "/admin/category/delete",
  //       data: JSON.stringify({
  //         id: id,
  //       }),
  //     }) */}
  {/* //       .done((res) => { */}
  {/* //         if (res.error == true) {
  //           renderToast({ message: res.message, icon: "error" });
  //         } else {
  //           renderToast({ message: res.message, icon: "success" });
  //           setTimeout(() => {
  //             window.location.reload();
  //           }, 1000);
  //         }
  //       }) */}
  {/* //       .fail(function (xhr, status, error) {
  //         console.log(xhr.responseText);
  //       });
  //   }
  // }); */}

  {/* // $("#icon").change(function () {
  //   displayPP(this, $("#display_preview_icon"), $("#previewicon"));
  // }); */}
{/* </script> */}
 
    </>
  )
}

export default BusinessCategory_list
