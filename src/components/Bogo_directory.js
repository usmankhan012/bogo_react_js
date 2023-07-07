import React from 'react'

function Bogo_directory() {
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
  /> */}

  {/* <style>
    .intl-tel-input,
    .iti {
      width: 100%;
    }
  </style>
</head> */}

{/* <!--  --> */}
<div class="header_inner_section">
  <div class="container">
    <div id="inner_section">
      <h1 >BOGO DIRECTORY</h1>
      <h6>Search all the venues in our Directory and see what offers await you</h6>
    </div>
  </div>
</div>



{/* <!-- Body Section Start --> */}
<section class="bodo_directory_section">
  <div class="container">

    {/* <!-- services list --> */}
    <div class="services_list">
      <ul>
        <li><img src="/images/diamond 2.png"/><small>bogo</small></li>
        <li><img src="/images/diamond 2.png"/><small>bogo</small></li>
        <li><img src="/images/diamond 2.png"/><small>bogo</small></li>
        <li><img src="/images/diamond 2.png"/><small>bogo</small></li>
        <li><img src="/images/diamond 2.png"/><small>bogo</small></li>
        <li><img src="/images/diamond 2.png"/><small>bogo</small></li>
        <li><img src="/images/diamond 2.png"/><small>bogo</small></li>
      </ul>
    </div>


  </div>

</section>


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
  }

  var form = $("#addform");
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

export default Bogo_directory
