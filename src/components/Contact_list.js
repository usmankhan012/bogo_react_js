import React from 'react'

function Contact_list() {
  return (
    <>
    {/* <%- include('partials/header.ejs') %> */}

{/* <!-- content start --> */}
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
                <h4 className="float-left">Contact Us</h4>
                <div className="head-right-btn">
                  <button
                    className="btn btn-sm btn-secondary float-right card-text-btn"
                    type="submit"
                  >
                    <a
                      href="/admin/contact/add"
                      data-ajax-popup="true"
                      data-size="md"
                      data-title="Invite New User"
                      data-toggle="tooltip"
                      title=""
                      data-bs-original-title="Contact US"
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
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Message</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <% if(!contact[0]) { %> */}
                        <tr>
                          <td colspan="5">No Contact Found</td>
                        </tr>
                        {/* <% } else { for(var i=0; i < contact.length; i++) { %> */}
                        <tr>
                          {/* <td><%- contact[i].name %></td>
                          <td><%- contact[i].email %></td>
                          <td><%- contact[i].phone %></td>
                          <td><%- contact[i].message %></td> */}
                          <td>
                            <i
                              className="btn btn-danger btn-lg fas fa-trash-alt"
                              onclick="deleteCategory('<%= contact[i]._id %>');"
                            ></i>
                          </td>
                        </tr>
                        {/* <% } } %> */}
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
</div>
{/* <!-- Main Content --> */}

{/* <%- include ('partials/footer.ejs') %>
<script>
  function deleteCategory(id) {
    if (confirm("Do you really want to delete this record")) {
      // DO POST
      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/admin/contact/delete",
        data: JSON.stringify({
          id: id,
        }),
      })
        .done((res) => {
          console.log("Contact Deleted successfully");
          window.location.reload();
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

export default Contact_list
