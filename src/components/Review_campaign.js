import React from 'react'

function Review_campaign() {
  return (
    <>
      {/* <%- include('partials/header1.ejs') %> */}

{/* <style>
  #otpdiv{

    display: none;
  }
  #otpdiv.hide {
  display: block;
}

</style> */}



<div className="campaign-header">
  <div className="container">
    
    <div className="inner-hero-section-short">
      <h2 data-aos="flip-up" className="aos-init aos-animate">Review your campaign</h2>
      <span data-aos="flip-down" className="aos-init aos-animate">This is how your campaign will appear to customers</span>
    </div>
    
  </div>
</div>

<div className="campaing-body-section">
  <div className="container">

    <div className="review_compaign_row">
      <div className="review_campaign_box">
        <div className="base_img">
          <div className="voucher_preview_datarow">
            <div className="offer_voucher_box">
              <img src="/images/voucher_img.png" alt="" className="img-fluid"/>
            </div>
            <div className="offer_voucher_box">
                <div className="buy-box">
                    <span>BUY</span>
                    <h3>Sushi Platter</h3>
                </div>
                <div className="get-box">
                    <span>GET</span>
                    <h3>Sushi Platter</h3>
                </div>
            </div>
            <div className="offer_voucher_box">
              <div className="buy-box">
                  <span>VALIDITY
                      </span>
                  <h3>S M T W T F S</h3>
              </div>
              <div className="get-box">
                  <span>Est. Savings
                      </span>
                  <h3>AED 250</h3>
              </div>
            </div>
          </div>
          <div className="voucher_code_row row">
            <div className="col-md-5">
              <div className="voucher_code_box">
                <h4>USE MERCHANT PIN
                  FOR THIS CAMPAIGN</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div className="toggler_code_box">

                <label className="switch">
                  <input type="checkbox" id="toggleSwitch"/>
                  <span className="slider round"></span>
                </label>
                
              </div>
            </div>
            <div className="col-md-5">
              <div className="merchant_box-code">
                <h4>MERCHANT PIN</h4>
                <div className="verification-code-box" id="otpdiv">
                  <div className="verification-code-box-inputs-row">
                    <input type="text" maxlength="1" />
                    <input type="text" maxlength="1" />
                    <input type="text" maxlength="1" />
                    <input type="text" maxlength="1" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="validity_row">
            <div className="validity_box">
              <h4>VALIDITY</h4>
              <ul>
                <li>S    11:00 - 23:00</li>
                <li>M   11:00 - 23:00</li>
                <li>T    11:00 - 23:00</li>
                <li> W  11:00 - 23:00</li>
                <li>T    11:00 - 23:00</li>
                <li>F    Not available</li>
                <li>S    Not available</li>
              </ul>
            </div>
            <div className="fine_print">
                    <h4>FINE PRINT</h4>
                    <div className="fine_print_outbox">
                      <span>
                        This Buy 1 Get 1 Voucher excludes all Family-sized Platters.
                      </span>
                    </div>
            </div>
          </div>

        </div>

        <div className="termsCondition">
          <h4>By creating a campaign, you agree to BOGO’s 
            Terms and Conditions and Privacy Policy. </h4>
        </div>

        <div className="row">
          <div className="col-12">
            <button type="submit" className="fullsubmitbtn">
              Publish Campaign
            </button>
          </div>

          <div className="col-12">
            <div className="savedraftbtn_row">
              <span className="saveDraftbtn">Save Draft</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>

  </div>


</div>










{/* <!-- compare modal start  --> */}
{/* <!-- The Modal --> */}
<div className="modal" id="compareModal">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Offer Types</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
        <div className="row">
          <div className="col-md-4">
            <div className="compare_offer_box">
              <h5>Buy X Get Y</h5>
              <div className="img">
                <img src="/images/voucher_img0.png" alt="" className="img-fluid"/>
              </div>
              <div className="compare_text">
                <span>
                  Buy 1 Get 1 deals are best suited to couples, groups of friends of co-workers
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="compare_offer_box">
              <h5>Buy X Get Y</h5>
              <div className="img">
                <img src="/images/voucher_img1.png" alt="" className="img-fluid"/>
              </div>
              <div className="compare_text">
                <span>
                  Buy X Get Y deals are best suited for solo customers
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="compare_offer_box">
              <h5>Buy X Get Y</h5>
              <div className="img">
                <img src="/images/voucher_img2.png" alt="" className="img-fluid"/>
              </div>
              <div className="compare_text">
                <span>
                  Buy Bundle Get Unit deals are best suited for large volume buyers, like families or big groups.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal footer --> */}
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
{/* <!-- compare modal end  --> */}


{/* <%- include('partials/footer.ejs') %> */}









{/* <!-- All check box input script  --> */}
{/* <script>
    $(document).ready(function () {
    $('.selectall').click(function () {
        $('.selectedId').prop('checked', this.checked);
    });

    $('.selectedId').change(function () {
        var check = ($('.selectedId').filter(":checked").length == $('.selectedId').length);
        $('.selectall').prop("checked", check);
    });
});
</script> */}



{/* <!-- Tab Slider by jquey script  --> */}
{/* <script>
  // Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});
</script> */}


{/* // code verification */}
{/* <script>
  //Code Verification
var verificationCode = [];
$(".verification-code-box input[type=text]").keyup(function (e) {
  
  // Get Input for Hidden Field
  $(".verification-code-box input[type=text]").each(function (i) {
    verificationCode[i] = $(".verification-code-box input[type=text]")[i].value; 
    $('#verificationCode').val(Number(verificationCode.join('')));
    //console.log( $('#verificationCode').val() );
  });

  //console.log(event.key, event.which);

  if ($(this).val() > 0) {
    if (event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9 || event.key == 0) {
      $(this).next().focus();
    }
  }else {
    if(event.key == 'Backspace'){
        $(this).prev().focus();
    }
  }

}); */}


{/* // keyup */}

{/* $('.verification-code-box input').on("paste",function(event,pastedValue){
  console.log(event)
  $('#txt').val($content)
  console.log($content)
  //console.log(values)
});

$editor.on('paste, keydown', function() {http://jsfiddle.net/5bNx4/#run
var $self = $(this);            
              setTimeout(function(){ 
                var $content = $self.html();             
                $clipboard.val($content);
            },100);
     });
</script> */}





{/* <!-- On click toggle switch button hide and show otp box --> */}
{/* <script>
  $(document).ready(function() {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const myDiv = document.getElementById('otpdiv');

  toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
      myDiv.classNameList.add('hide');
    } else {
      myDiv.classNameList.remove('hide');
    }
  });
});

</script> */}




    </>
  )
}

export default Review_campaign
