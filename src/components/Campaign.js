import React from 'react'

function Campaign() {
  return (
    <>
      {/* <%- include('partials/header1.ejs') %> */}

{/* <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    
    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    input:checked + .slider {
      background-color: #2196F3;
    }
    
    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }
    
    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
     */}
    {/*  Rounded sliders */ }
    {/* .slider.round {
      border-radius: 34px;
    }
    
    .slider.round:before {
      border-radius: 50%;
    }
    </style> */}


<div className="campaign-header">
  <div className="container">
    <div className="voucher_preview_row">
        <div className="voucher_preview_box">
            <div className="voucher_preview_row">
                <div className="voucher_preview_box_btn_box">
                   <button className="btn btn-outline-primary voucher_preview_btn">
                    Voucher  Preview
                   </button>
                </div>
            </div>
            <div className="voucher_preview_row">
                <div className="row">
                    <div className="col-3">
                        <img src="/images/voucher_img.png" alt="" className="img-fluid"/>
                        
                    </div>
                    <div className="col-4">
                        <div className="buy-box">
                            <span>BUY</span>
                            <h3>Sushi Platter</h3>
                        </div>
                        <div className="get-box">
                            <span>GET</span>
                            <h3>Sushi Platter</h3>
                        </div>
                    </div>
                    <div className="col-5"> 
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
            </div>
        </div>
    </div>
  </div>
</div>

<div className="campaing-body-section">
  <div className="container">

    {/* <!-- Title --> */}
    <div className="compaing-body-title">
      <h3>CREATE NEW CAMPAIGN</h3>
      <h4 className="offer-text">CHOOSE OFFER TYPE</h4>

    </div>

    {/* <!-- offer box --> */}
    <div className="offer-row">
       <ul id="tabs-nav">
          <li className="offer-box" >
            <a href="#tab1" >
              <h3>BUY ONE <br/>
                GET ONE</h3>
            </a>
            
          </li>
          <li className="offer-box" >
            <a href="#tab2">
              <h3>BUY X <br/>
                GET Y</h3>
            </a>
            
          </li>
          <li className="offer-box" >
            <a href="#tab3">
              <h3>BUY BUNDLE <br/>
                GET UNIT</h3>
            </a>
            
          </li>
       </ul>

       <div className="compare-text-box">
          <h4 data-bs-toggle="modal" data-bs-target="#compareModal">COMPARE OFFER TYPES</h4>
       </div>
    </div>

  </div>


  
  <div className="container">
    {/* <!-- offer form input 1 --> */}
    <div className="offer_form_section1 tab-content" id="tab1">
       <form method="" action="" className=" offer_input_box offer_input_box1">

        {/* <!-- tab content 1 --> */}
        <div className=""  >
            <div className="row ">
              <div className="col-12">
                <div className="input-box ">
                  <label for="">Full Name</label>
                  <input type="text" name="name" id="name" className="form-control" required=""  placeholder="Example: Sushi Platter"/>
                </div>
              </div>
            </div>
    
            <div className="row ">
              <div className="col-12">
                <div className="input-box ">
                  <label for="">Estimated Savings?</label>
                  <input type="text" name="name" id="name" className="form-control" required=""  placeholder="AED"/>
                </div>
              </div>
            </div>
            
    
            <div className="row">
              <div className="col-12">
                <div className="input-box" >
                        
                  <label for="" >Sub Category</label>
    
                  <select id="search-list"  className="selectpicker sub_category form-control multi-select-input"name="businessSub_category_id" multiple aria-label="Default select example" data-live-search="true" >
    
                    <option value="demo1"> Demo 1</option>
                    <option value="demo2"> Demo 2</option>
                    <option value="demo3"> Demo 3</option>
                    <option value="demo4"> Demo 4</option>
    
                  </select>
    
                </div>
              </div>
            </div>
        </div>

        
        

        <div className="row mt-3">
          <div className="days-input-row">
            <label for=""> Day of the week</label>
            <div className="checkbox-container">
              {/* <!-- <label className="checkbox-label">
                <span>All</span>
                <div className="input_bg allday_box">
                  <input type="checkbox" id="myCheckbox selectall" className="all_dayinput"  />
                  <label for="myCheckbox"></label>
                </div>
                 
              </label> --> */}
              <label className="checkbox-label">
                <span >All</span>
                <div className="input_bg">
                  <input type="checkbox" id="all" className=" selectall"/>
                  <label for="all"></label>
                </div>
                 
              </label>

              <label className="checkbox-label">
                <span >Sun</span>
                <div className="input_bg">
                  <input type="checkbox" id="sunday" className="selectedId"/>
                  <label for="sunday"></label>
                </div>
                 
              </label>

              <label className="checkbox-label">
                <span >Mon</span>
                <div className="input_bg">
                  <input type="checkbox" id="monday" className="selectedId"/>
                  <label for="monday"></label>
                </div>
                 
              </label>

              <label className="checkbox-label">
                <span >Tue</span>
                <div className="input_bg">
                  <input type="checkbox" id="tuesday" className="selectedId"/>
                  <label for="tuesday"></label>
                </div>
                 
              </label>

              <label className="checkbox-label">
                <span >wed</span>
                <div className="input_bg">
                  <input type="checkbox" id="wednesday" className="selectedId"/>
                  <label for="wednesday"></label>
                </div>
                 
              </label>

              <label className="checkbox-label">
                <span >Thu</span>
                <div className="input_bg">
                  <input type="checkbox" id="Thursday" className="selectedId"/>
                  <label for="Thursday"></label>
                </div>
                 
              </label>
              
              <label className="checkbox-label">
                <span >Fri</span>
                <div className="input_bg">
                  <input type="checkbox" id="friday" className="selectedId"/>
                  <label for="friday"></label>
                </div>
                 
              </label>

              <label className="checkbox-label">
                <span >Sat</span>
                <div className="input_bg">
                  <input type="checkbox" id="saturday" className="selectedId"/>
                  <label for="saturday"></label>
                </div>
                 
              </label>

            </div>
          </div>
        </div>

        <div className="row">
            <div className="offday_row">
                <label for="">Exclude weekends</label>
                <label className="switch" >
                    <input type="checkbox" id="switchButton"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>


        <div className="row">
            <div className="offday_row">
                <label for="">Exclude public holidays</label>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
        

        <div className="row">
            <div className="offday_row">
                <label for="">Customize Timing</label>
                <div className="gold_feature_box">
                    <div className="gold-feature">
                        <i className="fa-regular fa-gem"></i>
                        <small> Gold Feature </small>
                    </div>
                    <label className="switch">
                        
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>

        <div className="row">
            <h4 className="modificatin-notification">
                Campaign modifications take 24 hours to take effect.
            </h4>
        </div>


        <div className="row fine-print-row">
            <label for="">Fine Print</label>
            <div className="fine_print_box">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder=""></textarea>
            </div>
        </div>


        <div className="row review_submit_btn_row">
            <div className="next-btn-box review_submit_btn_box tab-pane active" >
                <button type="button" className="btn btn-primary btnNext review_submit_btn">
                    <a href="/Components/Review_campaign">Review and Submit</a>
                </button>
            </div>
        </div>

        

       </form>
    </div>



    {/* <!-- offer form input 2 --> */}
    <div className="offer_form_section1 tab-content" id="tab2"  >
      <form method="" action="" className=" offer_input_box offer_input_box1">


       {/* <!-- tab content 2 --> */}
       <div className="" >
         <div className="row ">
           <div className="col-12">
             <div className="input-box ">
               <label for="">What should they buy?</label>
               <input type="text" name="" id="" className="form-control" required=""  placeholder="Example: Sushi Platter"/>
             </div>
           </div>
         </div>
  
         <div className="row ">
           <div className="col-12">
             <div className="input-box ">
               <label for="">What will they get?</label>
               <input type="text" name="" id="" className="form-control" required=""  placeholder="AED"/>
             </div>
           </div>
         </div>
  
  
  
         <div className="row ">
          <div className="col-12">
            <div className="input-box ">
              <label for="">Estimation Saving</label>
              <input type="text" name="" id="" className="form-control" required=""  placeholder="AED"/>
            </div>
          </div>
        </div>
         
  
         <div className="row">
           <div className="col-12">
             <div className="input-box" >
                     
               <label for="" >Select Branch</label>
  
               <select id="search-list"  className="selectpicker sub_category form-control multi-select-input"name="businessSub_category_id" multiple aria-label="Default select example" data-live-search="true" >
  
                 <option value="demo1"> Demo 1</option>
                 <option value="demo2"> Demo 2</option>
                 <option value="demo3"> Demo 3</option>
                 <option value="demo4"> Demo 4</option>
  
               </select>
  
             </div>
           </div>
         </div>
       </div>

       

       <div className="row mt-3">
         <div className="days-input-row">
           <label for=""> Day of the week</label>
           <div className="checkbox-container">
             {/* <!-- <label className="checkbox-label">
               <span>All</span>
               <div className="input_bg allday_box">
                 <input type="checkbox" id="myCheckbox selectall" className="all_dayinput"  >
                 <label for="myCheckbox"></label>
               </div>
                
             </label> --> */}
             <label className="checkbox-label">
               <span >All</span>
               <div className="input_bg">
                 <input type="checkbox" id="all" className=" selectall"/>
                 <label for="all"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >Sun</span>
               <div className="input_bg">
                 <input type="checkbox" id="sunday" className="selectedId"/>
                 <label for="sunday"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >Mon</span>
               <div className="input_bg">
                 <input type="checkbox" id="monday" className="selectedId"/>
                 <label for="monday"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >Tue</span>
               <div className="input_bg">
                 <input type="checkbox" id="tuesday" className="selectedId"/>
                 <label for="tuesday"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >wed</span>
               <div className="input_bg">
                 <input type="checkbox" id="wednesday" className="selectedId"/>
                 <label for="wednesday"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >Thu</span>
               <div className="input_bg">
                 <input type="checkbox" id="Thursday" className="selectedId"/>
                 <label for="Thursday"></label>
               </div>
                
             </label>
             
             <label className="checkbox-label">
               <span >Fri</span>
               <div className="input_bg">
                 <input type="checkbox" id="friday" className="selectedId"/>
                 <label for="friday"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >Sat</span>
               <div className="input_bg">
                 <input type="checkbox" id="saturday" className="selectedId"/>
                 <label for="saturday"></label>
               </div>
                
             </label>

           </div>
         </div>
       </div>

       <div className="row">
           <div className="offday_row">
               <label for="">Exclude weekends</label>
               <label className="switch" >
                   <input type="checkbox" id="switchButton"/>
                   <span className="slider round"></span>
               </label>
           </div>
       </div>


       <div className="row">
           <div className="offday_row">
               <label for="">Exclude public holidays</label>
               <label className="switch">
                   <input type="checkbox"/>
                   <span className="slider round"></span>
               </label>
           </div>
       </div>
       

       <div className="row">
           <div className="offday_row">
               <label for="">Customize Timing</label>
               <div className="gold_feature_box">
                   <div className="gold-feature">
                       <i className="fa-regular fa-gem"></i>
                       <small> Gold Feature </small>
                   </div>
                   <label className="switch">
                       
                       <input type="checkbox"/>
                       <span className="slider round"></span>
                   </label>
               </div>
           </div>
       </div>

       <div className="row">
           <h4 className="modificatin-notification">
               Campaign modifications take 24 hours to take effect.
           </h4>
       </div>


       <div className="row fine-print-row">
           <label for="">Fine Print</label>
           <div className="fine_print_box">
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder=""></textarea>
           </div>
       </div>


       <div className="row review_submit_btn_row">
           <div className="next-btn-box review_submit_btn_box tab-pane active" >
               <button type="button" className="btn btn-primary btnNext review_submit_btn">
                   <a href="/website/pages/review_campaign">Review and Submit</a>
               </button>
           </div>
       </div>

       

      </form>
    </div>


    {/* <!-- offer form input 3 --> */}
    <div className="offer_form_section1 tab-content" id="tab3">
      <form method="" action="" className=" offer_input_box offer_input_box1">

       {/* <!-- tab content 3 --> */}
       <div className="" >

         <div className="row ">
           <div className="col-12">
             <div className="input-box ">
               <label for="">What should they buy?</label>
               <input type="text" name="" id="" className="form-control" required=""  placeholder="Example: Sushi Platter"/>
             </div>
           </div>
         </div>
  
         <div className="row ">
           <div className="col-12">
             <div className="input-box ">
               <label for="">What will they get?</label>
               <input type="text" name="" id="" className="form-control" required=""  placeholder="AED"/>
             </div>
           </div>
         </div>
  
  
  
         <div className="row ">
          <div className="col-12">
            <div className="input-box ">
              <label for="">Estimation Saving</label>
              <input type="text" name="" id="" className="form-control" required=""  placeholder="AED"/>
            </div>
          </div>
        </div>
         
  
         <div className="row">
           <div className="col-12">
             <div className="input-box" >
                     
               <label for="" >Select Branch</label>
  
               <select id="search-list"  className="selectpicker sub_category form-control multi-select-input"name="businessSub_category_id" multiple aria-label="Default select example" data-live-search="true" >
  
                 <option value="demo1"> Demo 1</option>
                 <option value="demo2"> Demo 2</option>
                 <option value="demo3"> Demo 3</option>
                 <option value="demo4"> Demo 4</option>
  
               </select>
  
             </div>
           </div>
         </div>

       </div>
       

       <div className="row mt-3">
         <div className="days-input-row">
           <label for=""> Day of the week</label>
           <div className="checkbox-container">
             {/* <!-- <label className="checkbox-label">
               <span>All</span>
               <div className="input_bg allday_box">
                 <input type="checkbox" id="myCheckbox selectall" className="all_dayinput"  >
                 <label for="myCheckbox"></label>
               </div>
                
             </label> --> */}
             <label className="checkbox-label">
               <span >All</span>
               <div className="input_bg">
                 <input type="checkbox" id="all" className=" selectall"/>
                 <label for="all"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >Sun</span>
               <div className="input_bg">
                 <input type="checkbox" id="sunday" className="selectedId"/>
                 <label for="sunday"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >Mon</span>
               <div className="input_bg">
                 <input type="checkbox" id="monday" className="selectedId"/>
                 <label for="monday"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >Tue</span>
               <div className="input_bg">
                 <input type="checkbox" id="tuesday" className="selectedId"/>
                 <label for="tuesday"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >wed</span>
               <div className="input_bg">
                 <input type="checkbox" id="wednesday" className="selectedId"/>
                 <label for="wednesday"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >Thu</span>
               <div className="input_bg">
                 <input type="checkbox" id="Thursday" className="selectedId"/>
                 <label for="Thursday"></label>
               </div>
                
             </label>
             
             <label className="checkbox-label">
               <span >Fri</span>
               <div className="input_bg">
                 <input type="checkbox" id="friday" className="selectedId"/>
                 <label for="friday"></label>
               </div>
                
             </label>

             <label className="checkbox-label">
               <span >Sat</span>
               <div className="input_bg">
                 <input type="checkbox" id="saturday" className="selectedId"/>
                 <label for="saturday"></label>
               </div>
                
             </label>

           </div>
         </div>
       </div>

       <div className="row">
           <div className="offday_row">
               <label for="">Exclude weekends</label>
               <label className="switch" >
                   <input type="checkbox" id="switchButton"/>
                   <span className="slider round"></span>
               </label>
           </div>
       </div>


       <div className="row">
           <div className="offday_row">
               <label for="">Exclude public holidays</label>
               <label className="switch">
                   <input type="checkbox"/>
                   <span className="slider round"></span>
               </label>
           </div>
       </div>
       

       <div className="row">
           <div className="offday_row">
               <label for="">Customize Timing</label>
               <div className="gold_feature_box">
                   <div className="gold-feature">
                       <i className="fa-regular fa-gem"></i>
                       <small> Gold Feature </small>
                   </div>
                   <label className="switch">
                       
                       <input type="checkbox"/>
                       <span className="slider round"></span>
                   </label>
               </div>
           </div>
       </div>

       <div className="row">
           <h4 className="modificatin-notification">
               Campaign modifications take 24 hours to take effect.
           </h4>
       </div>


       <div className="row fine-print-row">
           <label for="">Fine Print</label>
           <div className="fine_print_box">
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder=""></textarea>
           </div>
       </div>


       <div className="row review_submit_btn_row">
           <div className="next-btn-box review_submit_btn_box tab-pane active" >
               <button type="button" className="btn btn-primary btnNext review_submit_btn">
                   <a href="/pages/review_campaign">Review and Submit</a>
               </button>
           </div>
       </div>

       

      </form>
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
        <button type="button" className="btn " data-bs-dismiss="modal" style={{backgroundColor:"#029CAB", color: "#fff"}}>Close</button>
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





    </>
  )
}

export default Campaign
