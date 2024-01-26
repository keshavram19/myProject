import React from "react";

import Select from "react-select";
import { Link } from "react-router-dom";

const RegisteredBillers = () => {
    return (
        <div className="container-fluid registered_billers_card"  style={{marginTop:"90px"}}>
            <div className="row mt-2">
                <div className="col-sm-12">
                    <div className="card ">
                        <div>
                            <h3>Registered Billers</h3>
                            <hr />
                        </div>
                        <div className="registered_billers_heading mt-1">
                            <h5>Billers</h5>
                            <p>Displaying 1 - 1 of results</p>
                        </div>
                        <div className="container-fluid">
                            <div className="row ">
                                <div className="col-sm-1 registered_billers_items">
                                    <p>Select</p>
                                </div>
                                <div className="col-sm-1 registered_biller_item">
                                    <p>Biller Nickname</p>
                                </div>
                                <div className="col-sm-3 registered_billers_items">
                                    <p>Biller Name</p>
                                </div>
                                <div className="col-sm-4 registered_billers_items">
                                    <p>Consumer Details</p>
                                </div>
                                <div className="col-sm-2 registered_billers_items">
                                    <p>Biller Type</p>
                                </div>
                                <div className="col-sm-1 registered_billers_items">
                                    <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-1 registered_billers_coloumn">
                                    <input type="radio" id="international" name="option" value="options" checked />
                                </div>
                                <div className="col-sm-1 registered_billers_coloumn">

                                </div>
                                <div className="col-sm-3 registered_billers_coloumn">
                                    <span>Royal Islamic Credit Cards</span>
                                </div>
                                <div className="col-sm-4 registered_billers_coloumn">
                                    <span>Royal Islamic Credit Card No. </span>
                                </div>
                                <div className="col-sm-2 registered_billers_coloumn">
                                    <span>Payment</span>
                                </div>
                                <div className="col-sm-1 registered_biller_col">
                                    <span>Registration Accepted</span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="registered_billers_buttons_container">
                                <button className="registered_billers_ok_buttton">Modify Biller</button>
                                <button className="registered_billers_ok_buttton">Make Payment</button>
                                <button className="registered_billers_ok_buttton">Payment History</button>
                                <button className="registered_billers_ok_buttton">Remove Biller</button>
                                <button className="registered_billers_ok_buttton">Save As Favourite</button>
                            </div>
                        </div>
                        <div className="card registered_billers_download_button pt-2">
                            <div className="row">
                                <div className="col-sm-6">
                                    <button className="registered_billers_biller_button pt-3">When will my Biller update my payments?</button>
                                </div>
                                <div className="col-sm-6 registered_billers_biller_download">
                                    <p className="pt-3">Download Details As : </p>
                                    <Select  
                                    type='select'
                                            name=""
                                            id=""
                                            options={[
                                                { value: "pdf", label: "Pdf"  },
                                                { value: "word", label: "Word"  },
                                                { value: "doc", label: "Doc"  },
                                            ]} 
                                            className="registered_billers_select_tag"
                                    />
                                     <button className="registered_billers_ok_buttton">Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4>Notes:</h4>
                        <div>
                            <ol>
                                <li>The default registration status will be displayed as "Registration Accepted after a new biller is registered by you</li>
                                <li>If you have entered incorrect biller details the registration would be marked as "Invalid subject to confirmation received from the biller for registration status</li>
                                <li>Incase of an invalid registration, the biller will not appear in your registered biller list. Kindly refer to your physical bill and re-register with correct biller details</li>
                                <li>Please note that the bill will be uploaded on the site and auto-pay will be executed. This will take place when the bill is received from the biller</li>
                                <li>Any change initiated in "Your Registered Billers" option will be effective from your next billing cycle</li>
                                <li>#Payment to this biller can be made only through your linked ICICI Bank Account. All other billers can be paid through your linked Bank Account or Credit Card</li>
                            </ol>
                        </div>
                        <div className="card p-4">
                            <h6>Go Cashfree with Pockets! Make secure contactless payments at retail stores using your credit card with your NFC enabled smartphone via Touch & Pay on Pockets! <Link>Click here</Link> to know more</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default RegisteredBillers;