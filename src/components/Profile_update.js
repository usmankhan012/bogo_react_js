import React from 'react'

function Profile_update() {
    return (
        <>
            {/* <%- include('partials/header.ejs') %> */}

            <div className="main-content">
                <section className="section">
                    <div className="section-body">
                        <div className="row mt-1">
                            <div className="col-12">
                                <div className="card">
                                    <div
                                        className="card-header border"
                                        style={{ height: "70px", backgroundColor: " #6fd943" }}
                                    >
                                        <h4 className="float-left">Profile Update</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3"></div>
                                        <div className="row">
                                            <div className="mb-3">
                                                <div className="col-12 col-lg-12">
                                                    <form
                                                        id="updateform"
                                                        className="form-group font-weight-bold showcursor: true" >
                                                        <div className="row">
                                                            <div className="mb-3 col-lg-6">
                                                                <label for="title" className="form-label"
                                                                >First Name</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="firstname"
                                                                    id="firstname"
                                                                    placeholder="First Name"
                                                                />
                                                            </div>

                                                            <div className="mb-3 col-lg-6">
                                                                <label for="description" className="form-label"
                                                                >Last Name</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="lastname"
                                                                    id="lastname"
                                                                    placeholder="Last Name"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="mb-3 col-lg-6">
                                                                <label for="description" className="form-label"
                                                                >Mobile Number</label>
                                                                <input
                                                                    type="text"
                                                                    name="mobile_number"
                                                                    className="form-control"
                                                                    id="mobile_number"
                                                                    placeholder="Mobile Number"/>
                                                            </div>
                                                            <div className="mb-3 col-lg-6">
                                                                <label for="description" className="form-label"
                                                                >Email</label>
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    className="form-control"
                                                                    id="email"
                                                                    placeholder="Email"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="mb-2 col-md-6">
                                                                <label for="image" className="col-form-label"
                                                                >Image</label>
                                                                <input
                                                                    id="image"
                                                                    type="file"
                                                                    name="image"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="mb-2 col-md-6"></div>
                                                        </div>

                                                        <button
                                                            type="submit"
                                                            className="btn mt-3"
                                                            style={{ backgroundColor: " #6fd943", color: "#fff" }}
                                                        >
                                                            Save
                                                        </button>
                                                    </form>
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

            {/* <%- include ('partials/footer.ejs') %>

<script>
  var editform = $("#updateform");

  editform.submit(function (e) {
    e.preventDefault();

    var formData = new FormData(editform[0]);
    // console.log(formData);

    $.ajax({
      type: "POST",
      cache: false,
      enctype: "multipart/form-data",
      processData: false,
      contentType: false,
      url: "profile_update",
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
  });
</script> */}

        </>
    )
}

export default Profile_update
