import React from 'react'

function Campaign_report() {
  return (
    <>
      {/* <%- include('partials/header1.ejs') %> */}




<div className="campaign-header">
  <div className="container">
    <div className="voucher_preview_row">
        <div className="base_row">
            <img src="/images/base2.png" alt="" className="img-fluid"/>
            <div className="campaign_report_box">

                
            

                <div className="base_text_box">
                    <h3>Create and launch your campaign</h3>
                </div>
    
                <div className="base_video_row">
                    <i className="fa-regular fa-circle-play"></i>
                    <a href="">Watch how it works</a>
                </div>
    
            </div>
        </div>
    </div>
  </div>
</div>

<div className="campaing-body-section">
  <div className="container">

    {/* <!-- Title --> */}
    <div className="compaing-report-body-title">
      <h3>Campaign Report</h3>

    </div>

  </div>


  
  <div className="container">
    <div className="campaign_report_body">

        
        <div className="row">
            <div className="col-md-6">
                <div className="campaign_name_row">
                    <div className="campaign_name_box" >
                        <h3>Campaign Name</h3>
                        <h3>Date From - Date To</h3>
                    </div>
                </div>


                <div className="campaign_name_row">
                  <div className="campaign_name_box" >
                      <h3>Campaign Name</h3>
                      <h3>Date From - Date To</h3>
                  </div>
              </div>
                
            </div>
            
            <div className="col-md-6">
                <div className="voucher_redeemed-row">
                    <div className="vouchers_redeemed" >
                        <h3>10</h3>
                        <h4>Vouchers Redeemed</h4>
                    </div>
                </div>


                <div className="voucher_redeemed-row">
                  <div className="vouchers_redeemed" >
                      <h3>10</h3>
                      <h4>Vouchers Redeemed</h4>
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
        <button type="button" className="btn " data-bs-dismiss="modal" style={{backgroundColor:"#029CAB" ,color: "#fff"}}>Close</button>
      </div>

    </div>
  </div>
</div>
{/* <!-- compare modal end  --> */}


{/* <%- include('partials/footer.ejs') %> */}












    </>
  )
}

export default Campaign_report
