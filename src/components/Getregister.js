import React from 'react'

function Getregister() {
    return (
        <>


            {/* <%- include('partials/header.ejs') %> */}






            <form id="ADDbusiness">
                <div className="merchant_main_top_section">
                    <div className="container">

                        <div className="row">
                            <div className="merchant_hedding">
                                <h1>Merchant Registration</h1>
                                <p>What type of business are you?</p>
                            </div>
                        </div>

                        {/* <!-- merchant header nav --> */}
                        <div className="row merchant_outer_inner_section">
                            <div className="col-12">


                                <ul className="nav nav-tabs merchent-nav-box" role="tablist">
                                    {/* <% business_category.forEach(element => { %> */}


                                    <li className="nav-item Category">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                                            <input type="radio" className="btn-check" name="business_category_id" value="<%= element._id %>" id="buss_type" autocomplete="off" checked />
                                            <label className="btn businessCategoryID" data-id="<%=  element._id %>" for="option1">
                                                <img src="/images/Business_Category" alt="" />
                                                {/* <span><%= element.name %></span> */}
                                            </label>
                                        </a>
                                    </li>

                                    {/* <% }) %> */}
                                    {/* <!-- <li className="nav-item">
                                        <a className="nav-link Category" data-toggle="tab" href="#tabs-5" role="tab">
                                            <input type="radio" className="btn-check" name="business_category_id" value="6431325d5138df47075e00de" id="buss_type" autocomplete="off" />
                                            <label className="btn" for="option1">
                                                <img src="/website//website/images/fork 2.svg" alt="" className="img-fluid">
                                                    <span>Spas & Salons</span>
                                            </label>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link Category" data-toggle="tab" href="#tabs-6" role="tab">
                                            <input type="radio" className="btn-check" name="business_type" value="643132765138df47075e00df" id="buss_type" autocomplete="off" />
                                            <label className="btn" for="option1">
                                                <img src="/website//website/images/fork 3.png" alt="" className="img-fluid">
                                                    <span>Fitness</span>
                                            </label>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link  Category " data-toggle="tab" href="#tabs-7" role="tab">
                                            <input type="radio" className="btn-check" name="business_type" value="643132995138df47075e00e0" id="buss_type" autocomplete="off" />
                                            <label className="btn" for="option1">
                                                <img src="/website//website/images/fork 4.png" alt="" className="img-fluid">
                                                    <span>Services</span>
                                            </label>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link  Category" data-toggle="tab" href="#tabs-8" role="tab">
                                            <input type="radio" className="btn-check" name="business_type" value="643132aa5138df47075e00e1" id="buss_type" autocomplete="off" />
                                            <label className="btn" for="option1">
                                                <img src="/website//website/images/fork 5.png" alt="" className="img-fluid">
                                                    <span>Hotels</span>
                                            </label>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link Category" data-toggle="tab" href="#tabs-9" role="tab">
                                            <input type="radio" className="btn-check" name="business_type" value="643132eaae96e249ee46f8ac" id="buss_type" autocomplete="off" />
                                            <label className="btn" for="option1">
                                                <img src="/website//website/images/fork 6.png" alt="" className="img-fluid">
                                                    <span>Entertainment</span>
                                            </label>
                                        </a>
                                    </li> --> */}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="Business_Information_section">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="Business_hedding_section">
                                    <h1>Business Information</h1>
                                    <p>Type Your Bussiness Name</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- merchant map row --> */}
                        <div className="row">

                            <div className="col-md-12 Business_Information_map_section">

                                <div className="Business_Information_map">
                                    <div className="form-group">
                                        <i className="fas fa-search search__icon" id="search-icon"></i>
                                        <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your business name" />
                                    </div>
                                </div>

                                {/* <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.82142629925042!2d55.16932393261314!3d25.09702630206584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bf4e058c015%3A0xc376b766e159d8ae!2sKaffe%20Bloom!5e0!3m2!1sen!2sin!4v1676970918910!5m2!1sen!2sin"
                                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe> */}


                                <div className="connect-g-bussi text-center">
                                    <div className="conn-g-bussi-btn btn btn-primary">
                                        Connect Google Business Account
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="business_form_main_section">
                            <ul className="nav nav-tabs " role=" tablist">
                                <li className="nav-item focus-active">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Store</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Integration</a>
                                </li>
                            </ul>

                            {/* <!-- Tab panes --> */}
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel" >
                                    {/* <!-- <form> --> */}
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12">
                                            <div className="input-box">
                                                <label for="inputname">Business name</label>
                                                <input type="text" name="business_name" id="buss_name" className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="input-box">
                                                <label for="inputAddress">Address</label>
                                                <input type="text" name="address" id="buss_address" className="form-control" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">

                                            <div className="input-box">
                                                <label for="inputCountry">Country</label>
                                                <select className="form-control" name="" id="buss_country">
                                                    <option value="">Select Country</option>
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American Samoa">American Samoa</option>
                                                    <option value="Andorra">Andorra</option>
                                                    <option value="Angola">Angola</option>
                                                    <option value="Anguilla">Anguilla</option>
                                                    <option value="Antartica">Antarctica</option>
                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                    <option value="Argentina">Argentina</option>
                                                    <option value="Armenia">Armenia</option>
                                                    <option value="Aruba">Aruba</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Austria">Austria</option>
                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                    <option value="Bahamas">Bahamas</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Barbados">Barbados</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Belize">Belize</option>
                                                    <option value="Benin">Benin</option>
                                                    <option value="Bermuda">Bermuda</option>
                                                    <option value="Bhutan">Bhutan</option>
                                                    <option value="Bolivia">Bolivia</option>
                                                    <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                                                    <option value="Botswana">Botswana</option>
                                                    <option value="Bouvet Island">Bouvet Island</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                    <option value="Bulgaria">Bulgaria</option>
                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                    <option value="Burundi">Burundi</option>
                                                    <option value="Cambodia">Cambodia</option>
                                                    <option value="Cameroon">Cameroon</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Cape Verde">Cape Verde</option>
                                                    <option value="Cayman Islands">Cayman Islands</option>
                                                    <option value="Central African Republic">Central African Republic</option>
                                                    <option value="Chad">Chad</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="China">China</option>
                                                    <option value="Christmas Island">Christmas Island</option>
                                                    <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                                                    <option value="Colombia">Colombia</option>
                                                    <option value="Comoros">Comoros</option>
                                                    <option value="Congo">Congo</option>
                                                    <option value="Congo">Congo, the Democratic Republic of the</option>
                                                    <option value="Cook Islands">Cook Islands</option>
                                                    <option value="Costa Rica">Costa Rica</option>
                                                    <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                                                    <option value="Croatia">Croatia (Hrvatska)</option>
                                                    <option value="Cuba">Cuba</option>
                                                    <option value="Cyprus">Cyprus</option>
                                                    <option value="Czech Republic">Czech Republic</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Djibouti">Djibouti</option>
                                                    <option value="Dominica">Dominica</option>
                                                    <option value="Dominican Republic">Dominican Republic</option>
                                                    <option value="East Timor">East Timor</option>
                                                    <option value="Ecuador">Ecuador</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="El Salvador">El Salvador</option>
                                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                    <option value="Eritrea">Eritrea</option>
                                                    <option value="Estonia">Estonia</option>
                                                    <option value="Ethiopia">Ethiopia</option>
                                                    <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                                                    <option value="Faroe Islands">Faroe Islands</option>
                                                    <option value="Fiji">Fiji</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="France">France</option>
                                                    <option value="France Metropolitan">France, Metropolitan</option>
                                                    <option value="French Guiana">French Guiana</option>
                                                    <option value="French Polynesia">French Polynesia</option>
                                                    <option value="French Southern Territories">French Southern Territories</option>
                                                    <option value="Gabon">Gabon</option>
                                                    <option value="Gambia">Gambia</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Ghana">Ghana</option>
                                                    <option value="Gibraltar">Gibraltar</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="Greenland">Greenland</option>
                                                    <option value="Grenada">Grenada</option>
                                                    <option value="Guadeloupe">Guadeloupe</option>
                                                    <option value="Guam">Guam</option>
                                                    <option value="Guatemala">Guatemala</option>
                                                    <option value="Guinea">Guinea</option>
                                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                    <option value="Guyana">Guyana</option>
                                                    <option value="Haiti">Haiti</option>
                                                    <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                                                    <option value="Holy See">Holy See (Vatican City State)</option>
                                                    <option value="Honduras">Honduras</option>
                                                    <option value="Hong Kong">Hong Kong</option>
                                                    <option value="Hungary">Hungary</option>
                                                    <option value="Iceland">Iceland</option>
                                                    <option value="India">India</option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="Iran">Iran (Islamic Republic of)</option>
                                                    <option value="Iraq">Iraq</option>
                                                    <option value="Ireland">Ireland</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Jamaica">Jamaica</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Jordan">Jordan</option>
                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                    <option value="Kenya">Kenya</option>
                                                    <option value="Kiribati">Kiribati</option>
                                                    <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                                                    <option value="Korea">Korea, Republic of</option>
                                                    <option value="Kuwait">Kuwait</option>
                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                    <option value="Lao">Lao People's Democratic Republic</option>
                                                    <option value="Latvia">Latvia</option>
                                                    <option value="Lebanon" >Lebanon</option>
                                                    <option value="Lesotho">Lesotho</option>
                                                    <option value="Liberia">Liberia</option>
                                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                    <option value="Liechtenstein">Liechtenstein</option>
                                                    <option value="Lithuania">Lithuania</option>
                                                    <option value="Luxembourg">Luxembourg</option>
                                                    <option value="Macau">Macau</option>
                                                    <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                                                    <option value="Madagascar">Madagascar</option>
                                                    <option value="Malawi">Malawi</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Maldives">Maldives</option>
                                                    <option value="Mali">Mali</option>
                                                    <option value="Malta">Malta</option>
                                                    <option value="Marshall Islands">Marshall Islands</option>
                                                    <option value="Martinique">Martinique</option>
                                                    <option value="Mauritania">Mauritania</option>
                                                    <option value="Mauritius">Mauritius</option>
                                                    <option value="Mayotte">Mayotte</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Micronesia">Micronesia, Federated States of</option>
                                                    <option value="Moldova">Moldova, Republic of</option>
                                                    <option value="Monaco">Monaco</option>
                                                    <option value="Mongolia">Mongolia</option>
                                                    <option value="Montserrat">Montserrat</option>
                                                    <option value="Morocco">Morocco</option>
                                                    <option value="Mozambique">Mozambique</option>
                                                    <option value="Myanmar">Myanmar</option>
                                                    <option value="Namibia">Namibia</option>
                                                    <option value="Nauru">Nauru</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Netherlands">Netherlands</option>
                                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                    <option value="New Caledonia">New Caledonia</option>
                                                    <option value="New Zealand">New Zealand</option>
                                                    <option value="Nicaragua">Nicaragua</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    <option value="Niue">Niue</option>
                                                    <option value="Norfolk Island">Norfolk Island</option>
                                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                    <option value="Norway">Norway</option>
                                                    <option value="Oman">Oman</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Palau">Palau</option>
                                                    <option value="Panama">Panama</option>
                                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                                    <option value="Paraguay">Paraguay</option>
                                                    <option value="Peru">Peru</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Pitcairn">Pitcairn</option>
                                                    <option value="Poland">Poland</option>
                                                    <option value="Portugal">Portugal</option>
                                                    <option value="Puerto Rico">Puerto Rico</option>
                                                    <option value="Qatar">Qatar</option>
                                                    <option value="Reunion">Reunion</option>
                                                    <option value="Romania">Romania</option>
                                                    <option value="Russia">Russian Federation</option>
                                                    <option value="Rwanda">Rwanda</option>
                                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                    <option value="Saint LUCIA">Saint LUCIA</option>
                                                    <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                                                    <option value="Samoa">Samoa</option>
                                                    <option value="San Marino">San Marino</option>
                                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                                    <option value="Senegal">Senegal</option>
                                                    <option value="Seychelles">Seychelles</option>
                                                    <option value="Sierra">Sierra Leone</option>
                                                    <option value="Singapore">Singapore</option>
                                                    <option value="Slovakia">Slovakia (Slovak Republic)</option>
                                                    <option value="Slovenia">Slovenia</option>
                                                    <option value="Solomon Islands">Solomon Islands</option>
                                                    <option value="Somalia">Somalia</option>
                                                    <option value="South Africa">South Africa</option>
                                                    <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                                                    <option value="Span">Spain</option>
                                                    <option value="SriLanka">Sri Lanka</option>
                                                    <option value="St. Helena">St. Helena</option>
                                                    <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                                                    <option value="Sudan">Sudan</option>
                                                    <option value="Suriname">Suriname</option>
                                                    <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                                                    <option value="Swaziland">Swaziland</option>
                                                    <option value="Sweden">Sweden</option>
                                                    <option value="Switzerland">Switzerland</option>
                                                    <option value="Syria">Syrian Arab Republic</option>
                                                    <option value="Taiwan">Taiwan, Province of China</option>
                                                    <option value="Tajikistan">Tajikistan</option>
                                                    <option value="Tanzania">Tanzania, United Republic of</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Togo">Togo</option>
                                                    <option value="Tokelau">Tokelau</option>
                                                    <option value="Tonga">Tonga</option>
                                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                    <option value="Tunisia">Tunisia</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Turkmenistan">Turkmenistan</option>
                                                    <option value="Turks and Caicos">Turks and Caicos Islands</option>
                                                    <option value="Tuvalu">Tuvalu</option>
                                                    <option value="Uganda">Uganda</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="United States">United States</option>
                                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                    <option value="Uruguay">Uruguay</option>
                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                    <option value="Vanuatu">Vanuatu</option>
                                                    <option value="Venezuela">Venezuela</option>
                                                    <option value="Vietnam">Viet Nam</option>
                                                    <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                                    <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                                                    <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                                                    <option value="Western Sahara">Western Sahara</option>
                                                    <option value="Yemen">Yemen</option>
                                                    <option value="Serbia">Serbia</option>
                                                    <option value="Zambia">Zambia</option>
                                                    <option value="Zimbabwe">Zimbabwe</option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="row form-input-box">
                                        <div className="col-md-4 col-sm-12">
                                            <div className="input-box">
                                                <label for="inputcode">Postal Code</label>
                                                <input type="text" name="postal_code" id="buss_postal_code" className="form-control" placeholder="000000" />
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <div className="input-box">
                                                <label for="inputcity">State/City</label>
                                                <input type="text" name="city" id="buss_city" className="form-control" placeholder="Country" />

                                            </div>

                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="input-box" >

                                                <label for="" >Category</label>

                                                <select className="form-control" name="country" id="buss_country">
                                                    <option value="">Select Country</option>
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                </select>


                                                {/* <!-- <select className="selectpicker form-control multi-select-input" name="businessSub_category_id" multiple aria-label="Default select example" data-live-search="true"> --> */}
                                                {/* <!-- <option value="">Select Business Subcategory</option>
                                                    <option value="">Select Business Subcategory</option>
                                                    <option value="">Select Business Subcategory</option> --> */}
                                                {/* <%# sub_category.forEach(element => { %> */}
                                                {/* < !-- < option value="<%# element.id %>"><%# element.name %></option> --> */}
                                                {/* <%# }) %> */}
                                                {/* <!-- <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Four</option> --> */}
                                                {/* <!-- </select> --> */}

                                                {/* <!-- <div id="output"></div> --> */}
                                                {/* <!-- <div className="form-group  form-control" style="background-color: #f7f7f7;">
                                                <select data-placeholder="Choose course..." name="course_id" multiple className="chosen-select "  >



                                                </select>
                                            </div> --> */}
                                            </div>




                                        </div>
                                    </div>


                                    <div className="row form-input-box hour_operation">

                                        <div className="col-md-5  col-lg-4 col-sm-12">
                                            <label for="inputhours" className="inputhours">Hours of Operation</label>

                                            <div className="row ">

                                                <div className="col-12 day-box day-box1">
                                                    <span>Sunday </span>
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>


                                                </div>
                                                <div className="col-12">
                                                    <div className="hour-box hour-box1">
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="sunday_from" placeholder="7:00 AM" />
                                                            </div>
                                                            <div className="col-2 text-center to-text">
                                                                To
                                                            </div>
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="sunday_to" placeholder="10:30 PM" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="row ">

                                                <div className="col-12 day-box day-box2">
                                                    <span>Monday </span>
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>


                                                </div>
                                                <div className="col-12">
                                                    <div className="hour-box hour-box2">
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="monday_from" placeholder="7:00 AM" />
                                                            </div>
                                                            <div className="col-2 text-center to-text">
                                                                To
                                                            </div>
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="monday_to" placeholder="10:30 PM" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="row ">

                                                <div className="col-12 day-box day-box3">
                                                    <span>Tuesday </span>
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>


                                                </div>
                                                <div className="col-12">
                                                    <div className="hour-box hour-box3">
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="tuesday_from" placeholder="7:00 AM" />
                                                            </div>
                                                            <div className="col-2 text-center to-text">
                                                                To
                                                            </div>
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="tuesday_to" placeholder="10:30 PM" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="row">

                                                <div className="col-12 day-box day-box4">
                                                    <span>Wednesday </span>
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>


                                                </div>
                                                <div className="col-12">
                                                    <div className="hour-box hour-box4">
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="wednesday_from" placeholder="7:00 AM" />
                                                            </div>
                                                            <div className="col-2 text-center to-text">
                                                                To
                                                            </div>
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="wednesday_to" placeholder="10:30 PM" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="row ">

                                                <div className="col-12 day-box day-box5">
                                                    <span>Thursday </span>
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>


                                                </div>
                                                <div className="col-12">
                                                    <div className="hour-box hour-box5">
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="thursday_from" placeholder="7:00 AM" />
                                                            </div>
                                                            <div className="col-2 text-center to-text">
                                                                To
                                                            </div>
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="thursday_to" placeholder="10:30 PM" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="row ">

                                                <div className="col-12 day-box day-box6">
                                                    <span>Friday </span>
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>


                                                </div>
                                                <dvi className="col-12">
                                                    <div className="hour-box hour-box6">
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="friday_from" placeholder="7:00 AM" />
                                                            </div>
                                                            <div className="col-2 text-center to-text">
                                                                To
                                                            </div>
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="friday_to" placeholder="10:30 PM" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dvi>


                                            </div>

                                            <div className="row">

                                                <div className="col-12 day-box day-box7">
                                                    <span>Saturday

                                                    </span>
                                                    <label className="switch">
                                                        <input type="checkbox" value="false" />
                                                        <span className="slider round"></span>
                                                    </label>


                                                </div>
                                                <div className="col-12">
                                                    <div className="hour-box hour-box7">
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="saturday_from" placeholder="7:00 AM" />
                                                            </div>
                                                            <div className="col-2 text-center to-text">
                                                                To
                                                            </div>
                                                            <div className="col-5">
                                                                <input type="time" className="form-control" name="saturday_to" placeholder="10:30 PM" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="row rating-row">
                                                <div className="col-md-12 col-sm-12">
                                                    <p className="m-0">Rating</p>
                                                    <i className="fa-regular fa-star" aria-hidden="true"></i>
                                                    <i className="fa-regular fa-star" aria-hidden="true"></i>
                                                    <i className="fa-regular fa-star" aria-hidden="true"></i>
                                                    <i className="fa-regular fa-star" aria-hidden="true"></i>
                                                    <i className="fa-regular fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>


                                        </div>


                                        <div className="col-md-3  col-lg-4 col-sm-12 black-div"></div>

                                        <div className="col-md-4  col-lg-4 col-sm-12">

                                            {/* <!--  --> */}
                                            <div className="input-box">
                                                <label for="inputCountry">Sub Category</label>
                                                <select className="form-control" name="country" id="buss_country">
                                                    <option value="">Select Country</option>
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                </select>
                                            </div>


                                        </div>


                                    </div>
                                    {/* <!-- </form> --> */}

                                    {/* <!-- Privacy Policy --> */}
                                    <div className="row">

                                        <div className="col-md-12">
                                            <div className="form_privacy_policy_section">
                                                <p>By creating an account, you agree to BOGO’s
                                                    <a href="/website/termsConditions">Terms & Conditions</a>  and <a href="/website/privacyPolicy">Privacy Policy</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- next btn --> */}
                                    <div className="row  ">

                                        <div className="col-12 tab-content">
                                            <div className="next-btn-box tab-pane active" id="tabs-1">
                                                <button type="button" className="btn btn-primary btnNext">
                                                    Next
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-2" role="tabpanel">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form_gallery_main_section form-gallery-left-box">
                                                <div className="logo-image-box">
                                                    <h3>Logo</h3>

                                                    <div className="upload_preview_box">
                                                        <div id="imagePreview" >
                                                        </div>
                                                        <span>Upload New</span>
                                                    </div>
                                                </div>
                                                <input type="file" name="brand_logo" id="imageUpload" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form_gallery_main_section form-gallery-right-box" >
                                                <div className="multi-img-box">
                                                    <h3>Banner</h3>
                                                    <div className="multi-img-box-group"  >
                                                        {/* <!-- <img src="/website//website/images/multi-img-upload.png" alt="Upload Image" /> --> */}

                                                        <div id="multi_img">

                                                        </div>
                                                        <input type="file" name="gallery" id="BannerImage" />
                                                        <button type="button" id="upload-button " className="multi-upload_gallery" data-toggle="modal"
                                                            data-target="#uploadImageModal">
                                                            <span>Upload New</span>
                                                        </button>
                                                        {/* 
                                                <!-- <button type="button" id="upload-button " className="multi-upload_gallery" data-toggle="modal"
                                                    data-target="#uploadImageModal">
                                                    <span>Upload New</span>
                                                </button> --> */}
                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-md-12 py-5 text-end">
                                            <div className="form_gallery_main_section upload-banner-img">
                                                <h3>Gallery Image</h3>
                                                <div id="upload-button">

                                                    <img src="/website/images/gallery_img.png" alt="Upload Image" className="profile-pic img-fluid" />

                                                    <div className="upload__box">

                                                        <div className="upload__img-wrap"></div>
                                                        <div className="upload__btn-box">
                                                            <label className="upload__btn">
                                                                <p><span>Upload images</span></p>
                                                                <input type="file" multiple="" data-max_length="20" className="upload__inputfile" />
                                                            </label>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>



                                    </div>

                                    {/* <!-- next btn --> */}
                                    <div className="row  ">

                                        <div className="col-12 tab-content">
                                            <div className="next-btn-box tab-pane active" id="tabs-2">
                                                <button type="button" className="btn btn-primary btnNext">
                                                    Next
                                                </button>

                                                <span className="btnNext btnNextdiv">Skip For Now</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form_left_content_section">
                                                <h4>Instagram</h4>
                                                <button className="form_facebook " style={{ backgroundColor: "#029CAB;" }}>Connect to Instagram</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row insta-gallery-section">
                                        <div className="col-md-4">
                                            <div className="from_last_images_content_section">
                                                <img src="/website//website/images/from_images_5.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="from_last_images_content_section">
                                                <img src="/website//website/images/from_images_5.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="from_last_images_content_section">
                                                <img src="/website//website/images/from_images_5.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="from_last_images_content_section">
                                                <img src="/website//website/images/from_images_5.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="from_last_images_content_section">
                                                <img src="/website//website/images/from_images_5.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="from_last_images_content_section">
                                                <img src="/website//website/images/from_images_5.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="from_last_images_content_section">
                                                <img src="/website//website/images/from_images_5.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="from_last_images_content_section">
                                                <img src="/website//website/images/from_images_5.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="from_last_images_content_section">
                                                <img src="/website//website/images/from_images_5.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-bussi-row">
                                        <div className="col-6">
                                            <div className="form_right_last_content_section g-bussiness">
                                                <p className="m-0">Google Business</p>
                                                <h4 >ID: 454323933747472</h4>
                                                {/* <!-- <input type="submit" placeholder="Submit Details" className="form_facebook btn btn-primary"></input> --> */}
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form_left_last_content_section">
                                                <button className="btn from_fackbook_disconnect">Disconnect</button>
                                            </div>
                                        </div>
                                    </div>



                                    {/* <!-- submit details button --> */}
                                    <div className="row  ">

                                        <div className="col-12 tab-content">
                                            <div className="next-btn-box tab-pane active" id="tabs-2">
                                                <button type="submit" className="btn btn-primary btnNext integration-btn-next">
                                                    Next
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* < !--multipale  upload image modal with --> */}
                <div
                    className="modal fade"
                    id="uploadImageModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Upload Image</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* <!-- <form id="addform"> --> */}

                                {/* <!-- <div className="upload__box">
            <div className="upload__btn-box">
              <label className="upload__btn">
                <p>Upload images</p>
                <input type="file" multiple="" name="gallery" id="buss_gallery" data-max_length="20" className="upload__inputfile"/>
              </label>
            </div>
            <div className="upload__img-wrap"></div>
            
          </div> --> */}

                                <div className="row">
                                    <div className="col-12">
                                        <div className="modal-save-btn">
                                            <button type="button"
                                                className="close multi-upload-close  btn"
                                                data-dismiss="modal"
                                                aria-label="Close" >Save</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- </form> --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--register Modal-- > */}

            </form>


            {/* <% - include('partials/footer.ejs') %> */}



            {/* < !-- < script >

        function getFormData($form) {
            var unindexed_array = $form.serializeArray();
            var indexed_array = {};

            $.map(unindexed_array, function (n, i) {
                indexed_array[n["name"]] = n["value"];
            });

            return indexed_array;
        }
    const formADD = $("#ADDbusiness");
    formADD.on("submit", submitHandler);
    function submitHandler(e) {
        e.preventDefault();

        // if($("#buss_type").valid() == ""){
        //   renderToast({ message: "Please enter business type", icon: "error" });
        // } else if ($("#buss_name").valid() == ""){
        //   renderToast({ message: "Please enter business name", icon: "error" });
        // } else if($("#buss_address").val() == ""){
        //   renderToast({ message: "Please enter address", icon: "error" });
        // } else if ($("#buss_country").val() == ""){
        //   renderToast({ message: "Please enter  country", icon: "error" });
        // } else if ($("#buss_postal_code").val() == ""){
        //   renderToast({ message: "Please enter postal code", icon: "error" });
        // } else if ($("#buss_city").val() == ""){
        //   renderToast({ message: "Please enter city", icon: "error" });
        // } 

        // var formData  = new FormData(this);

        // console.log(formData);

        var formData = getFormData($("#ADDbusiness"));
        console.log(formData);
        return false;

        // DO POST
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/website/profile_update",
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

// </script> --> */}

            {/* < !-- < script > */}
            {/* function getFormData($form) {
            var unindexed_array = $form.serializeArray();
            var indexed_array = {};

            $.map(unindexed_array, function (n, i) {
                indexed_array[n["name"]] = n["value"];
            });

            return indexed_array;
        }

    var addform = $("#ADDbusiness");

    addform.on("submit", addslidersubmitHandler);

    function addslidersubmitHandler(e) {
        e.preventDefault();

        var formData = new FormData(addform[0]);
        console.log(formData);
        return false;

        // // DO POST
        $.ajax({
            type: "POST",
            enctype: "multipart/form-data",
            cache: false,
            processData: false,
            contentType: false,
            url: "/website/register",
            data: formData,
        })
            .done((res) => {
                if (res.error == true) {
                    renderToast({ message: res.message, icon: "error" });
                } else {
                    renderToast({ message: res.message, icon: "success" });
                    // setTimeout(() => {
                    //   window.location.replace("/admin/college/list");
                    // }, 1000);
                }
            })
            .fail(function (xhr, status, error) {
                console.log(xhr.responseText);
            });
    }
</script > --> */}

            {/* < !--ADD form-- > */}
            {/* <script>

  function getFormData($form) {
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};
  
        $.map(unindexed_array, function (n, i) {
          indexed_array[n["name"]] = n["value"];
        });
  
        return indexed_array;
    }
  
    var addform = $("#ADDbusiness");
  
    addform.on("submit", addslidersubmitHandler);
  
    function addslidersubmitHandler(e) {
      e.preventDefault();

      // if ($("#image").val() == "") {
      //   alert("Image is required");
      //   return false;
      // }



      // PREPARE FORM DATA
      var formData = new FormData(addform[0]);
            console.log(formData);

            // // DO POST
            $.ajax({
                type: "POST",
            enctype: "multipart/form-data",
            cache: false,
            processData: false,
            contentType: false,
            url: "/website/user/register",
            data: formData,
      })
        .done((res) => {
          if (res.error == true) {
                renderToast({ message: res.message, icon: "error" });
          } else {
                renderToast({ message: res.message, icon: "success" });
            setTimeout(() => {
                window.location.replace("/website/user/register_user?id=" + res.data._id + "");
            }, 1000);
          }
        })
            .fail(function (xhr, status, error) {
                console.log(xhr.responseText);
        });
    }

        </script>



        <!--script for open to next tab by click on next btn-- >
<script>
   $('.btnNext').click(function(){
  $('.business_form_main_section .nav-tabs  > .focus-active').next('li').find('a').trigger('click');
});

</script>


<!--Multiple select-- >
<script>
  document.getElementById("output").innerHTML = location.search;
  $(".chosen-select").chosen();
</script>


<!--show business type category by active className -->
<script>

  // $(".Category ").click(function () {
  //     setTimeout(function () {
  //       let id = $(".active input").val();
  //       let Business_Category_id = "Business_Category_id"
  //       // window.location.href = "/website/user/register?id=" + id + "&Business_Category_id=" + Business_Category_id;
  //     }, 100);
  //   });
</script>
<!--Multiple select-- >




 < !--Business Sub Category show-- >
<script>
  $(".businessCategoryID").click(function () {
    var data = { id: $(this).attr("data-id") };
    
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/website/appuser/bussinesCategory",
      data: JSON.stringify(data),
    })
    .done((res) => {
      if (res.status == true) {
        alert("Data Not Found");
      } else {
        let html = "";
        console.log(res.data);
        //  select me option add
        // html += `<option value="">Select Business Category</option>`;

            populateOptions(res.data);


        // res.data.forEach((element) => {
                //   html += `<option value="${element._id}">${element.name}</option>`;
                // });

                // console.log(html);

                $("#search-list").multiselect('rebuild');
        // var multi = document.getElementById("search-list");
        // multi.innerHTML = html;
        // const option = document.createElement('option');
        // option.value = data[i].value;
        // option.textContent = data[i].label;
        // select.appendChild(option);
      }
    });
    
  });

            function populateOptions(data) {
                console.log("data", data);
            const select = document.getElementById('search-list');
            select.innerHTML = '';

            for (let i = 0; i < data.length; i++) {
        const option = document.createElement('option');
            option.value = data[i]._id;
            option.textContent = data[i].name;
            select.appendChild(option);
      }
    }
        </script>






        {/* <!--add focus - active className on nav - item-- >
<script>
  $(document).ready(function(){
    $('.business_form_main_section .nav-tabs .nav-item').on('click', function(){
        $('.business_form_main_section .nav-tabs .nav-item').removeClass('focus-active');
        $(this).addClass('focus-active');
    })
});
</script>





<script> */}


            {/* <script>
function show_box(){
  // the second box will be hide by default
  $('.hour-box1').css('display', 'none');
  $('.hour-box2').css('display', 'none');
  $('.hour-box3').css('display', 'none');
  $('.hour-box4').css('display', 'none');
  $('.hour-box5').css('display', 'none');
  $('.hour-box6').css('display', 'none');
  $('.hour-box7').css('display', 'none');
   */}
            {/* // Show the second box when click on the frist box
  $('.day-box1 .switch span').click(function(){
    $(".hour-box1").slideToggle(400);
  });
  $('.day-box2 .switch span').click(function(){
    $(".hour-box2").slideToggle(400);
  });
  $('.day-box3 .switch span').click(function(){
    $(".hour-box3").slideToggle(400);
  });
  $('.day-box4 .switch span').click(function(){
    $(".hour-box4").slideToggle(400);
  });
  $('.day-box5 .switch span').click(function(){
    $(".hour-box5").slideToggle(400);
  });
  $('.day-box6 .switch span').click(function(){
    $(".hour-box6").slideToggle(400);
  });
  $('.day-box7 .switch span').click(function(){
    $(".hour-box7").slideToggle(400);
  });
}

show_box();
</script> */}


            {/* <!--business type category multi selector js-- > */}
            {/* <script>



            $(document).ready(function() {

                $(".Category").click(function () {
                    let businessId = $(".active input").val();
                    console.log(businessId, "businessId");
                    let Business_Category_id1 = businessId;
                    let option = $(".sub_category .dropdown-menu .inner .dropdown-menu li a");
                    // return console.log(option);
                    if (businessId === "64364ce399053d71438ed859") {
                        option.css("background-color", "red");
                    }

                });
});

        {/* </script> */}






        </>
    )
}

export default Getregister
