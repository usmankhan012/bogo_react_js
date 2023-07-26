import React from 'react'

function Changepassword() {
  return (
    <>
      {/* <%- include ('partials/header.ejs') %> */}

<div class="main-content">
  <section class="section">
    <div class="section-body">
      <div class="row mt-1">
        <div class="col-12">
          <div class="card">
            <div
              class="card-header border"
              style={{height:" 70px", backgroundColor:" #6fd943"}}
            >
              <h4 class="float-left">Change Password</h4>
            </div>
            <div class="card-body">
              <div class="clearfix mb-3"></div>
              <div class="row">
                <div class="mb-3">
                  <div class="col-12 col-lg-12">
                    <form
                      id="form"
                      class="form-group font-weight-bold showcursor: true"
                    >
                      <div class="row">
                        <div class="mb-3 col-lg-12">
                          <label for="New Password" class="form-label"
                            >New Password : -</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="newpassword"
                            name="newpassword"
                            placeholder="Enter New Password"
                          />
                          <button
                            type="submit"
                            class="btn mt-4"
                            style={{backgroundColor: "#6fd943", color:" #fff"}}
                          >
                            Save
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
      </div>
    </div>
  </section>
</div>

{/* <%- include ('partials/footer.ejs') %>
<script>
  activeSideBar("changepassword");
</script>
<script>
  const form = $("form");

  form.on("submit", submitHandler);

  function submitHandler(e) {
    e.preventDefault();

    // PREPARE FORM DATA
    var formData = {
      newpassword: form.serializeArray()[0].value,
    };

    // DO POST
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "changepassword",
      data: JSON.stringify(formData),
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
</script> */}

    </>
  )
}

export default Changepassword
