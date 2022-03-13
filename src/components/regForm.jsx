import React, {useState} from "react"

const RegForm = () =>
{
        const [inputs , setInputs] = useState({firstName: "",eMail: "", phoneNo:"",otp:""});

        const handleInputChange = (event) =>
        {
                event.persist();
                setInputs( inputs => ({...inputs,[event.target.name] : event.target.value}));
                console.log(inputs);
        }

    return (
            <form method="POST" action="https://timestsw.com/SalesForceAPI/insertLead.php" id="form-data-web" >
                 {/* <button className="close d-block d-lg-none"><span></span></button> */}
                <h3>Get Started</h3>

                        {/* Hidden */}

                        <input type="hidden" id="curname" name="curname" value="IIM Kashipur<br>Executive Certificate Program in Product and Brand Management" />
                        <input type="hidden" id="cursmailid" name="cursmailid" value="tswadmission@timesgroup.com" />
                        <input type="hidden" id="program_id" name="program_id" value="a065j000004jGN0AAM" />
                        <input type="hidden" id="sales_force_course_name" name="sales_force_course_name" value="IIMKashipur_Executive_Certificate_Program_in_Product_and_Brand_Management-01" />
                        <input type="hidden" id="url" name="url" value="" />
                        <input name="client_id_web" id="client_id_web" type="hidden" />
                        <input name="client_id_mob" id="client_id_mob" type="hidden" />	

                {/* Name */}

                <div className="form-group mb-2">
                    <input type="text" onChange={handleInputChange} value={inputs.firstName} name="firstName" id="first-name-web" className="form-control" placeholder="Name" required /> 
                </div>

                {/* Email */}

                <div className="form-group mb-2">
                    <input type="email" onChange={handleInputChange} value={inputs.eMail} name="eMail" id="e-mail-web" className="form-control" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required /> 
                </div>

                {/* Phone Numb. */}

                <div className="form-group mb-2">
                    <input type="tel" onChange={handleInputChange} value={inputs.phoneNo} name="phoneNo" id="phone-no-web" maxLength="10" className="form-control" placeholder="Phone Number" pattern="[0-9]{10}" required /> 
                </div>


                <div className="row p-0 m-0">
                        <div className="col-6 mb-2" id="otpdiv">  
                                <input onChange={handleInputChange} value={inputs.otp} type="number" name="otp" inputMode="numeric" id="otp" className="form-control fas fa-check" placeholder="Enter OTP*" /><i id="okOtp" ></i>
                                {/* <label htmlFor="otp_valid" generated="true" className="error" style="font-size: 14px;"></label> */}
                        </div>

                        <div className="col-6 mb-2" id="resOtpDiv">
                                <button type="button" id="otpVerify" className="form-control verifyOtp">Verify OTP</button>
                                <div id="timerDiv" > <span id="timer"></span> seconds</div>

                                {/* Hidden */}
                                <input type="hidden" id="isVerify" />
                                <input type="hidden"  name="variable_new" id="variable_new" />
                                <input type="hidden"  name="progNameOtp" id="progNameOtp" value="IIMK ECPPBM"/>
                        </div>
                </div>

                <div className="row  mb-2">

                    <div className="col-6">
                    
                        <select name="city" id="city-web" className="form-control input" required>
                                <option value="">City</option>
                                <option value="Delhi NCR">Delhi NCR</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Pune">Pune</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Kashipur">Kashipur</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Other">Other</option>    
                        </select>

                    </div>

                    <div className="col-6">
                            <select name="number-exp" id="number-exp-web" className="form-control input" required>
                                <option value="">Experience</option>
                                <option value="3-5-Years">3-5-Years</option>
                                <option value="5-10-Years">5-10-Years</option>
                                <option value="10-15-Years">10-15-Years</option>
                                <option value="15-Years+">15-Years+</option>
                            </select>
                    </div>
                </div>

                <div className="form-group mb-2">
                        <div className="single-input checked">
                            <label for="checkone" className="m-0">
                            <input type="checkbox" id="checkone-web" name="checkone" value="disclaimer" required="" className="mr-2" /> You agree to our <a href="https://timestsw.com/terms-of-use/" target="_blank" >terms and conditions</a> and our <a href="https://timestsw.com/privacy-policy/" target="_blank">Privacy Policy</a>.
                            <br /> Disclaimer By submitting my contact details here, I override my NDNC registration and authorise TimesTSW and its authorised representatives can contact me. </label>
                        </div>
                </div>

                {/* Submit */}

                <div className="form-group mb-0">
                    <input type="submit" value="Apply Now" id="apply_now" name="apply_smp" className="apply-btn" /> 
                </div>

            </form>)
}

export default RegForm