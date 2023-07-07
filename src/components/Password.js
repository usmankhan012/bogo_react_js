import React from 'react'

function Password() {
  return (
    <>
      
  <div className="forgot_passward">
<div className="container">
	<div className="row">
		<div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="text-center">
                  <h3><i className="fa fa-lock "></i></h3>
                  <h2 className="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div className="panel-body">
                    <form id="addform" role="form" autocomplete="off" className="form" method="post">
                        <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon"></span>
                          <input id="email" name="email" placeholder="email address" className="form-control"  type="email"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                      </div>
                    </form>
                    <div className="bick_to_home">
                        <a href="index.html">Back To Login</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
	</div>
</div>
</div>

{/* <script>
  function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
      indexed_array[n["name"]] = n["value"];
    });

    return indexed_array;
  }
  const formAdd = $("#addform");
  formAdd.on("submit", submitHandler);
  function submitHandler(e) {
    e.preventDefault(); */}

    {/* var formData = getFormData($("#addform"));
    // console.log(formData);

    // DO POST
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/website/forget_password_email",
      data: JSON.stringify(formData),
    }) */}
      {/* .done((res) => {
        if (res.error == true) {
          renderToast({ message: res.message, icon: "error" });
        } else {
          renderToast({ message: res.message, icon: "success" });
          setTimeout(() => {
            window.location.href = "/website/forget_password_otp";
          }, 2000);
        }
      })
      .fail(function (xhr, status, error) {
        console.log(xhr.responseText);
      });
  } */}

  
{/* // </script> */}


    </>
  )
}

export default Password
