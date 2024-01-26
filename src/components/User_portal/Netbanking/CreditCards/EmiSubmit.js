import React from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";


const EMISubmit = () => {
    return (
        <div className="container-fluid convert_to_emi_submit_button" style={{marginTop:"90px"}}>
            <div className="row ">
                <div className="col-sm-12">
                    <div>
                        <h3>Convert To EMI</h3>
                        <hr />
                    </div>
                    <div className="convert_to_emi_faqs">
                        <button className="convert_to_emi_button_submit">FAQS</button>
                    </div>
                    <div className="d-flex">
                        <p>Credit Card Selected</p>
                        <p className="ml-3">5419XXXXXXXXXXX2194</p>
                    </div>
                    <div className="card">
                        <p>Covert your transactions worth <MdOutlineCurrencyRupee />96599 into easy EMIs</p>
                    </div>
                    <div className="container-fluid">
                    <div className="card mt-3">
                        <div className="row">
                            <div className="col-sm-1 convert_to_emi_items">
                                <p>Date</p>
                            </div>
                            <div className="col-sm-1 convert_to_emi_ref">
                                <p>Ref. Number</p>
                            </div>
                            <div className="col-sm-5 convert_to_emi_items">
                                <p>Transaction Details</p>
                            </div>
                            <div className="col-sm-3 convert_to_emi_items">
                                <p>Transaction Amount(INR)</p>
                            </div>
                            <div className="col-sm-2 convert_to_emi_items">
                                <p>Convert To EMI</p>
                            </div>

                        </div>
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-1 convert_to_emi_date">
                                    <p>19/12/2023</p>
                                </div>
                                <div className="col-sm-1 convert_to_emi_coloumn">

                                </div>
                                <div className="col-sm-5 convert_to_emi_coloumn">
                                    <p>DREAMPLUG TECHNOLGI BANGLORE,IN</p>
                                </div>
                                <div className="col-sm-3 convert_to_emi_coloumn">
                                    <p><MdOutlineCurrencyRupee />48000</p>
                                </div>
                                <div className="col-sm-2 convert_to_emi_coloumn">
                                    <input type="checkbox" />
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-1 convert_to_emi_date">
                                    <p>01/01/2024</p>
                                </div>
                                <div className="col-sm-1 convert_to_emi_coloumn">

                                </div>
                                <div className="col-sm-5 convert_to_emi_coloumn">
                                    <p>DREAMPLUG TECHNOLGI BANGLORE,IN</p>
                                </div>
                                <div className="col-sm-3 convert_to_emi_coloumn">
                                <p><MdOutlineCurrencyRupee />48599</p>
                                </div>
                                <div className="col-sm-2 convert_to_emi_coloumn">
                                    <input type="checkbox" />
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="mt-3">
                        <button className="convert_to_emi_button_submit">Back</button>
                    </div>
                    <div className="mt-4">
                        <h6>Note :</h6>
                    </div>
                    <div>
                        <ol>
                            <li>EMI amount does not include processing fee. Processing fee will be charged only once at the time of EMI conversion and will reflect in your current Credit Card statement</li>
                            <li>Foreclosure fee will be charged at 3% on the outstanding principal along with next month interest at the time of foreclosure.</li>
                            <li>Goods and Services Tax (GST) will be levied at 18% on fees, interest and other charges.</li>
                            <li>Cash, fuel and jewelry transactions are not eligible for conversion into EMI.</li>
                            <li>Transactions on commercial/ business cards will not be converted into EMI.</li>
                        </ol>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default EMISubmit;