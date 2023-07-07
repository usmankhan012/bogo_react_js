import React from 'react'

function User_registration() {
    return (
        <>
            {/* <%- include('partials/header.ejs') %> */}

            {/* <head>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/css/intlTelInput.css"
  />

  <style>
    .intl-tel-input,
    .iti {
      width: 100%;
    }
  </style>
</head> */}

            <div className="login_section">
                <div className="container">
                    <div className="user_login_box">
                        <div className="row">
                            <div className="col-md-6 user_img_row">
                                <img
                                    src="/images/merchant_reg_img.jpg"
                                    alt=""
                                    data-aos="zoom-in"
                                    className="aos-init aos-animate"
                                />
                            </div>
                            <div className="col-md-6">
                                {/* <!-- registration group box --> */}
                                <div className="user_register-group-box">
                                    <h4>Merchant Registration</h4>

                                    <form id="addform" className="user_registration_form">
                                        <input type="hidden" name="merchantUserId" value="<%= id %>" />
                                        <div className="row">
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="form-control user_registration_Sname"
                                                    id="first_name"
                                                    name="first_name"
                                                    placeholder="First Name"
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="form-control use_registration_Lname"
                                                    id="last_name"
                                                    name="last_name"
                                                    placeholder="Last Name"
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="email"
                                                    className="form-control use_registration_email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email Name"
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="form-control use_registration_email"
                                                    id=""
                                                    name=""
                                                    placeholder="Title"
                                                    required

                                                />
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="password"
                                                    className="form-control use_registration_password"
                                                    id="create_password"
                                                    name="create_password"
                                                    placeholder="Create Password"
                                                    required
                                                />
                                                <i
                                                    toggle="#password-field"
                                                    className="fa-solid fa-eye eyes-toggle-password"
                                                ></i>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="password"
                                                    className="form-control use_registration_Rpassword"
                                                    id="repeat_password"
                                                    name="repeat_password"
                                                    placeholder="Repeat password"
                                                    required
                                                />
                                                <i
                                                    toggle="#password-field"
                                                    className="fa-solid fa-eye eyes-toggle-Rpassword"
                                                ></i>
                                            </div>

                                            <div className="col-12">
                                                <label for="">Mobile Number</label>
                                                <input
                                                    type="number"
                                                    id="mobile_code"
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                    name="mobile_number"
                                                    required
                                                />
                                            </div>

                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    className="registration-btn btn btn-primary"
                                                >
                                                    Complete Registration
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/intlTelInput-jquery.min.js"></script> */}

            {/* <script>
  // -----Country Code Selection
  $("#mobile_code").intlTelInput({
    initialCountry: "ae",
    separateDialCode: true,
    // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
  });
</script> */}

            {/* <%- include('partials/footer.ejs') %> */}

            {/* <!-- Registration --> */}
            {/* <script>
  function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function (n, i) {
      indexed_array[n["name"]] = n["value"];
    });
    return indexed_array;
  } */}

            {/* var form = $("#addform");
  form.on("submit", editSubmitHandler);

  function editSubmitHandler(e) {
    e.preventDefault();

    var formData = getFormData(form);

    // DO POST
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/website/user/registerUser",
      data: JSON.stringify(formData),
    })
      .done((res) => {
        if (res.error == true) {
          renderToast({ message: res.message, icon: "error" });
        } else {
          renderToast({ message: res.message, icon: "success" });
          setTimeout(() => {
            window.location.href = "/website/otpverify?id=" + res.data._id + "";
          }, 1000);
        }
      })
      .fail(function (xhr, status, error) {
        console.log(xhr.responseText);
      });
  }
</script> */}
            {/* <!-- Registration --> */}





            {/* <!-- Country code --> */}


        </>
    )
}

export default User_registration
