import React from 'react'

function Otpverify() {
  return (
    <>
     {/* <%- include('partials/header.ejs') %> */}

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
          {/* <!--  User Verify  --> */}
          <div className="verify-group-box">
            <div className="verify-text-group">
              <h4>Verify Code</h4>

              <span className="otp-text">
                Enter the 4-digit OTP Verification Code
              </span>
            </div>

            <form id="addform" className="verify_otp_login_form">
              <input type="hidden" name="Id" id="Id" value="<%= id %>" />
              <div className="verification-code">
                <div className="verification-code--inputs">
                  <input type="text" name="otp1" id="otp1" maxlength="1" />
                  <input type="text" name="otp2" id="otp2" maxlength="1" />
                  <input type="text" name="otp3" id="otp3" maxlength="1" />
                  <input type="text" name="otp4" id="otp4" maxlength="1" />
                </div>

                <div className="otp-time">
                  <span className="pe-4">(00:52)</span>
                </div>
              </div>

              <div className="resend_code_box">
                <span>Did not receive the code?</span>
                <a href="#" className="resend_code_link">Resend Code</a>
              </div>

              <div className="row">
                <div className="col-12 verify-btn-group">
                  <button type="submit" className="btn btn-primary verify-btn">
                    Verify
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

{/* <!------------------------ VERIFICATION OTP ------------------------> */}

{/* <script>
  //Code Verification
  var verificationCode = [];
  $(".verification-code input[type=text]").keyup(function (e) {
    // Get Input for Hidden Field
    $(".verification-code input[type=text]").each(function (i) {
      verificationCode[i] = $(".verification-code input[type=text]")[i].value;
      $("#verificationCode").val(Number(verificationCode.join("")));
      //console.log( $('#verificationCode').val() );
    }); */}

    {/* //console.log(event.key, event.which); */}

    {/* if ($(this).val() > 0) {
      if (
        event.key == 1 ||
        event.key == 2 ||
        event.key == 3 ||
        event.key == 4 ||
        event.key == 5 ||
        event.key == 6 ||
        event.key == 7 ||
        event.key == 8 ||
        event.key == 9 ||
        event.key == 0
      ) {
        $(this).next().focus();
      }
    } else {
      if (event.key == "Backspace") {
        $(this).prev().focus();
      }
    }
  }); // keyup */}

  {/* $(".verification-code input").on("paste", function (event, pastedValue) {
    console.log(event);
    $("#txt").val($content);
    console.log($content);
    //console.log(values)
  }); */}

  {/* $editor.on("paste, keydown", function () {
    //jsfiddle.net/5bNx4/#run
    http: var $self = $(this);
    setTimeout(function () {
      var $content = $self.html();
      $clipboard.val($content);
    }, 100);
  });
</script> */}

{/* <%- include('partials/footer.ejs') %> */}

{/* <script>
  function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function (n, i) {
      indexed_array[n["name"]] = n["value"];
    });
    return indexed_array;
  }

  var form = $("#addform");
  form.on("submit", editSubmitHandler);

  function editSubmitHandler(e) {
    e.preventDefault();

    var formData = getFormData(form);
    console.log(formData);

    // DO POST
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/website/OtpVerify",
      data: JSON.stringify(formData),
    })
      .done((res) => {
        if (res.error == true) {
          renderToast({ message: res.message, icon: "error" });
        } else {
          renderToast({ message: res.message, icon: "success" });
          //   setTimeout(() => {
          //     window.location.reload();
          //   }, 1000);
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

export default Otpverify
