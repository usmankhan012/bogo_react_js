import React from 'react'

function Contact() {
  return (
    <>
     {/* <%- include('partials/header.ejs') %> */}
{/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
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
  /> */}

  {/* <style>
    .intl-tel-input,
    .iti {
      width: 100%;
    }
  </style> */}

{/* <!-- *********Hero section********* --> */}
<div class="hero-contact-section">
    <div class="container">
        <div class="contact-box">
            <div class="row">
                <div class="col-md-6 contact-text-box">
                    <div class="contact-text">
                        <h1>Contact Us</h1>
                        <h3>We’re always happy to help!</h3>
                        <p>Fill out the form and we’ll get back to you within 48 hours.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="contact-info">
                        <form id="ADDcontact">
                          <div class="col-md-12">
                            <input type="text" id="name" name="name" class="form-control" placeholder="Your Name" />
                          </div>
                          <div class="col-md-12">
                            <input type="email" id="Email" name="email" class="form-control" placeholder="Your Email" />
                          </div>
                          <div class="col-md-12 mb-3">
                            {/* <!-- <input type="number" class="form-control" id="phone" name="phone" placeholder="Mobile Number" > --> */}
                            <input
                              style={{width: "100%"}}
                              type="number"
                              id="mobile_code"
                              class="form-control mb-3"
                              placeholder="Phone Number"
                              name="mobile"
                            />
                          </div>
                          <div class="col-md-12">
                            <textarea name="message" id="message" cols="33" rows="3S" placeholder="Message" class="form-control" ></textarea>
                          </div>
                          <div class="col-md-12">
                               <button type="submit" class="btn submit-button" style={{backgroundColor:"#1478a9" ,color: "white"}} >
                                Submit
                              </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  {/* <!--*********third section****** --> */}
  <div class="merchant_main_section about_merchant_sectiton contact_main_section_last">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="merchant_inner_section contact-inner-section">
            <img src="/images/Onboarding.png" alt=""/>
          </div>
        </div>
        <div class="col-md-7">
          <div class="about_inner_section">
            <div class="row">
                <div class="col-md-6">
                    <div class="about_outer_section" >
                        <h4>For Merchants </h4>
                        <p>Increase foot traffic and sustainably grow your profitability with The BOGO App’s Dynamic Campaign Management system</p>
                        <a href="#">BOGO For Business
                          <img src="/images/arrow_forward_24px.png" alt="" class="img-fluid pl-2"/>
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="about_outer_section" >
                        <h4>For Influencers</h4>
                        <p>Create engaging and high-quality content for BOGO Merchants, to help them increase their online following and reach new audience</p>
                        <a href="#">BOGO Brand Ambassadors

                          <img src="/images/arrow_forward_24px.png" alt="" class="img-fluid pl-2"/>
                          
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>








  {/* <!-- Script Start --> */}

    {/* <script>
    function showPopup(id) {
      document.getElementById(id).style.display = "block";
      document.getElementById("overlay").style.display = "block";
    }

    function hidePopup(id) {
      document.getElementById(id).style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }
    </script> */}
    {/* <script>
      const registrationBtn = document.getElementById('registration-btn');
      const otpPopup = document.getElementById('otp-popup');
      const otpInput = document.getElementById('otp-input');

      registrationBtn.addEventListener('click', () => {
          otpPopup.style.display = 'block';
      });

      otpPopup.addEventListener('submit', (event) => {
          event.preventDefault();
          // Add code to verify OTP and complete registration
      });


    </script> */}

{/* <script>
  function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
      indexed_array[n["name"]] = n["value"];
    });

    return indexed_array;
  }

  const form = $("#ADDcontact");

  form.on("submit", submitHandler);

  function submitHandler(e) {
    e.preventDefault();
     
    let email = $("#Email").val();


    // PREPARE FORM DATA
    let formData = $("form");
    let data = {
      name: $("#name").val(),
      email,
      phone: $("#phone").val(),
      message: $("#message").val(),  
    }; */}

    {/* // DO POST */}
    {/* $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/website/contact",
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
</script> */}



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


{/* <%- include('partials/footer.ejs') %>  */}
    </>
  )
}

export default Contact
